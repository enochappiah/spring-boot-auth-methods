import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
          Welcome to the Authentication Page
        </h1>
        <p className="text-center text-gray-700">
          Please choose an option below to get started.
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <Link href="/signup"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create an Account
          </Link>
          <Link href="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
