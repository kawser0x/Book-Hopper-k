import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import BooksPage from "./books/page";
import BestSellingBook from "./bestsellingbook/page";
import RatingPage from "./rating/page";

export default function Home() {
  return (
    <div className="p-5 space-y-5">
      <Latest />
      <Hero />
      <BooksPage />
      <BestSellingBook/>
      <RatingPage/>
    </div>
  );
}
