"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthPage: React.FC = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);
  const router = useRouter();

  // Function to handle form submission
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic for account creation
    console.log("Account created");
    router.push("/login"); // Redirect to login page after creating an account
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic for sign in
    console.log("Signed in");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setIsCreatingAccount(true)}
            className={`py-2 px-4 rounded-t-md ${
              isCreatingAccount ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Create Account
          </button>
          <button
            onClick={() => setIsCreatingAccount(false)}
            className={`py-2 px-4 rounded-t-md ${
              !isCreatingAccount ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Sign In
          </button>
        </div>

        {isCreatingAccount ? (
          <form
            onSubmit={handleCreateAccount}
            className="mt-8 space-y-6 bg-white shadow-md rounded-lg p-8"
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Account
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSignIn}
            className="mt-8 space-y-6 bg-white shadow-md rounded-lg p-8"
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label
                  htmlFor="email-signin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email-signin"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password-signin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password-signin"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
