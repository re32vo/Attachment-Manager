import { Zap, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      data-testid="footer"
      className="bg-[#0F172A] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Logo Row */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center gap-2">
            <Zap className="w-7 h-7 fill-blue-400 text-blue-400" />
            <span className="text-2xl font-extrabold text-white">فكره جيل</span>
          </div>
          <p className="text-blue-300 text-sm font-medium">متجرك لأفضل إكسسوارات الجوال</p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: روابط الموقع */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 border-b border-white/10 pb-3">
              روابط الموقع
            </h3>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#top" },
                { label: "عن فكرة جيل", href: "#about" },
                { label: "طريقة العمل", href: "#how-it-works" },
                { label: "المنتجات", href: "#products" },
                { label: "المميزات", href: "#features" },
                { label: "الأسئلة الشائعة", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    onClick={(e) => {
                      if (link.href === "#top") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: السياسات */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 border-b border-white/10 pb-3">
              السياسات
            </h3>
            <ul className="space-y-3">
              {/* TODO: Update these links with actual policy pages */}
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  سياسة الاستبدال والاسترجاع
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: تواصل معنا */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 border-b border-white/10 pb-3">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              {/* TODO: Update WhatsApp number */}
              <li>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>واتساب</span>
                </a>
              </li>
              {/* TODO: Update email */}
              <li>
                <a
                  href="mailto:info@fikrajeel.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>info@fikrajeel.com</span>
                </a>
              </li>
              {/* TODO: Update Instagram */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-400 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>@fikrajeel</span>
                </a>
              </li>
              {/* TODO: Update website URL */}
              <li>
                <a
                  href="https://www.fikrajeel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>www.fikrajeel.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            جميع الحقوق محفوظة &copy; 2025 فكره جيل
          </p>
        </div>
      </div>
    </footer>
  );
}
