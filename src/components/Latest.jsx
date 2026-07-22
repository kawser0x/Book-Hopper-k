import Marquee from "react-fast-marquee";

const news = [
  {
    id: "news-2026-001",
    title:
      "BookHopper Expands Library to Include Over 5,000 New Interactive Story Titles",
  },
  {
    id: "news-2026-002",
    title:
      "Tech Category Update: New Advanced Quantum Computing and AI Manuals Now Available",
  },
  {
    id: "news-2026-003",
    title:
      "BookHopper Hits 1 Million Digital Borrows as Reading Community Rallies Globally",
  },
  {
    id: "news-2026-004",
    title:
      "Science Section Expands with Exclusive Access to NASA and Space Exploration Research Archives",
  },
  {
    id: "news-2026-005",
    title:
      "Platform Update: Lightning-Fast Instant E-Reader Syncing Deployed Across All Devices",
  },
];

const Latest = () => { 
  return (
    <div className="flex container mx-auto gap-4 bg-gray-100  justify-between ">
      <button className="btn bg-pink-500">Latest News</button>
      <Marquee pauseOnHover={true} speed={50}>
        {news.map((n) => (
          <span key={n.id} className="mr-10 ">
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Latest;
