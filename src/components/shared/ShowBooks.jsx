import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowBooks = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm w-full h-full">
      <figure className="p-5">
        <Image
          src={book.image_url}
          alt={book.title}
          width={150}
          height={80}
          className="object-contain"
        />
      </figure>

      <div className="card-body flex flex-col">
        <h2 className="card-title wrap-anywhere">
          {book.author}
          <div className="badge badge-accent whitespace-nowrap text-white">
            {book.category}
          </div>
        </h2>

        <p className="grow">{book.description}</p>

        <div className="card-actions mt-auto pt-4">
          <Link href={`/books/${book.id}`} className="w-full">
            <button className="btn btn-primary w-full">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
