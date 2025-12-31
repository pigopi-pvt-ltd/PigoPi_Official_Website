import { motion } from "framer-motion";

const ImpactSection = () => {
  // Container for staggered features
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Feature item animation
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50 rounded-[2.5rem] p-12 lg:p-16 relative shadow-2xl overflow-hidden border border-slate-100"
        >
          {/* Decorative Blobs with Floating Animation */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
              >
                Built for scalable impact.
              </motion.h2>

              <div className="space-y-6">
                {/* Feature 1 */}
                <motion.div variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary border border-slate-200 shadow-sm">
                    <span className="material-symbols-outlined">speed</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-xl mb-1">
                      Performance First
                    </h4>
                    <p className="text-slate-600">
                      We optimize every line of code to ensure your site loads
                      instantly.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary border border-slate-200 shadow-sm">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-xl mb-1">
                      Secure by Design
                    </h4>
                    <p className="text-slate-600">
                      Enterprise-grade security protocols implemented from day
                      one.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary border border-slate-200 shadow-sm">
                    <span className="material-symbols-outlined">devices</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-xl mb-1">
                      Fully Responsive
                    </h4>
                    <p className="text-slate-600">
                      Seamless experiences across mobile, tablet, and desktop
                      devices.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <motion.img
                alt="Office workspace"
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="rounded-2xl shadow-2xl transition duration-500 border border-slate-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPSK5O3H3CBM3JcxCMc4kA9SCAyTVmAPjTgGOA-31TbDmhG_LwwRHFi7vsG2mPKDffDh33KFkColXreu-t0xMxVrvsMc1Tkor9C2HcExFFh-WRoiM1Cs2zMybC9mvQKvwg8c1wNtiw0jVrYVd_OEwhThMT3DK7xArIsRbiq2uSzTH_XSUG0NpCrdfVFrUVk6OwpO1lF_56FYGK2wtZkmZSjxOk3eYYtXEZnxiv4LldZyNVy-RFCLafSB7jB5WH_2kYXBG1LGLTOWY"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
