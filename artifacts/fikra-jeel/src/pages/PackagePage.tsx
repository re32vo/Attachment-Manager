import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Zap, AlertTriangle, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PackageData {
  name: string;
  totalAmount: number;
  liquidAmount: number;
  firstPayment: number;
  monthlyPayment: number;
  description: string;
  buyLink: string; // TODO: Replace with actual store link
  whatsappNumber: string; // TODO: Replace with actual WhatsApp number
}

// TODO: Update these package details, links, and WhatsApp numbers as needed
const packagesData: Record<string, PackageData> = {
  "750": {
    name: "باقة 750",
    totalAmount: 750,
    liquidAmount: 600,
    firstPayment: 200,
    monthlyPayment: 183,
    description: "باقة مثالية للبداية، تشمل إكسسوارات أساسية عالية الجودة لجوالك.",
    buyLink: "https://example.com/buy/750", // TODO: Replace with actual store link
    whatsappNumber: "966500000000", // TODO: Replace with actual WhatsApp number
  },
  "1050": {
    name: "باقة 1050",
    totalAmount: 1050,
    liquidAmount: 850,
    firstPayment: 280,
    monthlyPayment: 257,
    description: "باقة متوازنة توفر لك مجموعة متكاملة من إكسسوارات الجوال اليومية.",
    buyLink: "https://example.com/buy/1050", // TODO: Replace with actual store link
    whatsappNumber: "966500000000", // TODO: Replace with actual WhatsApp number
  },
  "1500": {
    name: "باقة 1500",
    totalAmount: 1500,
    liquidAmount: 1200,
    firstPayment: 400,
    monthlyPayment: 367,
    description: "باقة متميزة تجمع بين الجودة العالية والتنوع في الإكسسوارات.",
    buyLink: "https://example.com/buy/1500", // TODO: Replace with actual store link
    whatsappNumber: "966500000000", // TODO: Replace with actual WhatsApp number
  },
  "2200": {
    name: "باقة 2200",
    totalAmount: 2200,
    liquidAmount: 1750,
    firstPayment: 580,
    monthlyPayment: 540,
    description: "الباقة الشاملة المميزة للحصول على أفضل إكسسوارات بأعلى جودة.",
    buyLink: "https://example.com/buy/2200", // TODO: Replace with actual store link
    whatsappNumber: "966500000000", // TODO: Replace with actual WhatsApp number
  },
};

// All packages for the installment comparison table
const allPackages = [
  { id: "750",  name: "باقة 750",  firstPayment: 200, monthlyPayment: 183, liquid: 600  },
  { id: "1050", name: "باقة 1050", firstPayment: 280, monthlyPayment: 257, liquid: 850  },
  { id: "1500", name: "باقة 1500", firstPayment: 400, monthlyPayment: 367, liquid: 1200 },
  { id: "2200", name: "باقة 2200", firstPayment: 580, monthlyPayment: 540, liquid: 1750 },
];

const packageGradients: Record<string, string> = {
  "750":  "from-blue-500 to-blue-700",
  "1050": "from-blue-600 to-indigo-700",
  "1500": "from-indigo-500 to-blue-800",
  "2200": "from-blue-700 to-slate-800",
};

export default function PackagePage() {
  const { id } = useParams<{ id: string }>();
  const pkg = packagesData[id ?? ""];

  if (!pkg) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 py-20">
          <h1 className="text-2xl font-black text-gray-900">الباقة غير موجودة</h1>
          <p className="text-gray-500">الباقة التي تبحث عنها غير متوفرة.</p>
          <Link href="/" className="text-blue-600 hover:underline font-bold">
            العودة للرئيسية
          </Link>
        </div>
      </Layout>
    );
  }

  const gradient = packageGradients[id ?? "750"];

  return (
    <Layout>
      <div
        data-testid="package-page"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors"
            data-testid="back-link"
          >
            <ChevronRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-10"
        >
          {pkg.name}
        </motion.h1>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left: Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`bg-gradient-to-br ${gradient} rounded-3xl flex flex-col items-center justify-center p-10 h-72 md:h-80 shadow-lg`}
          >
            <Zap className="w-16 h-16 text-white/80 mb-4 fill-white/30" />
            <h2 className="text-3xl font-black text-white mb-1">{pkg.name}</h2>
            <p className="text-white/70 text-sm font-medium">إكسسوارات تقنية مختارة</p>
          </motion.div>

          {/* Right: Package Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-2">{pkg.name}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{pkg.description}</p>
            </div>

            {/* Summary Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-blue-100">
                <span className="text-gray-600 text-sm font-semibold">إجمالي مبلغ الباقة</span>
                <span className="text-2xl font-black text-blue-600">
                  {pkg.totalAmount.toLocaleString("ar-SA")}{" "}
                  <span className="text-base font-bold text-blue-500">ريال</span>
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-100">
                <span className="text-gray-600 text-sm">مبلغ السيولة</span>
                <span className="text-lg font-bold text-gray-800">
                  {pkg.liquidAmount.toLocaleString("ar-SA")} ريال
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-100">
                <span className="text-gray-600 text-sm">الدفعة الأولى</span>
                <span className="text-lg font-bold text-gray-800">
                  {pkg.firstPayment.toLocaleString("ar-SA")} ريال
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-600 text-sm">القسط الشهري</span>
                <span className="text-lg font-bold text-gray-800">
                  {pkg.monthlyPayment.toLocaleString("ar-SA")} ريال / شهر
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Order Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-gray-50 border-r-4 border-blue-500 rounded-xl p-5 mb-10"
        >
          <h3 className="font-bold text-gray-900 mb-1 text-base">طريقة الطلب</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            اضغط على زر <strong>شراء الباقة الآن</strong> للانتقال إلى المتجر الخارجي لإتمام
            الطلب. بعد الطلب، سيتواصل معك فريقنا لاستكمال الإجراءات وتأكيد التفاصيل.
          </p>
        </motion.div>

        {/* Installment Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-xl font-black text-gray-900 mb-5">
            جدول التقسيط على 4 دفعات شهرية
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-600 hover:bg-blue-600">
                  <TableHead className="text-white font-bold text-right py-4 px-5">
                    الباقات المتوفرة
                  </TableHead>
                  <TableHead className="text-white font-bold text-right py-4 px-5">
                    الدفعة الأولى والقسط الشهري
                  </TableHead>
                  <TableHead className="text-white font-bold text-right py-4 px-5">
                    المبلغ الصافي بعد خصم الرسوم
                  </TableHead>
                  <TableHead className="text-white font-bold text-right py-4 px-5">
                    المبلغ النازل في حساب العميل
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allPackages.map((row) => {
                  const isCurrentPackage = row.id === id;
                  return (
                    <TableRow
                      key={row.id}
                      className={
                        isCurrentPackage
                          ? "bg-blue-50 font-semibold border-blue-200"
                          : "hover:bg-gray-50"
                      }
                    >
                      <TableCell className="py-4 px-5 text-right font-bold text-gray-900">
                        {row.name}
                        {isCurrentPackage && (
                          <span className="mr-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                            الباقة المختارة
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-4 px-5 text-right text-gray-700 text-sm">
                        دفعة أولى {row.firstPayment.toLocaleString("ar-SA")}ر + قسط{" "}
                        {row.monthlyPayment.toLocaleString("ar-SA")}ر/شهر
                      </TableCell>
                      <TableCell className="py-4 px-5 text-right text-gray-700 font-semibold">
                        {row.liquid.toLocaleString("ar-SA")} ريال
                      </TableCell>
                      <TableCell className="py-4 px-5 text-right text-gray-500 text-sm">
                        يُحدد بعد الطلب
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        {/* Warning Notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-3 mb-10"
        >
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <p className="text-amber-800 text-sm font-medium leading-relaxed">
            <strong>تنبيه:</strong> إتمام الطلب يكون عبر المتجر الخارجي. بعد الطلب يتواصل معك
            الفريق لإكمال الإجراءات وتأكيد التفاصيل.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* TODO: Update buyLink in packagesData above */}
          <button
            onClick={() => window.open(pkg.buyLink, "_blank")}
            data-testid="btn-buy-package"
            className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            شراء الباقة الآن
          </button>

          {/* TODO: Update whatsappNumber in packagesData above */}
          <button
            onClick={() => window.open(`https://wa.me/${pkg.whatsappNumber}`, "_blank")}
            data-testid="btn-whatsapp"
            className="flex-1 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            تواصل واتساب
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
