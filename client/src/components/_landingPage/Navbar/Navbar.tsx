import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { logoutUser } from "../../../firebase/api/auth";
import { UserCredentials } from "../../../types/user.types";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

interface NavbarProps {
  isLoggedIn: boolean;
  userDetails: UserCredentials;
}

export default function Navbar({ isLoggedIn, userDetails }: NavbarProps) {
  const navigate = useNavigate();

  console.log(userDetails);

  const handleLogout = async (e: any) => {
    e.preventDefault();
    await logoutUser();
    navigate("/login");
  };

  return (
    <Disclosure as="nav" className="fixed z-10 w-full bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="focus:ring-custom-green relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4 md:space-x-8">
                  <a
                    href="#"
                    className="border-custom-green inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Projects
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isLoggedIn ? (
                  <>
                    <button
                      type="button"
                      className="focus:ring-custom-green relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4CC29A] focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/logout"
                                onClick={handleLogout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                ) : (
                  <Menu as="div" className="relative ml-3 hidden sm:block">
                    <div className="flex justify-center gap-4">
                      <Link
                        to="/register"
                        className="bg-custom-green inline-flex items-center rounded-md border border-transparent font-medium text-white hover:opacity-80 sm:px-2 sm:py-0 sm:text-xs md:px-4 md:py-2 lg:text-sm"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/login"
                        className="text-custom-green inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100"
                      >
                        Sign in
                      </Link>
                    </div>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="relative z-10 space-y-1 pb-4 pt-2 ">
              <Disclosure.Button
                as="a"
                href="#"
                className="border-custom-green text-custom-green block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
              <div className="flex justify-center gap-4">
                <Link
                  to="/register"
                  className="bg-custom-green inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:opacity-70"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="text-custom-green inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
