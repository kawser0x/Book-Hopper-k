import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import BooksPage from "./books/page";

export default function Home() {
  return (
    <div className="p-5 space-y-5">
      <Hero />
      <Latest />
      <BooksPage />
    </div>
  );
}
