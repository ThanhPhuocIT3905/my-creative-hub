import { motion } from "framer-motion";
import { GraduationCap, Calendar, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Giới <span className="text-gradient">thiệu</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Đại học Đông Á</h3>
                  <p className="text-sm text-muted-foreground">Công nghệ thông tin</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar size={14} /> 2023 - 2027
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sinh viên chuyên ngành CNTT với nền tảng kiến thức về Lập trình hướng đối tượng (OOP), Cấu trúc dữ liệu và Giải thuật. Có kinh nghiệm thực hành phát triển ứng dụng thông qua các dự án Web.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">Mục tiêu nghề nghiệp</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hướng tới vai trò Web/Mobile/Backend Developer. Thích thiết kế giao diện người dùng thân thiện và tối ưu UX, đồng thời xây dựng các hệ thống có khả năng mở rộng và hiệu suất cao.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Tiếng Anh: Đọc tài liệu", "Tiếng Nhật: N5"].map((l) => (
                  <span key={l} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
