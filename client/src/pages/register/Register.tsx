import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import logoFull from "../../assets/full_logo.png";

import { registerUser } from "../../firebase/api/auth";
import { UserCredentials } from "../../types/user.types";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>();

  const onSubmit = async (data: UserCredentials) => {
    try {
      const user = await registerUser(data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cols-span-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-[100vh] w-full overflow-hidden rounded-lg bg-white p-5 shadow"
        >
          <div className="flex flex-col items-start justify-center px-4 py-5 sm:px-6">
            <Link to="/">
              <img className="h-20" src={logoFull} alt="Marv_logo" />
            </Link>
            <h1 className="text-4xl"> Create an account </h1>
          </div>
          <div className="w-full px-4 py-5 sm:p-6">
            {/* first name */}
            <div className="mt-4 flex flex-col items-start justify-start">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="relative mt-2 w-full rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="password"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="first name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
              </div>
            </div>
            {/* last name */}
            <div className="mt-4 flex flex-col items-start justify-start">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="relative mt-2 w-full rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="lastName"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="last name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>This field is required</span>}
              </div>
            </div>
            {/* email input */}
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
                  id="email"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            {/* password input */}
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
                  id="password"
                  className="focus:ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="********"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="bg-custom-green mt-4 w-full rounded-md py-2 text-white hover:opacity-80"
              >
                Create account
              </button>
            </div>

            <div className="px-4 py-2 sm:px-6">
              <div className="flex-col items-center justify-center py-4 text-sm">
                <div>Already have an account?</div>
                <a href="/login" className="text-custom-green">
                  Login here
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
