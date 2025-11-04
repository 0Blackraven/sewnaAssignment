import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, X } from "lucide-react";
import { Button } from "./ui/button";

export interface iTestimonial {
  name: string;
  description: string;
  profileImage: string;
  rating:number;
  number:number;
  email:string;
  website:string;
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [_canScrollLeft, setCanScrollLeft] = useState(false);
  const [_canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleCardClose = () => {
    if (carouselRef.current) {
      // const cardWidth = isMobile() ? 230 : 384;
      // const gap = isMobile() ? 4 : 8;
      // const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        // left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-0"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="absolute  z-1000 w-[5%] overflow-clip bg-linear-to-l" />
        <div className="flex flex-row justify-start gap-4 h-full w-full ">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={`card-${index}`}
              className="last:pr-0 md:last:pr-0 rounded-3xl"
            >
              {React.cloneElement(item, {
                onCardClose: () => handleCardClose(),
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
  testimonial: iTestimonial;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "auto";
      window.scrollTo({ top: scrollY, behavior: "auto" });
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 flex items-center justify-center h-dvh z-50">
            <div className="">
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-red backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl p-3 bg-linear-to-b from-[#f2f0eb] to-[#fff9eb] h-full z-60 rounded-3xl relative "
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-[#4b3f33]"
                onClick={handleCollapse}
              >
                <X className="h-6 w-6 text-white dark:text-neutral-900 absolute" />
              </button>
              <motion.p className="text-2xl md:text-4xl font-normal italic text-[rgba(31, 27, 29, 0.7)] mt-4 dark:text-white font-tiemposHeadline lowercase m-8">
                {testimonial.name}
              </motion.p>
              <div className="text-[rgba(31, 27, 29, 0.7)] text-3xl lowercase font-thin font-tiemposHeadline leading-snug tracking-wide flex flex-col gap-10">
                <div className="flex gap-5">
                  <div className="text-[rgba(31, 27, 29, 0.7)] text-semibold">Website :</div>
                  <a className="text-[rgba(31, 27, 29, 0.7)]" href={`${testimonial.website}`}>{testimonial.website}</a>
                </div>
                <div className="flex gap-5">
                  <div className="text-[rgba(31, 27, 29, 0.7)] text-semibold">Email :</div>
                  <div className="text-[rgba(31, 27, 29, 0.7)]">{testimonial.email}</div>
                </div>
                <div className="flex gap-5">
                  <div className="text-[rgba(31, 27, 29, 0.7)] text-semibold">Number :</div>
                  <div className="text-[rgba(31, 27, 29, 0.7)]">{testimonial.number}</div>
                </div>
                <Button variant="ghost" className="hover:bg-green-200">Hire</Button>
              </div>
            </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleExpand}
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          rotate: 3,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div
          className={`${
            index % 2 === 0 ? "rotate-0" : "rotate-0"
          } rounded-3xl bg-linear-to-b from-[#f2f0eb] to-[#fff9eb] h-[450px] md:h-[500px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md`}
        >
          <div className="absolute opacity-30" style={{ inset: "-1px 0 0" }}>
            <div className="absolute inset-0">
              <img
                className="block w-full h-full object-center object-cover"
                src={backgroundImage}
                alt="Background layer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </div>
          </div>
          <ProfileImage src={testimonial.profileImage} alt={testimonial.name} />
          <motion.p className="text-[rgba(31, 27, 29, 0.7)] text-2xl md:text-2xl font-normal text-center text-balance font-tiemposHeadline mt-4 lowercase px-0">
            {testimonial.description.length > 100
              ? `${testimonial.description.slice(0, 100)}...`
              : testimonial.description}
          </motion.p>
          <motion.p className="text-[rgba(31, 27, 29, 0.7)] text-xl md:text-2xl font-thin font-tiemposHeadline italic text-center mt-5 lowercase">
            {testimonial.name}.
          </motion.p>
          <motion.p className="text-[rgba(31, 27, 29, 0.7)] text-xl md:text-2xl font-thin font-tiemposHeadline italic text-center mt-5 lowercase">
             <div className="flex justify-center">
                  {testimonial.rating}/5
              </div>
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

const ProfileImage = ({ src, alt = "", ...rest }: { src: string; alt?: string }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] opacity-80 overflow-hidden rounded-[1000px] border-[3px] border-solid border-[rgba(59,59,59,0.6)] aspect-square flex-none saturate-[0.2] sepia-[0.46] relative">
      <img
        className={`transition duration-300 absolute top-0 inset-0 rounded-inherit object-cover z-50 ${
          isLoading ? "blur-sm" : ""
        }`}
        onLoad={() => setLoading(false)}
        src={src}
        width={150}
        height={150}
        loading="lazy"
        decoding="async"
        alt={alt}
        {...rest}
      />
    </div>
  );
};

export { Carousel, TestimonialCard, ProfileImage };
