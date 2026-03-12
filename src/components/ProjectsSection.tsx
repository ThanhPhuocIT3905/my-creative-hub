import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, ShoppingCart, School, Flower2 } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Robot di động gắp vật thể",
    period: "Robotech 2024",
    description:
      "Thiết kế cấu trúc cơ khí và lập trình thuật toán điều khiển giúp robot di chuyển, định vị và thao tác vật thể chính xác.",
    tech: ["Arduino", "C++", "Cơ khí"],
    source: null,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    period: "07/2025 - 08/2025",
    description:
      "Ứng dụng thương mại điện tử với giao diện người dùng đơn giản, dễ nhìn và trực quan, tối ưu trải nghiệm người dùng.",
    tech: ["ReactJS", "Spring Boot", "SQL Server"],
    source: "https://github.com/IsaacSmith20/05/ecomerce-project",
  },
  {
    icon: School,
    title: "School Management System",
    period: "2025 - 2026",
    description:
      "Hệ thống quản lý trường học với vai trò Admin, Giáo viên và Học sinh. Frontend deploy trên Vercel, Backend trên Render.",
    tech: ["ReactJS", "Node.js", "MongoDB"],
    source: "https://github.com/ViuGiaLai/ai-ecommerce-platform",
  },
  {
    icon: Flower2,
    title: "Flower Recognition System",
    period: "2025 - 2026",
    description:
      "Hệ thống nhận diện và phân loại hoa sử dụng thuật toán SVM kết hợp với các kỹ thuật trích xuất đặc trưng hình ảnh tiên tiến.",
    tech: ["ReactJS", "Python", "OpenCV", "Scikit-learn"],
    source: "https://github.com/IsaacSmith2005/Flowers-Recognition",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Dự <span className="text-gradient">án</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-strong)] flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="text-primary" size={20} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline w-fit"
                  >
                    <Github size={16} /> Source Code <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
