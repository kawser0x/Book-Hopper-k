import ShowBooks from "@/components/shared/ShowBooks";

const BooksPage = async () => {
  const data = await fetch("https://book-hopper-k.vercel.app/data.json");
  const res = await data.json();

  return (
    <div className="grid sm: grid-cols-1 md:grid-cols-3 gap-5">
      {res.slice(0,4).map((book) => (
        <ShowBooks key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksPage;
