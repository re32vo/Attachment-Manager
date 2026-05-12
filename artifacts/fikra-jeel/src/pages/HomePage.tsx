import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Package, ShoppingCart, Headphones, Shield, Zap, Info } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Package data ───────────────────────────────────────────────────────────
// TODO: Update price, description, and image for each package below
const packages = [
  {
    id: "750",
    name: "باقة 750",
    price: "750",
    desc: "إكسسوارات أساسية بسعر مناسب",
    // TODO: Replace with your actual product image for باقة 750
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80&fit=crop",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "1050",
    name: "باقة 1050",
    price: "1050",
    desc: "باقة متوازنة للاستخدام اليومي",
    // TODO: Replace with your actual product image for باقة 1050
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: "1500",
    name: "باقة 1500",
    price: "1500",
    desc: "منتجات متميزة لتجربة أفضل",
    // TODO: Replace with your actual product image for باقة 1500
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80&fit=crop",
    gradient: "from-indigo-500 to-blue-800",
  },
  {
    id: "2200",
    name: "باقة 2200",
    price: "2200",
    desc: "الباقة الشاملة للجودة العالية",
    // TODO: Replace with your actual product image for باقة 2200
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&q=80&fit=crop",
    gradient: "from-blue-700 to-slate-800",
  },
];

const aboutCards = [
  {
    icon: Package,
    title: "منتجات تقنية مختارة",
    desc: "نختار لك أفضل المنتجات التقنية بجودة عالية ومعايير صارمة",
  },
  {
    icon: ShoppingCart,
    title: "تجربة طلب سهلة",
    desc: "عملية طلب بسيطة وواضحة تأخذك خطوة بخطوة بدون تعقيد",
  },
  {
    icon: Headphones,
    title: "خدمة عملاء ومتابعة",
    desc: "فريقنا متاح للمتابعة معك وخدمتك بعد كل طلب",
  },
];

const steps = [
  {
    num: "١",
    title: "اختر منتجك المناسب",
    desc: "تصفح باقاتنا واختر ما يناسب احتياجاتك وميزانيتك",
  },
  {
    num: "٢",
    title: "اضغط شراء الآن",
    desc: "اضغط على زر شراء الباقة في صفحة المنتج المفضل لديك",
  },
  {
    num: "٣",
    title: "أكمل الطلب في المتجر",
    desc: "ستنتقل إلى المتجر الرسمي الخارجي لإتمام الطلب بأمان",
  },
  {
    num: "٤",
    title: "الفريق يتواصل معك",
    desc: "بعد الطلب يتواصل فريقنا لاستكمال الإجراءات وتأكيد التفاصيل",
  },
];

const features = [
  {
    icon: Shield,
    title: "منتجات مختارة بعناية",
    desc: "نختار لك أفضل المنتجات بمعايير صارمة للجودة والموثوقية",
  },
  {
    icon: Zap,
    title: "طلب سهل وسريع",
    desc: "عملية طلب مبسطة في 4 خطوات واضحة بدون تعقيد",
  },
  {
    icon: Headphones,
    title: "متابعة وخدمة عملاء",
    desc: "فريقنا يتابع معك من لحظة الطلب حتى وصول منتجك",
  },
];

const faqs = [
  {
    q: "كيف أطلب من فكره جيل؟",
    a: "اختر الباقة المناسبة من قسم المنتجات، ثم اضغط على زر عرض التفاصيل للاطلاع على محتوى الباقة وتفاصيل التقسيط، وبعدها اضغط شراء الباقة الآن للانتقال إلى المتجر الخارجي لإتمام الطلب.",
  },
  {
    q: "هل يتم التواصل معي بعد الطلب؟",
    a: "نعم، بعد إتمام طلبك في المتجر الخارجي، يتواصل معك فريق فكره جيل لاستكمال الإجراءات والتأكد من جميع التفاصيل.",
  },
  {
    q: "هل يوجد خيارات دفع مرنة؟",
    a: "نعم، نوفر خيارات دفع بالتقسيط على دفعات شهرية مريحة، يمكنك الاطلاع على تفاصيل التقسيط في صفحة كل باقة.",
  },
  {
    q: "هل أحتاج دفعة أولى؟",
    a: "نعم، كل باقة تتضمن دفعة أولى محددة، يمكنك الاطلاع على التفاصيل الكاملة في صفحة الباقة المختارة.",
  },
  {
    q: "كيف أعرف حالة طلبي؟",
    a: "بعد إتمام الطلب، يتواصل معك فريقنا مباشرة عبر واتساب أو البريد الإلكتروني لتزويدك بتحديثات حالة طلبك.",
  },
  {
    q: "هل المنتجات مضمونة؟",
    a: "نعم، جميع منتجاتنا مختارة بعناية ومضمونة الجودة، وفريق خدمة العملاء جاهز للمساعدة في أي استفسار.",
  },
];

// ─── Shared animation preset ────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

// ─── Section heading helper ──────────────────────────────────────────────────
function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">{title}</h2>
      <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  const [, setLocation] = useLocation();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div data-testid="home-page" id="top">
      {/* ── Hero Slider ─────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── عن فكره جيل ──────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-24 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <motion.div {...fadeUp}>
            <SectionHeading
              title="عن فكره جيل"
              subtitle="فكره جيل متجر متخصص في إكسسوارات الجوال والإلكترونيات، نقدم لك منتجات مختارة بعناية بأسعار تنافسية وخدمة عملاء متميزة. هدفنا أن نوفر لك تجربة تسوق سهلة وموثوقة."
            />
          </motion.div>

          {/* About image */}
          <motion.div
            {...fadeUp}
            className="mb-14 rounded-3xl overflow-hidden shadow-lg mx-auto max-w-3xl"
          >
            {/* TODO: Replace this URL with your actual "about" section image */}
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85&fit=crop"
              alt="عن فكره جيل"
              className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {aboutCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(37,99,235,0.13)" }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm cursor-default transition-all"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-center">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── طريقة العمل ──────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 md:py-24 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <motion.div {...fadeUp}>
            <SectionHeading
              title="طريقة عمل فكره جيل"
              subtitle="4 خطوات بسيطة للحصول على منتجك"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 transition-all"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-xl font-black">{step.num}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="bg-blue-50 border-r-4 border-blue-500 rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto"
          >
            <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <p className="text-blue-800 text-sm font-medium leading-relaxed">
              ملاحظة: الشراء الفعلي يتم داخل المتجر الرسمي الخارجي. هذا الموقع تعريفي يشرح طريقة
              العمل فقط.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Promotional Banner ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* TODO: Replace this URL with your actual promotional banner image */}
        <img
          src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1600&q=85&fit=crop"
          alt="بانر ترويجي"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/90 via-blue-800/85 to-blue-700/80" />
        <div className="relative z-10 w-[90%] max-w-[900px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-snug">
              جودة لا تُقارن وطلب لا يُعقّد
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              منتجات تقنية مختارة بعناية، وعملية طلب سهلة في 4 خطوات فقط
            </p>
            <button
              onClick={() => scrollTo("#products")}
              className="bg-white text-blue-700 font-bold px-10 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 text-base"
              data-testid="banner-explore-btn"
            >
              تصفح المنتجات
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── المنتجات ─────────────────────────────────────────────── */}
      <section id="products" className="py-20 md:py-24 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <motion.div {...fadeUp}>
            <SectionHeading title="باقاتنا المتاحة" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                data-testid={`product-card-${pkg.id}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 28px 56px rgba(37,99,235,0.16)" }}
                onClick={() => setLocation(`/package/${pkg.id}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer transition-all group"
              >
                {/* Product image */}
                <div className="relative overflow-hidden h-44">
                  {/* TODO: Replace the image URL in the packages array above for each باقة */}
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg text-center">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 text-center">
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{pkg.desc}</p>
                  <p className="text-2xl font-black text-blue-600 mb-5">
                    {pkg.price}{" "}
                    <span className="text-base font-bold text-blue-500">ريال</span>
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/package/${pkg.id}`);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
                    data-testid={`btn-details-${pkg.id}`}
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── المميزات ─────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-24 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <motion.div {...fadeUp}>
            <SectionHeading title="مميزات فكره جيل" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 transition-all"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{feat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-center">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── الأسئلة الشائعة ──────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-24 bg-white">
        <div className="w-[90%] max-w-[760px] mx-auto">
          <motion.div {...fadeUp}>
            <SectionHeading title="الأسئلة الشائعة" />
          </motion.div>

          <motion.div {...fadeUp}>
            <Accordion
              type="single"
              collapsible
              className="space-y-3"
              data-testid="faq-accordion"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-base font-bold text-gray-900 py-5 hover:text-blue-600 hover:no-underline text-right [&>svg]:rotate-180 [&[data-state=open]>svg]:rotate-0">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5 text-right">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
