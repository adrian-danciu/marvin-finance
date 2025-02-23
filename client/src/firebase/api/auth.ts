import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";

import { UserCredentials } from "../../types/user.types";

import { setLoginStatus, setUserDetails } from "../../store/actions";
import { persistor, store } from "../../store/store";

const addUserToFirestore = async (
  userId: string,
  userDetails: Partial<UserCredentials>
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
      password
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
      password
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

const providerMap = {
  google: new GoogleAuthProvider(),
  facebook: new FacebookAuthProvider(),
  github: new GithubAuthProvider(),
};

type ProviderKey = keyof typeof providerMap;

export const loginUserProvider = async (providerKey: ProviderKey) => {
  const provider = providerMap[providerKey];
  if (!provider) throw new Error("Unsupported provider");

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const providerData = user.providerData[0];
    const email = providerData.email || "";
    const firstName = providerData.displayName?.split(" ")[0] || "";
    const lastName =
      providerData.displayName?.split(" ").slice(1).join(" ") || "";
    const userDetails = {
      email,
      firstName,
      lastName,
      createdAt: new Date().toISOString(),
    };

    if (user.uid) {
      await setDoc(doc(db, "users", user.uid), userDetails, { merge: true });
      console.log("User details saved to Firestore");
    }

    store.dispatch(setUserDetails(userDetails as UserCredentials));
    store.dispatch(setLoginStatus(true));

    return user;
  } catch (error) {
    console.error("Error with provider login:", error);
    throw error;
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

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
