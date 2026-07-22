import ShowBooks from "@/components/shared/ShowBooks";

const BooksPage = async () => {
  const data = await fetch("https://book-hopper-k.vercel.app/data.json");
  const res = await data.json();

  return (
    <div>
      {res.slice(0,4).map((book) => (
        <ShowBooks key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksPage;
