import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Dự án", href: "#projects" },
  { label: "CV", href: "#cv" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    return saved ? saved === "dark" : true; // default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-gradient">TP.</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {dark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/50"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
