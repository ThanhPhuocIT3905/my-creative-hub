import { motion } from "framer-motion";
import { GraduationCap, Target, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 — Giới thiệu</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
            Về <span className="text-gradient-bold">bản thân</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bold-card rounded-2xl p-7 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <GraduationCap size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Đại học Đông Á</h3>
                <p className="text-sm text-primary font-medium">Công nghệ thông tin</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">2023 — 2027</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sinh viên chuyên ngành CNTT với nền tảng vững chắc về OOP, Cấu trúc dữ liệu & Giải thuật. Có kinh nghiệm thực hành phát triển ứng dụng web qua các dự án thực tế.
              </p>
            </motion.div>

            {/* Career goal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bold-card rounded-2xl p-7 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Target size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-lg">Mục tiêu nghề nghiệp</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hướng tới vai trò Web/Mobile/Backend Developer. Đam mê thiết kế UI/UX thân thiện, xây dựng hệ thống có khả năng mở rộng và hiệu suất cao.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bold-card rounded-2xl p-7 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Languages size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-lg">Ngôn ngữ</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Tiếng Anh</span>
                    <span className="text-primary font-mono text-xs">Đọc tài liệu</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-primary rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Tiếng Nhật</span>
                    <span className="text-primary font-mono text-xs">N5</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
