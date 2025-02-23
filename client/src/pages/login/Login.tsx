import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoFull from "../../assets/full_logo.png";
import google from "../../assets/google.svg";
import DialogComponent from "../../components/_core/Dialog/Dialog";
import { getResetPasswordContent } from "../../constants/resetPassword.content";
import {
  fetchUserDetails,
  loginUserEmail,
  loginUserProvider,
  resetPassword,
} from "../../firebase/api/auth";
import { setLoginStatus, setUserDetails } from "../../store/actions";
import { UserCredentials } from "../../types/user.types";

const Login: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<UserCredentials>>();

  const handleDialog = () => {
    console.log(resetEmail);
    resetPassword(resetEmail);
    setDialogOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const dialogContent = getResetPasswordContent(
    resetEmail,
    setResetEmail,
    handleDialog,
    handleDialogClose,
  );

  const onLogin = async (data: Partial<UserCredentials>) => {
    try {
      const userCredential = await loginUserEmail(
        data.email as string,
        data.password as string,
      );
      const userDetails = await fetchUserDetails(userCredential?.uid as string);
      dispatch(setLoginStatus(true));
      dispatch(setUserDetails(userDetails as UserCredentials));

      navigate("/app");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const providerLogin = async () => {
    await loginUserProvider("google");
    navigate("/app");
  };

  return (
    <div className="cols-span-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onLogin)}
          className="h-[100vh] w-full overflow-hidden rounded-lg bg-white p-5 shadow"
        >
          <div className="flex flex-col items-start justify-center px-4 py-5 sm:px-6">
            <Link to="/">
              <img className="h-20" src={logoFull} alt="Marv_logo" />
            </Link>
            <h1 className="text-4xl"> Sign in </h1>
          </div>
          <div className="w-full px-4 py-5 sm:p-6">
            <div className="mt-4 flex flex-col items-start justify-start">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="relative mt-2 w-full rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="font-semibold text-red-500">
                  This field is required
                </p>
              )}
            </div>

            <div className="mt-4 flex flex-col items-start justify-start">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-2 w-full rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  id="password"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="********"
                />
              </div>
              {errors.password && (
                <p className="font-semibold text-red-500">
                  This field is required
                </p>
              )}
            </div>
            <div className="mt-2 flex flex-col items-center justify-center gap-4">
              <button className="bg-custom-green mt-4 w-full rounded-md py-2 text-white hover:opacity-80">
                Login
              </button>
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => providerLogin()}
                  className="flex w-full items-center justify-center gap-4 rounded-md border-2 py-2 text-black hover:opacity-60"
                >
                  <img src={google} className="w-6" />
                  Sign in with Google
                </button>
              </div>
            </div>
            <div className="px-4 py-2 sm:px-6">
              <div className="flex-col items-center justify-center py-4 text-sm">
                <div>
                  Forgott your password?{" "}
                  <span
                    onClick={() => setDialogOpen(true)}
                    className="text-custom-green cursor-pointer hover:underline"
                  >
                    Reset it here.
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4 py-2 sm:px-6">
              <div className="flex-col items-center justify-center py-4 text-sm">
                <div>Don't have an account?</div>
                <a
                  href="/register"
                  className="text-custom-green hover:underline"
                >
                  Create one here
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <DialogComponent
        open={dialogOpen}
        setOpen={setDialogOpen}
        content={dialogContent}
      />
    </div>
  );
};

export default Login;
