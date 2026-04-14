import { motion } from "framer-motion";
import { Github, Mail, MapPin, Globe, ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-[100px] animate-blob pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-400/5 blur-[80px] animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Portfolio 2026</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Xin chào,
                <br />
                tôi là{" "}
                <span className="text-gradient-bold">Phước</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Web Developer — Sinh viên năm 3 CNTT tại Đại học Đông Á. Đam mê xây dựng ứng dụng web hiện đại với ReactJS & Spring Boot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2"><MapPin size={15} className="text-primary" /> Huế, Việt Nam</span>
              <span className="flex items-center gap-2"><Mail size={15} className="text-primary" /> thanhphuochaya@gmail.com</span>
              <span className="flex items-center gap-2"><Globe size={15} className="text-primary" /> thanhphuochaya.site</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Dự án của tôi
              </a>
              <a
                href="https://github.com/ThanhPhuocIT3905"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover px-8 py-3.5 rounded-xl flex items-center gap-2 text-sm font-semibold"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="/cv/CV_Nguyen_Thanh_Phuoc.pdf"
                download
                className="glass-card-hover px-8 py-3.5 rounded-xl flex items-center gap-2 text-sm font-semibold"
              >
                <Download size={18} /> Tải CV
              </a>
            </motion.div>
          </div>

          {/* Right - Avatar + decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-12 rounded-full border border-primary/5 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Avatar */}
              <div className="w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://avatars.githubusercontent.com/u/226345591?v=4"
                  alt="Nguyễn Thanh Phước"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-2 shadow-lg animate-float">
                <span className="text-xs font-mono text-primary">🚀 Open to work</span>
              </div>
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 shadow-lg animate-float" style={{ animationDelay: "3s" }}>
                <span className="text-xs font-mono text-primary">⚡ Web Developer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-mono">Scroll</span>
          <ArrowDown size={16} className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
