import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, ShoppingCart, School, Flower2, ImageIcon } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Robot di động gắp vật thể",
    period: "Robotech 2024",
    description:
      "Thiết kế cấu trúc cơ khí và lập trình thuật toán điều khiển giúp robot di chuyển, định vị và thao tác vật thể chính xác.",
    tech: ["Arduino", "C++", "Cơ khí"],
    source: null,
    featured: false,
    image: "/activities/robot-demo.jpg", // Đặt đường dẫn ảnh demo cho dự án 1
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    period: "07/2025 — 08/2025",
    description:
      "Ứng dụng thương mại điện tử với giao diện người dùng đơn giản, dễ nhìn và trực quan, tối ưu trải nghiệm người dùng.",
    tech: ["ReactJS", "Spring Boot", "SQL Server"],
    source: "https://github.com/IsaacSmith20/05/ecomerce-project",
    featured: true,
    image: "/activities/ecommerce-demo.png", // Đặt đường dẫn ảnh demo cho dự án 2
  },
  {
    icon: School,
    title: "School Management System",
    period: "2025 — 2026",
    description:
      "Hệ thống quản lý trường học với vai trò Admin, Giáo viên và Học sinh. Frontend deploy trên Vercel, Backend trên Render.",
    tech: ["ReactJS", "Node.js", "MongoDB"],
    source: "https://github.com/ViuGiaLai/ai-ecommerce-platform",
    featured: true,
    image: "/activities/school-demo.png", // Đặt đường dẫn ảnh demo cho dự án 3
  },
  {
    icon: Flower2,
    title: "Flower Recognition System",
    period: "2025 — 2026",
    description:
      "Hệ thống nhận diện và phân loại hoa sử dụng thuật toán SVM kết hợp với các kỹ thuật trích xuất đặc trưng hình ảnh tiên tiến.",
    tech: ["ReactJS", "Python", "OpenCV", "Scikit-learn"],
    source: "https://github.com/ViuGiaLai/efficientNetB0_and_grad-cam",
    featured: true,
    image: "/activities/flowers-demo.png", // Đặt đường dẫn ảnh demo cho dự án 4
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 — Dự án</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
            Dự án <span className="text-gradient-bold">nổi bật</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bold-card rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Project image */}
                <div className="aspect-video img-placeholder relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="text-center space-y-2 relative z-10">
                      <ImageIcon size={36} className="mx-auto opacity-40" />
                      <p className="text-xs opacity-60">Ảnh demo dự án</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <project.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline w-fit font-medium"
                    >
                      <Github size={16} /> Source Code <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
