import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, FileText } from "lucide-react";
import Layout from "@/components/Layout";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <div className="w-[90%] max-w-[860px] mx-auto py-10 md:py-16">
        {/* Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">الشروط والأحكام</h1>
          <div className="w-14 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-gray-500 text-sm">آخر تحديث: مايو 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-right">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              القبول بالشروط
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              باستخدامك لموقع فكره جيل أو التعامل معنا لطلب أي من باقاتنا، فإنك توافق على الالتزام
              بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يُرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              طبيعة الخدمة
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              فكره جيل موقع تعريفي يوجّه العملاء لطلب باقات إكسسوارات الجوال عبر متجر خارجي. الموقع
              لا يجري عمليات بيع مباشرة، وعملية الشراء الفعلية تتم داخل المتجر الرسمي الخارجي.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              الأهلية للتعامل
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "يجب أن يكون عمرك 18 عامًا أو أكثر لإتمام أي طلب",
                "يجب أن تكون المعلومات المقدمة صحيحة ودقيقة",
                "أنت مسؤول عن الحفاظ على سرية بيانات حسابك إن وجدت",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              الباقات والأسعار
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "الأسعار المعروضة قابلة للتغيير دون إشعار مسبق",
                "تفاصيل كل باقة موضحة في صفحتها الخاصة",
                "شروط التقسيط محددة حسب كل باقة وتُطبق عند إتمام الطلب",
                "يحق لفكره جيل تعديل محتوى الباقات في أي وقت",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              الملكية الفكرية
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              جميع محتويات الموقع من نصوص وصور وشعارات وتصاميم هي ملك لفكره جيل ومحمية بموجب قوانين
              الملكية الفكرية. لا يجوز نسخها أو إعادة نشرها دون إذن خطي مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              إخلاء المسؤولية
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              فكره جيل غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو
              المنتجات المطلوبة عبره. المسؤولية الكاملة عن عمليات الشراء تقع على المتجر الخارجي
              الذي تتم فيه عملية الشراء.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              التعديلات على الشروط
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              يحق لفكره جيل تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات على هذه الصفحة مع تحديث
              تاريخ آخر مراجعة. استمرارك في استخدام الموقع بعد التعديلات يُعد موافقة ضمنية عليها.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              القانون المطبق
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              تخضع هذه الشروط لأحكام نظام التجارة الإلكترونية في المملكة العربية السعودية، وتُفسَّر
              وفقًا لقوانينه.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
