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
    description: 'Tham dự hội thảo "School Tour: Ready for AI 2025", do Sở KH&CN Đà Nẵng tài trợ.',
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 — Hoạt động</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
            Hoạt động <span className="text-gradient-bold">ngoại khoá</span>
          </h2>

          {/* Community Service */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Hoạt động cộng đồng</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {communityActivities.map((act, idx) => (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bold-card rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setLightbox(act.image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 backdrop-blur-sm">
                      <span className="text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-xl">
                        Xem ảnh lớn
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold mb-1">{act.title}</h4>
                    <p className="text-sm text-muted-foreground">{act.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Lightbulb size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Hội thảo & Phát triển chuyên môn</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {workshopActivities.map((act, idx) => (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bold-card rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setLightbox(act.image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 backdrop-blur-sm">
                      <span className="text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-xl">
                        Xem ảnh lớn
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
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={lightbox}
              alt="Activity"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesSection;
