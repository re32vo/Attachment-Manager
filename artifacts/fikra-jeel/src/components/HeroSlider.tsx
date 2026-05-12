import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

// TODO: Replace each `image` URL below with your actual banner image
const slides = [
  {
    id: 1,
    title: "شواحن سريعة وذكية",
    subtitle: "اشحن جوالك بأسرع الشواحن وأكثرها أماناً وكفاءة",
    btnText: "تسوق الآن",
    gradient: "from-blue-900/80 via-blue-800/70 to-blue-600/60",
    btnTarget: "#products",
    // TODO: Replace this URL with your actual banner image for "الشواحن"
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1400&q=85&fit=crop",
  },
  {
    id: 2,
    title: "سماعات عالية الجودة",
    subtitle: "استمتع بصوت نقي وتجربة سمع لا مثيل لها مع أفضل السماعات",
    btnText: "اكتشف المزيد",
    gradient: "from-slate-900/85 via-slate-800/75 to-blue-900/60",
    btnTarget: "#products",
    // TODO: Replace this URL with your actual banner image for "السماعات"
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1400&q=85&fit=crop",
  },
  {
    id: 3,
    title: "كفرات وإكسسوارات",
    subtitle: "حماية أنيقة وإكسسوارات متنوعة تناسب جميع موديلات الجوالات",
    btnText: "عرض المنتجات",
    gradient: "from-blue-900/80 via-blue-700/70 to-cyan-700/60",
    btnTarget: "#products",
    // TODO: Replace this URL with your actual banner image for "الكفرات والإكسسوارات"
    image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?w=1400&q=85&fit=crop",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = useCallback((dir: number) => {
    setPage(([p]) => [p + dir, dir]);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => paginate(1), 4500);
    return () => clearInterval(timer);
  }, [autoPlay, paginate]);

  const goToSlide = (idx: number) => {
    const dir = idx > slideIndex ? 1 : -1;
    setPage([idx, dir]);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const handlePaginate = (dir: number) => {
    paginate(dir);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const handleBtnClick = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[slideIndex];

  return (
    <div
      data-testid="hero-slider"
      className="relative w-full overflow-hidden h-64 sm:h-80 md:h-[440px] lg:h-[520px]"
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-l ${slide.gradient}`} />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight drop-shadow-lg"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="text-sm sm:text-base md:text-lg text-white/90 mb-7 font-medium drop-shadow"
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
                onClick={() => handleBtnClick(slide.btnTarget)}
                className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full text-sm sm:text-base hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
                data-testid={`slider-btn-${slide.id}`}
              >
                {slide.btnText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow buttons */}
      <button
        onClick={() => handlePaginate(-1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/25 hover:bg-black/40 backdrop-blur-sm text-white rounded-full p-2.5 transition-all"
        aria-label="السابق"
        data-testid="slider-prev"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/25 hover:bg-black/40 backdrop-blur-sm text-white rounded-full p-2.5 transition-all"
        aria-label="التالي"
        data-testid="slider-next"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === slideIndex
                ? "bg-white w-7 h-2.5"
                : "bg-white/50 w-2.5 h-2.5 hover:bg-white/80"
            }`}
            data-testid={`slider-dot-${i}`}
            aria-label={`الشريحة ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
