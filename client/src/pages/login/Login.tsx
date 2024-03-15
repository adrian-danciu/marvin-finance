import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import logoFull from "../../assets/full_logo.png";
import { useState } from "react";
import DialogComponent from "../../components/_core/Dialog/Dialog";
import { resetPasswordContent } from "../../constants/resetPassword.content";

const Login: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const dialogContent = {
    ...resetPasswordContent,
    btnSubmit: () => setDialogOpen(false),
    btnCancel: () => setDialogOpen(false),
  };

  return (
    <div className="cols-span-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="h-[100vh] w-full overflow-hidden rounded-lg bg-white p-5 shadow">
          <div className="flex flex-col items-start justify-center px-4 py-5 sm:px-6">
            <img className="h-20" src={logoFull} alt="Marv_logo" />
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
                  name="email"
                  id="email"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
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
                  name="password"
                  id="password"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="mt-2">
              <button className="bg-custom-green mt-4 w-full rounded-md py-2 text-white hover:opacity-80">
                Login
              </button>
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
        </div>
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
