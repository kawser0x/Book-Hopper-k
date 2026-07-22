import React from "react";

const ShowBooks = ({ book }) => {
  console.log(book);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={book.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.author}
            <div className="badge badge-primary">{book.category}</div>
          </h2>
          <p>{book.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
