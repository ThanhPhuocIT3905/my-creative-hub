import { motion } from "framer-motion";
import { FlaskConical, CheckCircle2, ExternalLink, FileText } from "lucide-react";

const ResearchSection = () => {
  const technologies = [
    "EfficientNetB0", "Convolutional Neural Networks", "Transfer Learning",
    "Grad-CAM", "Deep Learning", "AI Explainability", "Python", "TensorFlow",
  ];

  const achievements = [
    "Đạt độ chính xác phân loại 96.45% với kiến trúc EfficientNetB0",
    "Triển khai Grad-CAM để trực quan hóa minh bạch quyết định của AI",
    "Triển khai giao diện web tương tác với suy luận thời gian thực",
    "Cải thiện 42% hiệu suất so với phương pháp SVM truyền thống",
  ];

  return (
    <section id="research" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Nghiên <span className="text-gradient">cứu</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-strong)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FlaskConical className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl leading-snug">
                  Flower Classification Using EfficientNetB0 with Grad-CAM Explainability
                </h3>
                <p className="text-sm text-muted-foreground mt-1 font-mono">
                  Thời gian nghiên cứu: Tháng 2 - Tháng 4, 2026
                </p>
              </div>
            </div>

            {/* Authors */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2">Tác giả:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong className="text-foreground">Rmah Viu</strong> — Khoa CNTT, Đại học Đông Á</li>
                <li>• <strong className="text-foreground">Nguyễn Thanh Phước</strong> — Khoa CNTT, Đại học Đông Á</li>
                <li>• <strong className="text-foreground">Phan Thanh Huy</strong> — Khoa CNTT, Đại học Đông Á</li>
              </ul>
            </div>

            {/* Abstract */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2">Tóm tắt:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nghiên cứu này đề xuất hệ thống nhận diện hoa tiên tiến sử dụng kiến trúc mạng neural tích chập EfficientNetB0 kết hợp kỹ thuật Transfer Learning. Để giải quyết vấn đề "hộp đen" trong deep learning, phương pháp trực quan hóa Grad-CAM (Gradient-weighted Class Activation Mapping) được tích hợp để tăng tính minh bạch và khả năng diễn giải của mô hình. Kết quả thực nghiệm trên bộ dữ liệu 4.317 ảnh thuộc 5 loài hoa (Daisy, Dandelion, Rose, Sunflower, và Tulip) cho thấy độ chính xác vượt trội 96.45%, vượt xa phương pháp SVM truyền thống (53.67%).
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3">Công nghệ chính:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3">Thành tựu:</h4>
              <ul className="space-y-2">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://huggingface.co/spaces/viugialai/Flower-Recognition-Using-Deep-Learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href="https://v0-portfolio-viu.vercel.app/ICT2026-Flower-Classification-Research.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-lg text-sm font-medium hover:border-primary/50 transition-all"
              >
                <FileText size={16} /> Xem tài liệu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
