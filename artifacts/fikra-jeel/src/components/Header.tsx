import { useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#top" },
  { label: "عن فكرة جيل", href: "#about" },
  { label: "طريقة العمل", href: "#how-it-works" },
  { label: "المنتجات", href: "#products" },
  { label: "المميزات", href: "#features" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#footer" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setSidebarOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        data-testid="header"
        className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Right side (RTL) */}
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Zap className="w-6 h-6 fill-blue-600 text-blue-600" />
              <span className="text-xl font-extrabold text-blue-600 tracking-tight">فكره جيل</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Hamburger - Left side in RTL (visually left) */}
            <button
              data-testid="hamburger-btn"
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="فتح القائمة"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar drawer from RIGHT */}
            <motion.aside
              key="sidebar"
              data-testid="sidebar-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[58%] max-w-xs bg-white z-50 shadow-2xl flex flex-col"
              style={{ direction: "rtl" }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 fill-blue-600 text-blue-600" />
                  <span className="text-lg font-extrabold text-blue-600">فكره جيل</span>
                </div>
                <button
                  data-testid="close-sidebar-btn"
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-right px-4 py-3 rounded-xl text-gray-700 font-semibold text-base hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Sidebar Footer */}
              <div className="px-5 py-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center">© 2025 فكره جيل</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
