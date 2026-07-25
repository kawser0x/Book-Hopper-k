"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Catagorys = () => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("catagory");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://book-hopper-k.vercel.app/catagory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {/* Button to show all books */}
      <Link href="/allbook">
        <button
          className={`btn rounded-full ${
            !currentCategory ? "btn-primary text-white" : "btn-outline"
          }`}>
          All
        </button>
      </Link>

      {/* Buttons for each category */}
      {categories.map((cat) => {
        const catName = cat.name.toLowerCase();
        const isSelected = currentCategory === catName;

        return (
          <Link key={cat.id} href={`?catagory=${catName}`}>
            <button
              className={`btn rounded-full ${
                isSelected ? "btn-primary text-white" : "btn-outline"
              }`}>
              {cat.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Catagorys;