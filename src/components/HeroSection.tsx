import { motion } from "framer-motion";
import { Github, Mail, MapPin, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 rounded-full glow-border overflow-hidden bg-secondary flex items-center justify-center"
          >
            <img
              src="https://avatars.githubusercontent.com/u/226345591?v=4"
              alt="Nguyễn Thanh Phước"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm tracking-widest uppercase"
          >
            Web Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Nguyễn Thanh{" "}
            <span className="text-gradient">Phước</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed"
          >
            Sinh viên năm 3 CNTT tại Đại học Đông Á. Đam mê phát triển web với ReactJS, Spring Boot và xây dựng những ứng dụng mang lại giá trị thực tiễn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Huế, Việt Nam</span>
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-primary" /> thanhphuochaya@gmail.com</span>
            <span className="flex items-center gap-1.5"><Globe size={14} className="text-primary" /> thanhphuochaya.site</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 mt-4"
          >
            <a
              href="https://github.com/ThanhPhuocIT3905"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium hover:border-primary/50 transition-all hover:shadow-[var(--glow-strong)]"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="mailto:thanhphuochaya@gmail.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Liên hệ ngay
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
