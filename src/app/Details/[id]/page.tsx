import Link from "next/link";
import prisma from "@/app/lib/db";
import Image from "next/image";
import NavBar2 from "@/components/Navbar2/page";
export default async function DetailsPage({ params }) {
  const dog = await prisma.dog.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <main>
      <NavBar2 />
      <div className="flex flex-col items-center pt-16">
        <Image
          src="/Dog.jpeg" // Use relative path for static images or absolute URL for external images
          alt="Description of the image"
          width={300} // The intrinsic width of the image
          height={300} // The intrinsic height of the image
          className="mb-6 rounded-xl"
        />
        <h1 className="text-3xl mb-4">Name: {dog?.name}</h1>
        <h1 className="text-3xl mb-4">Breed: {dog?.breed}</h1>
        <h1 className="text-3xl mb-4">Age: {dog?.age}</h1>
        <h1 className="text-3xl mb-14">Owner: {dog?.owner}</h1>
        <div className="flex flex-row">
          <Link href={`/Edit/${dog?.id}`}>
            <button
              type="submit"
              className="mb-6 dark:bg-gray-900 text-white py-4 px-10 rounded-2xl transform transition duration-200 hover:bg-blue-700 text-xl"
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
