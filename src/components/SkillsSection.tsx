import { motion } from "framer-motion";

const categories = [
  {
    title: "Ngôn ngữ lập trình",
    items: ["Java", "Python", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "ReactJS", "TailwindCSS", "Flutter"],
  },
  {
    title: "Backend",
    items: ["Java Spring Boot", "Node.js (Express)", "RESTful API", "JWT"],
  },
  {
    title: "Cơ sở dữ liệu",
    items: ["Microsoft SQL Server", "MongoDB"],
  },
  {
    title: "Công cụ",
    items: ["Git/GitHub", "Postman", "Docker"],
  },
  {
    title: "Kỹ năng mềm",
    items: ["Giao tiếp", "Làm việc nhóm", "Quản lý thời gian"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Kỹ <span className="text-gradient">năng</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-xl p-5 space-y-3"
              >
                <h3 className="font-semibold text-sm text-primary">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-md bg-secondary text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
