import Link from "next/link";

const Catagorys = async () => {
  const data = await fetch("https://book-hopper-k.vercel.app/catagory.json");
  const res = await data.json();

  return (
    <div>
      {res.map((catagory) => (
        <Link
          key={catagory.id}
          href={`?catagory=${catagory.name.toLowerCase()}`}>
          <button className="btn btn-outline">{catagory.name} </button>{" "}
        </Link>
      ))}
    </div>
  );
};

export default Catagorys;
