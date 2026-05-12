import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Shield } from "lucide-react";
import Layout from "@/components/Layout";

export default function PrivacyPage() {
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
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">سياسة الخصوصية</h1>
          <div className="w-14 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-gray-500 text-sm">آخر تحديث: مايو 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-right">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              مقدمة
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              نحن في فكره جيل نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع
              معلوماتك واستخدامها وحمايتها عند استخدامك لموقعنا أو التعامل معنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              المعلومات التي نجمعها
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3">
              قد نجمع الأنواع التالية من المعلومات:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "الاسم ورقم الجوال عند التواصل معنا",
                "معلومات الطلب مثل الباقة المختارة وتفاصيل التقسيط",
                "بيانات الجهاز والمتصفح عند تصفح الموقع",
                "أي معلومات تقدمها طوعاً عبر نماذج الاتصال",
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
              كيف نستخدم معلوماتك
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "معالجة طلباتك ومتابعتها",
                "التواصل معك لتأكيد الطلب أو الرد على استفساراتك",
                "تحسين خدماتنا وتجربة المستخدم على الموقع",
                "إرسال تحديثات وعروض إذا وافقت على ذلك",
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
              حماية المعلومات
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو الإفصاح أو التعديل
              أو الحذف. لا نبيع بياناتك أو نشاركها مع أطراف ثالثة لأغراض تجارية.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك ضبط إعدادات متصفحك
              لرفض هذه الملفات، مع العلم أن ذلك قد يؤثر على بعض وظائف الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              حقوقك
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3">
              يحق لك في أي وقت:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "طلب الاطلاع على بياناتك الشخصية المحفوظة لدينا",
                "طلب تصحيح أي معلومات غير دقيقة",
                "طلب حذف بياناتك",
                "إلغاء الاشتراك في أي اتصالات تسويقية",
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
              تواصل معنا
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              لأي استفسار يتعلق بسياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني أو واتساب
              المتوفرَين في أسفل الصفحة.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
