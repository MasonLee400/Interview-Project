import { editDog } from "@/actions/actions";
import prisma from "@/app/lib/db";
import NavBar2 from "@/components/Navbar2/page";

export default async function EditPage({ params }) {
  const dog = await prisma.dog.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <main>
      <NavBar2 />
      <div className="flex flex-col items-center p-20">
        <h1 className="text-5xl font-bold mb-10">EDIT</h1>
        <form action={editDog} className="flex flex-col items-center">
          <h3 className="text-2xl mb-10">
            Name:
            <input
              type="text"
              name="name"
              placeholder={dog?.name}
              className="ml-4 border border-black rounded-md p-1"
            />
          </h3>
          <h3 className="text-2xl mb-10">
            Breed:
            <input
              type="text"
              name="breed"
              placeholder={dog?.breed}
              className="ml-4 border border-black rounded-md p-1"
            />
          </h3>
          <h3 className="text-2xl mb-10">
            Age:
            <input
              type="text"
              name="age"
              placeholder={String(dog?.age)}
              className="ml-4 border border-black rounded-md p-1"
            />
          </h3>
          <h3 className="text-2xl mb-14">
            Owner:
            <input
              type="text"
              name="owner"
              placeholder={dog?.owner}
              className="ml-4 border border-black rounded-md p-1"
            />
          </h3>
          <input type="hidden" name="id" value={dog?.id} />
          <button
            type="submit"
            className="mb-6 dark:bg-gray-900 text-white text-lg py-4 px-10 rounded-2xl transform transition duration-200 hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </main>
  );
}
