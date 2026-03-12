import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const tasks = [
    "Thiết kế và triển khai website sử dụng PHP/WordPress kết hợp React để tối ưu hóa UX.",
    "Xây dựng React Components tái sử dụng, tùy chỉnh Theme/Plugins theo yêu cầu kỹ thuật.",
    "Tối ưu hóa SEO On-page giúp cải thiện thứ hạng trang web trên các công cụ tìm kiếm.",
    "Sử dụng Git quản lý mã nguồn, phối hợp theo mô hình Agile và deploy sản phẩm.",
    "Đảm bảo Responsive Design và kiểm soát tốc độ tải trang.",
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Kinh <span className="text-gradient">nghiệm</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="glass-card rounded-xl p-6 md:p-8 relative">
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                2024 - 2025
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Công ty Ikigai</h3>
                <p className="text-sm text-primary">Web Developer Intern → Web Developer</p>
              </div>
            </div>

            <ul className="space-y-3 mt-6">
              {tasks.map((task, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
