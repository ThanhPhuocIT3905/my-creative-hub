import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lightbulb, X } from "lucide-react";

const communityActivities = [
  {
    title: "Beach Cleanup Activity",
    description: "Đóng góp vào hoạt động bảo vệ môi trường thông qua việc dọn dẹp bãi biển.",
    image: "/activities/beach-cleanup.png",
  },
  {
    title: "Da Nang Museum Visit",
    description: "Tham gia chuyến tham quan văn hóa và giáo dục tại Bảo tàng Đà Nẵng.",
    image: "/activities/museum-visit.png",
  },
];

const workshopActivities = [
  {
    title: "Digital Transformation Conference",
    description: 'Tham dự hội thảo khoa học "Tăng cường Chuyển đổi Số tại Đà Nẵng".',
    image: "/activities/digital-transformation.png",
  },
  {
    title: "School Tour: Ready for AI 2025",
    description: 'Tham dự hội thảo "School Tour: Ready for AI 2025", do Sở Khoa học và Công nghệ Đà Nẵng tài trợ, phối hợp với DevPlus tổ chức.',
    image: "/activities/school-tour-ai.png",
  },
  {
    title: "Vietnam University Cardano Workshop",
    description: "Tham dự Workshop & Onboarding của Vietnam University Cardano.",
    image: "/activities/cardano-workshop.png",
  },
];

const ActivitiesSection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="activities" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Hoạt <span className="text-gradient">động</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          {/* Community Service */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Heart size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Hoạt động cộng đồng</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {communityActivities.map((act, idx) => (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-strong)]"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setLightbox(act.image)}
                  >
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                      <span className="text-xs font-medium text-primary-foreground bg-primary/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        Xem ảnh
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold mb-1">{act.title}</h4>
                    <p className="text-sm text-muted-foreground">{act.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Hội thảo & Phát triển chuyên môn</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {workshopActivities.map((act, idx) => (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-strong)]"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setLightbox(act.image)}
                  >
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                      <span className="text-xs font-medium text-primary-foreground bg-primary/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        Xem ảnh
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-1">{act.title}</h4>
                    <p className="text-xs text-muted-foreground">{act.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Activity"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesSection;
