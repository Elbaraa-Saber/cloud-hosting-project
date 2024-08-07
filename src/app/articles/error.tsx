// this error page is a special for articles page errors

"use client";
import Link from "next/link";

interface ErrorPageProps {
  // Next.js will get this Error and message from this file where u have an error
  error: Error;
  reset: () => void;
}

const ArticlesErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="fix-height  pt-7 text-center">
      <p className="mb-2">This is custom error page for articles route/page</p>
      <div className="text-3xl text-red-600 font-semibold">
        Somethig went wrong
      </div>
      <h2 className="text-gray-700 my-3 text-xl">
        Error Messege: {error.message}
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Try again
      </button>
      <Link href="/" className="text-xl underline text-blue-700 block mt-6">
        Go to home page
      </Link>
    </div>
  );
};

export default ArticlesErrorPage;
