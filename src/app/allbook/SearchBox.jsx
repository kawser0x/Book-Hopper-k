"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("catagory") || "",
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/allbook?catagory=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      router.push("/"); 
    }
  };

  return (
    <form onSubmit={handleSearch} className="join">
      <div>
        <label className="input validator join-item">
          <input
            type="text"
            placeholder="Enter category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit" className="btn btn-neutral join-item">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
