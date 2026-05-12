import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "شواحن سريعة وذكية",
    subtitle: "اشحن جوالك بأسرع الشواحن وأكثرها أماناً وكفاءة",
    btnText: "تسوق الآن",
    gradient: "from-blue-600 via-blue-700 to-blue-900",
    btnTarget: "#products",
  },
  {
    id: 2,
    title: "سماعات عالية الجودة",
    subtitle: "استمتع بصوت نقي وتجربة سمع لا مثيل لها مع أفضل السماعات",
    btnText: "اكتشف المزيد",
    gradient: "from-slate-700 via-slate-800 to-blue-900",
    btnTarget: "#products",
  },
  {
    id: 3,
    title: "كفرات وإكسسوارات",
    subtitle: "حماية أنيقة وإكسسوارات متنوعة تناسب جميع موديلات الجوالات",
    btnText: "عرض المنتجات",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    btnTarget: "#products",
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
    const timer = setInterval(() => paginate(1), 4000);
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
      className="relative w-full overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[420px]"
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-l ${slide.gradient}`}
        >
          <div className="text-center text-white px-6 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/85 mb-6 font-medium"
            >
              {slide.subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              onClick={() => handleBtnClick(slide.btnTarget)}
              className="bg-white text-blue-700 font-bold px-7 py-2.5 rounded-full text-sm sm:text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              data-testid={`slider-btn-${slide.id}`}
            >
              {slide.btnText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow buttons */}
      <button
        onClick={() => handlePaginate(-1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all"
        aria-label="السابق"
        data-testid="slider-prev"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all"
        aria-label="التالي"
        data-testid="slider-next"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === slideIndex
                ? "bg-white w-6 h-2.5"
                : "bg-white/50 w-2.5 h-2.5 hover:bg-white/75"
            }`}
            data-testid={`slider-dot-${i}`}
            aria-label={`الشريحة ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
