import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'wouter';

const slides = [
  {
    id: 1,
    image: '/assets/hero/HeroSlide01LightMode.png',
    alt: 'DA.co - Light Mode',
    link: null,
  },
  {
    id: 2,
    image: '/assets/hero/HeroSlide02DarkMode.png',
    alt: 'DA.co - Dark Mode',
    link: null,
  },
  {
    id: 3,
    image: '/assets/hero/HeroSlide03DAD.png',
    alt: 'Doug Amorim Design',
    link: '/dad',
  },
  {
    id: 4,
    image: '/assets/hero/HeroSlide04MRD.png',
    alt: 'Mundo Roça Digital',
    link: '/mrd',
  },
  {
    id: 5,
    image: '/assets/hero/HeroSlide05EAD.png',
    alt: "Let's Go Beyond",
    link: '/ead',
  },
  {
    id: 6,
    image: '/assets/hero/HeroSlide06LAB.png',
    alt: 'Laboratório Criativo',
    link: '/lab',
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-screen overflow-hidden bg-gray-100" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => {
            const content = (
              <div className="embla__slide flex-[0_0_100%] min-w-0 group cursor-pointer">
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Overlay escuro no hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </div>
            );

            return slide.link ? (
              <Link key={slide.id} href={slide.link}>
                {content}
              </Link>
            ) : (
              <div key={slide.id}>{content}</div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
