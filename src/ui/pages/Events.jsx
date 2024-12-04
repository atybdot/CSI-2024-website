import React from "react";
import { Carousel, Card } from "../components/stats/carousel";
import items from "$utils/UpcomEvList";
import Masonry from "react-masonry-css";

export default function Events() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  const breakpointColumns = {
    default: 3, // 4 columns for large screens
    1100: 3,    // 3 columns for medium screens
    700: 2,     // 2 columns for small screens
    500: 1,     // 1 column for very small screens
  };

  return (
      (<div className="w-full h-screen">
          <div className="w-full h-[90vh] py-32 bg-gradient-to-tr from-teal-700 to-fuchsia-950">
              <h2
                  className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
                  Events
              </h2>
              <Carousel items={cards} />
          </div>
          <div className="w-full py-32 bg-black-russian-900">
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4">
            {items.map((item, index) => (
              <>
                <div key={`spacer-${index}`} className={`h-${index % 2 === 0 ? '20' : '32'}`} />
                <div key={index} className="mb-4 flex justify-center">
                  <img
                    src={item.img}
                    alt={`Masonry item ${index}`}
                    className="w-[75%] rounded-lg shadow-lg object-cover"
                  />
                </div>
              </>
            ))}
          </Masonry>

          </div>
      </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
