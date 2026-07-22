import Image from "next/image";
import Link from "next/link";
import React from "react";
import BuyButton from "../books/[id]/BuyButton";

const BestSellingBook = async () => {
  const data = await fetch("https://book-hopper-k.vercel.app/data.json");
  const res = await data.json();

  const book = res[0];

  return (
    <div className="bg-mist-200 p-5">
      <h2 className="font-bold text-2xl py-3">Best Selling Book :</h2>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 shadow-sm  gap-5 bg-gray-100">
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
          <div className="flex justify-between">
            <p>Available Books : {book.available_quantity}</p>
            <p className="badge badge-accent">{book.category}</p>
          </div>
          <p>{book.description}</p>
          <p className="font-bold text-3xl ">Details :</p>
          <p className="font-medium text-l ">{book.details}</p>

          <BuyButton key={book.id} bookTitle={book.title} />
        </div>
      </div>
    </div>
  );
};

export default BestSellingBook;
