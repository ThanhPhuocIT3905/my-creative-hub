import { motion } from "framer-motion";
import { FlaskConical, CheckCircle2, ExternalLink, FileText } from "lucide-react";

const ResearchSection = () => {
  const technologies = [
    "EfficientNetB0", "CNN", "Transfer Learning",
    "Grad-CAM", "Deep Learning", "AI Explainability", "Python", "TensorFlow",
  ];

  const achievements = [
    "Đạt độ chính xác phân loại 96.45% với kiến trúc EfficientNetB0",
    "Triển khai Grad-CAM để trực quan hóa minh bạch quyết định của AI",
    "Triển khai giao diện web tương tác với suy luận thời gian thực",
    "Cải thiện 42% hiệu suất so với phương pháp SVM truyền thống",
  ];

  return (
    <section id="research" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">06 — Nghiên cứu</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
            Nghiên cứu <span className="text-gradient-bold">khoa học</span>
          </h2>

          <div className="bold-card rounded-2xl p-8 md:p-10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left - main info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0">
                    <FlaskConical size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl leading-snug">
                      Flower Classification Using EfficientNetB0 with Grad-CAM Explainability
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 font-mono">
                      02/2026 — 04/2026
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-primary mb-2">Tác giả:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong className="text-foreground">Rmah Viu</strong> — Khoa CNTT, ĐH Đông Á</li>
                    <li>• <strong className="text-foreground">Nguyễn Thanh Phước</strong> — Khoa CNTT, ĐH Đông Á</li>
                    <li>• <strong className="text-foreground">Phan Thanh Huy</strong> — Khoa CNTT, ĐH Đông Á</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-primary mb-2">Tóm tắt:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hệ thống nhận diện hoa tiên tiến sử dụng EfficientNetB0 kết hợp Transfer Learning và Grad-CAM. Thực nghiệm trên 4.317 ảnh thuộc 5 loài hoa cho thấy độ chính xác 96.45%, vượt xa SVM truyền thống (53.67%).
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - achievements + links */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-primary mb-4">Thành tựu:</h4>
                  <ul className="space-y-3">
                    {achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href="https://huggingface.co/spaces/viugialai/Flower-Recognition-Using-Deep-Learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity text-center shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href="https://v0-portfolio-viu.vercel.app/ICT2026-Flower-Classification-Research.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card-hover px-5 py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <FileText size={16} /> Xem tài liệu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
