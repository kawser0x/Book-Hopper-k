import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowBooks = ({ book }) => {
  console.log(book);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm max-w-full">
        <figure className="p-5">
          <Image
            src={book.image_url}
            alt={book.title}
            width={100}
            height={80}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {book.author}
            <div className="badge badge-accent">{book.category}</div>
          </h2>
          <p>{book.description}</p>
          <div className="card-actions ">
            <Link href={`/books/${book.id}`}>
              <button className="btn btn-primary ">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
