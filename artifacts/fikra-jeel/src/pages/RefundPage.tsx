import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, RefreshCw } from "lucide-react";
import Layout from "@/components/Layout";

export default function RefundPage() {
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
            <RefreshCw className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            سياسة الاستبدال والاسترجاع
          </h1>
          <div className="w-14 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-gray-500 text-sm">آخر تحديث: مايو 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-right">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              نظرة عامة
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              نسعى في فكره جيل لضمان رضا عملائنا الكامل. إذا واجهت أي مشكلة مع منتجك، فإننا نوفر
              سياسة استبدال واسترجاع واضحة وعادلة لضمان حصولك على أفضل تجربة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              شروط الاسترجاع
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "يمكن طلب الاسترجاع خلال 7 أيام من تاريخ استلام المنتج",
                "يجب أن يكون المنتج في حالته الأصلية غير مستخدم وبعبوته الأصلية",
                "يُشترط الاحتفاظ بفاتورة الشراء أو إيصال الطلب",
                "لا يُقبل الاسترجاع بعد مرور 7 أيام من الاستلام",
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
              شروط الاستبدال
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "الاستبدال متاح خلال 14 يومًا من تاريخ الاستلام",
                "يُقبل الاستبدال في حالة وجود عيب مصنعي أو ضرر أثناء الشحن",
                "يجب إرفاق صور واضحة للعيب أو الضرر عند تقديم طلب الاستبدال",
                "يتم الاستبدال بمنتج مماثل أو منتج بنفس القيمة عند عدم توفر المنتج الأصلي",
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
              الحالات غير المشمولة
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {[
                "الأضرار الناتجة عن سوء الاستخدام أو الإهمال",
                "المنتجات التي تم تعديلها أو إصلاحها من جهة غير معتمدة",
                "الأضرار الناجمة عن حوادث أو ظروف خارجة عن السيطرة",
                "المنتجات المشتراة بسعر مخفض كعروض التصفية",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              خطوات تقديم الطلب
            </h2>
            <div className="space-y-4">
              {[
                { num: "١", title: "التواصل معنا", desc: "تواصل مع فريقنا عبر واتساب أو البريد الإلكتروني مع ذكر رقم الطلب وسبب الطلب" },
                { num: "٢", title: "إرسال الصور", desc: "أرسل صوراً واضحة للمنتج تُثبت وجود العيب أو سبب طلب الاسترجاع" },
                { num: "٣", title: "المراجعة", desc: "يراجع فريقنا طلبك خلال 2-3 أيام عمل ويتواصل معك بالقرار" },
                { num: "٤", title: "الإجراء", desc: "عند الموافقة يتم تنسيق استلام المنتج وإرسال البديل أو رد المبلغ حسب الاتفاق" },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{step.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
              مدة معالجة طلبات الاسترجاع
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              يُعالَج رد المبلغ خلال 5-10 أيام عمل من تاريخ الموافقة على الطلب، وذلك حسب طريقة الدفع
              الأصلية المستخدمة عند الشراء.
            </p>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h2 className="text-base font-bold text-blue-900 mb-2">
              للتواصل بشأن طلبات الاستبدال والاسترجاع
            </h2>
            <p className="text-blue-700 text-sm leading-relaxed">
              يمكنك التواصل معنا مباشرة عبر واتساب أو البريد الإلكتروني الموجودَين في أسفل الصفحة،
              وسيتواصل معك فريقنا خلال وقت قصير.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
