import Image from "next/image";
import Link from "next/link";
import prisma from "./lib/db";
import { createDog } from "@/actions/actions";
import { deleteDog } from "@/actions/actions";
import NavBar from "@/components/NavBar1/page";

export default async function Home() {
  const dogs = await prisma.dog.findMany({
    where: {
      hidden: false,
    },
  });
  return (
    <main>
      <NavBar />
      <div className="flex justify-center gap-y-5 pt-16 text-center px-28">
        <div className="container mx-auto p-4">
          <ul className="grid grid-cols-1 sm:grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-20 mb-14">
            {dogs.map((dog) => (
              <li
                key={dog.id}
                className="flex flex-col items-center shadow-md border-2 border-black rounded-2xl px-6 pt-6 transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <Image
                  src="/Dog.jpeg" // Use relative path for static images or absolute URL for external images
                  alt="Description of the image"
                  width={250} // The intrinsic width of the image
                  height={300} // The intrinsic height of the image
                  className="mb-6 rounded-xl"
                />
                <h1 className="text-3xl mb-4">{dog.name}</h1>
                <h3 className="text-lg mb-4">Breed: {dog.breed}</h3>
                {/* <h3 className="text-lg mb-4">Age: {dog.age}</h3>
              <h3 className="text-lg mb-6">Owner: {dog.owner}</h3> */}
                <Link href={`/Details/${dog.id}`}>
                  <button
                    type="submit"
                    className="mb-6 dark:bg-gray-900 text-white py-4 px-10 rounded-2xl transform transition duration-200 hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </Link>
                <form action={deleteDog}>
                  <input type="hidden" name="id" value={dog?.id} />
                  <button
                    type="submit"
                    className="mb-6 dark:bg-gray-900 text-white py-4 px-10 rounded-2xl transform transition duration-200 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </form>
              </li>
            ))}
            <li className="flex flex-col items-center shadow-md border-2 border-black rounded-2xl px-6 transform transition duration-300 hover:shadow-xl hover:scale-105">
              <form action={createDog} className="flex flex-col items-center">
                <h1 className="text-3xl mb-4 mt-16 mb-6">Enter A New Dog</h1>
                <h3 className="text-xl mb-4">
                  Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="ml-4 border border-black rounded-md p-1"
                    required
                  />
                </h3>
                <h3 className="text-xl mb-4">
                  Breed:
                  <input
                    type="text"
                    name="breed"
                    placeholder="Breed"
                    className="ml-4 border border-black rounded-md p-1"
                    required
                  />
                </h3>
                <h3 className="text-xl mb-4">
                  Age:
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    className="ml-4 border border-black rounded-md p-1"
                    required
                  />
                </h3>
                <h3 className="text-xl mb-10">
                  Owner:
                  <input
                    type="text"
                    name="owner"
                    placeholder="Owner"
                    className="ml-4 border border-black rounded-md p-1"
                    required
                  />
                </h3>
                <button
                  type="submit"
                  className="mb-6 dark:bg-gray-900 text-white py-4 px-10 rounded-2xl transform transition duration-200 hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
