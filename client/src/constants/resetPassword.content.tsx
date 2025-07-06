import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const getResetPasswordContent = (
  email: string,

  setEmail: (email: string) => void,
  onSubmit: () => void,
  onCancel: () => void,
) => ({
  title: "Reset your password",
  description:
    "Please fill in the email address associated with your account. We will send you a link to reset your password via email.",
  icon: (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
      <EnvelopeIcon className="text-custom-green h-8 w-8" aria-hidden="true" />
    </div>
  ),
  children: () => (
    <div className="mt-4 flex flex-col items-start justify-start">
      <label
        htmlFor="email-reset"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="relative mt-2 w-full rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email-reset"
          id="email-reset"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="your@example.com"
        />
      </div>
    </div>
  ),
  btnText: "Send reset link",
  btnSubmit: onSubmit,
  btnCancel: onCancel,
});
