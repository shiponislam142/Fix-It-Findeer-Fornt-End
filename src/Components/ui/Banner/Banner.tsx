"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

import img1 from "../../../assets/banner1.png";
import img2 from "../../../assets/banner2.png";
import img3 from "../../../assets/banner3.png";
import Features from "./Features";

interface Slide {c
  key: number;
  content: JSX.Element;
  onClick: () => void;
}

let DynamicCarousel: any = null;

const Banner = () => {
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<string>("80%");
  const [carouselLoaded, setCarouselLoaded] = useState<boolean>(false);

  // @ts-ignore

  const slides: Slide[] = useMemo(
    () => [
      {
        key: 0,
        content: (
          <Image
            src="https://i.ibb.co/1fnnRnY/sli1.png"
            alt="Slide 1"
            width={350}
            height={100}
          />
        ),
        onClick: () => setGoToSlide(0),
      },
      {
        key: 1,
        content: (
          <Image
            src="https://i.ibb.co/RcWr6rL/sli3.png"
            alt="Slide 2"
            width={350}
            height={100}
          />
        ),
        onClick: () => setGoToSlide(1),
      },
      {
        key: 2,
        content: (
          <Image
            src="https://i.ibb.co/v3L4sf4/sli8.png"
            alt="Slide 3"
            width={350}
            height={100}
          />
        ),
        onClick: () => setGoToSlide(2),
      },
      {
        key: 3,
        content: <Image src={img1} alt="Slide 4" width={350} height={100} />,
        onClick: () => setGoToSlide(3),
      },
      {
        key: 4,
        content: <Image src={img2} alt="Slide 5" width={350} height={100} />,
        onClick: () => setGoToSlide(4),
      },
      {
        key: 5,
        content: <Image src={img3} alt="Slide 6" width={350} height={100} />,
        onClick: () => setGoToSlide(5),
      },
    ],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-spring-3d-carousel")
        .then((module) => {
          DynamicCarousel = module.default;
          setCarouselLoaded(true);
        })
        .catch((error) => {
          console.error("Error loading dynamic module:", error);
        });
    }
  }, []);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      let width = "80%";
      if (windowWidth <= 768) width = "90%";
      if (windowWidth <= 576) width = "100%";
      setCarouselWidth(width);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      const autoplayInterval = setInterval(() => {
        const nextSlideIndex = (goToSlide + 1) % slides.length;
        setGoToSlide(nextSlideIndex);
      }, 3000);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearInterval(autoplayInterval);
      };
    }
  }, [goToSlide, handleResize, slides]);

  return (
    <div className="mb-2 md:mb-12">
      <div className="relative">
        <div
          className="h-[400px] md:h-[500px]"
          style={{
            width: carouselWidth,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {carouselLoaded && DynamicCarousel ? (
            <DynamicCarousel
              slides={slides}
              goToSlide={goToSlide}
              offsetRadius={50}
              showNavigation={false}
              animationConfig={0}
              goToSlideDelay={0}
            />
          ) : (
            <p>Loading Carousel...</p>
          )}
        </div>
        <div className="static md:absolute -bottom-12 z-10">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Banner;
