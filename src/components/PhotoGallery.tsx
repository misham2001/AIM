import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const PhotoGallery = () => {
  return (
    <div className="">
     
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default PhotoGallery;

type CardType = {
  url: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/src/Assert/Im5.jpg",
    id: 1,
  },
  {
    url: "/src/Assert/Im2.jpg",
 
    id: 2,
  },
  {
    url: "/src/Assert/Im3.jpg",
 
    id: 3,
  },
  {
    url: "/src/Assert/Im4.jpg",
   
    id: 4,
  },
  {
    url: "/src/Assert/Im1.jpg",
  
    id: 5,
  },
  {
    url: "/src/Assert/Im6.jpg",
 
    id: 6,
  },
  {
    url: "/src/Assert/Im1.jpg",
    
    id: 7,
  },
];