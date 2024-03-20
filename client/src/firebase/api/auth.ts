import { auth, db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { UserCredentials } from "../../types/user.types";

import { store, persistor } from "../../store/store";
import { setLoginStatus, setUserDetails } from "../../store/actions";

const addUserToFirestore = async (
  userId: string,
  userDetails: Partial<UserCredentials>,
) => {
  try {
    await setDoc(doc(db, "users", userId), userDetails);
    console.log("User added to Firestore with UID:", userId);
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
    throw error;
  }
};

export const registerUser = async (userData: UserCredentials) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    if (user) {
      await addUserToFirestore(user.uid, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        createdAt: new Date().toISOString(),
      });
      return user;
    }
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUserEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    if (user) {
      const userDetails = await fetchUserDetails(user.uid);

      store.dispatch(setUserDetails(userDetails as UserCredentials));
      store.dispatch(setLoginStatus(true));

      return user;
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const loginUserProvider = async (provider: string) => {
  const google = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();
  const github = new GithubAuthProvider();

  if (provider === "google") {
    return await signInWithPopup(auth, google);
  } else if (provider === "facebook") {
    return await signInWithPopup(auth, facebook);
  } else if (provider === "github") {
    return await signInWithPopup(auth, github);
  }
};

export const fetchUserDetails = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User data:", { ...docSnap.data(), id: userId });
      return { ...docSnap.data(), id: userId } as UserCredentials;
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user details from Firestore:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);

    store.dispatch(setLoginStatus(false));
    store.dispatch(setUserDetails({} as UserCredentials));

    await persistor.purge();
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
