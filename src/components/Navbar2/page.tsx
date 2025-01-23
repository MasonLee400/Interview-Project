import Link from "next/link";

export default function NavBar2() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white transform transition duration:300 hover:text-blue-500"
        >
          Dog Website
        </Link>
      </div>
    </nav>
  );
}
