import ShowBooks from "@/components/shared/ShowBooks";

const AllBookPage = async () => {
  const data = await fetch("https://book-hopper-k.vercel.app/data.json");
  const res = await data.json();

  return (
    <div className="space-y-3 pt-3">
        <h2 className="font-bold text-2xl pl-1">All Books :</h2>
      <div className="grid sm: grid-cols-1 md:grid-cols-3 gap-5">
        {res.map((book) => (
          <ShowBooks key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBookPage;
