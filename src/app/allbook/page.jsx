import Catagorys from "@/components/Catagorys";
import ShowBooks from "@/components/shared/ShowBooks";
import SearchBox from "./SearchBox";

const AllBookPage = async ({ searchParams }) => {
  const { catagory } = await searchParams;
  const data = await fetch("https://book-hopper-k.vercel.app/data.json");
  const res = await data.json();

  const filterbook = catagory
    ? res.filter(
        (book) => book.category.toLowerCase() == catagory.toLowerCase(),
      )
    : res;

  return (
    <div className="space-y-3 pt-3">
      <h2 className="font-bold text-2xl pl-1">All Books :</h2>
      <div className="flex justify-between px-5">
        <div>
          <Catagorys />
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {filterbook.length > 0 ? (
          filterbook.map((book) => <ShowBooks key={book.id} book={book} />)
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl font-bold">
              No books found for this category!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBookPage;
