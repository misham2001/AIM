import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Outreach from "../Assert/Image/Outreach.jpg";
import OurChurch from "../Assert/Image/OurChurch.jpg";
import Ministry from "../Assert/Image/ministry.jpg";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white container mx-auto px-4">
      <TextParallaxContent
        imgUrl={Outreach}
        subheading="Our Activity"
        heading="Outreach Program" 
      >
        <OutreachContent />
      </TextParallaxContent>

      <TextParallaxContent
       imgUrl={Ministry}
        subheading="Bastar Ministry"
        heading="Community Impact"
      >
        <BastarMinistryContent />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={OurChurch}
        subheading="Our Church"
        heading="The Best Place"
      >
        <ChurchContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

// Specific content for each section
const OutreachContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Outreach Program Highlights
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Our outreach programs focus on uplifting communities, providing support
        and resources to those in need.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        We organize regular events to ensure no one is left behind in their
        journey toward a better future.
      </p>
    </div>
  </div>
);

const BastarMinistryContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Bastar Ministry Impact
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Our Bastar Ministry works tirelessly to bring education, healthcare,
        and community development to remote areas.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Together, we aim to create lasting change and build strong foundations
        for future generations.
      </p>
    </div>
  </div>
);

const ChurchContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Welcome to Our Church
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Our church is a place of worship, fellowship, and spiritual growth. We
        welcome everyone with open arms.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Join us to experience a sense of community and deepen your faith
        journey with us.
      </p>
    </div>
  </div>
);
