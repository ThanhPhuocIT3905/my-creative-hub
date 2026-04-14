import { motion } from "framer-motion";
import { Briefcase, Building2, ImageIcon } from "lucide-react";

const ExperienceSection = () => {
  const tasks = [
    "Thiết kế và triển khai website sử dụng PHP/WordPress kết hợp React để tối ưu hóa UX.",
    "Xây dựng React Components tái sử dụng, tùy chỉnh Theme/Plugins theo yêu cầu kỹ thuật.",
    "Tối ưu hóa SEO On-page giúp cải thiện thứ hạng trang web trên các công cụ tìm kiếm.",
    "Sử dụng Git quản lý mã nguồn, phối hợp theo mô hình Agile và deploy sản phẩm.",
    "Đảm bảo Responsive Design và kiểm soát tốc độ tải trang.",
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 — Kinh nghiệm</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
            Nơi tôi đã <span className="text-gradient-bold">làm việc</span>
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company images placeholder */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bold-card rounded-2xl overflow-hidden aspect-[4/3] img-placeholder"
              >
                <div className="text-center space-y-2">
                  <Building2 size={40} className="mx-auto opacity-40" />
                  <p className="text-xs opacity-60">Ảnh công ty Ikigai</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bold-card rounded-2xl overflow-hidden aspect-video img-placeholder"
              >
                <div className="text-center space-y-2">
                  <ImageIcon size={32} className="mx-auto opacity-40" />
                  <p className="text-xs opacity-60">Ảnh môi trường làm việc</p>
                </div>
              </motion.div>
            </div>

            {/* Experience detail */}
            <div className="lg:col-span-3">
              <div className="bold-card rounded-2xl p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Công ty Ikigai</h3>
                      <p className="text-sm text-primary font-medium">Web Developer Intern → Web Developer</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-4 py-2 rounded-full hidden sm:block">
                    2024 — 2025
                  </span>
                </div>

                <ul className="space-y-4">
                  {tasks.map((task, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                      {task}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                  {["PHP", "WordPress", "React", "Git", "SEO", "Agile"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
