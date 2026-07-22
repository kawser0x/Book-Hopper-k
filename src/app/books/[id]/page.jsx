
import Image from "next/image";
import React from "react";
import BuyButton from "./BuyButton";

async function getBookDetails(id) {
  const res = await fetch("https://book-hopper-k.vercel.app/data.json");

  const books = await res.json();
  return books.find((book) => String(book.id) === String(id));
}

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const book = await getBookDetails(id);

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 shadow-sm bg-mist-100 gap-5">
      <div className="relative w-full h-64 md:h-full">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-contain rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="justify-center items-center text-start space-y-3">
        <h2 className="font-bold text-2xl">{book.title}</h2>
        <h3 className="text-l">
          By : <span className="font-bold text-xl">{book.author}</span>
        </h3>
        <div className="divider"></div>
        <p>Available Books : {book.available_quantity}</p>
        <p className="font-bold text-3xl ">Details :</p>
        <p className="font-medium text-l ">{book.details}</p>

        <BuyButton key={book.id} bookTitle={book.title} /> 
      </div>
    </div>
  );
};

export default BookDetailsPage;
