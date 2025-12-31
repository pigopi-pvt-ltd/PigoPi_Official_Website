const OurCareerHero = () => {
  return (
    <>
      <section class="relative pt-12 pb-20 overflow-hidden bg-grid">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mb-6">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                We are hiring
              </div>
              <h1 class="text-5xl sm:text-6xl font-display font-bold leading-tight text-slate-900 dark:text-white mb-6">
                Join our team of
                <span class="gradient-text">digital innovators</span>.
              </h1>
              <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                At PigoPi, we're building the future of digital experiences. If
                you're passionate, creative, and ready to make an impact, we
                want to hear from you.
              </p>
              <div class="flex flex-wrap gap-4">
                <a
                  class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition shadow-lg"
                  href="#open-positions"
                >
                  View Openings
                </a>
              </div>
            </div>
            <div class="relative">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4 translate-y-8">
                  <img
                    alt="Team collaborating"
                    class="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWpYO4ccB76h3tM20nYVrV6y44EPNhjt-BjK3yMREiGkk91WmFaEjdpLiOrWEksd7fHs-fztTJzAddG2wWKA4X4ES-Rhsxbh_yFfYVs6A601WTkZ1ikfN6_gM742WAtZSP-_sBZlomRIhUrMi0HmrqcnaSd1_dZ62OTdJBechs1V1bmD5NkCDxVstVKTnWFJj25AL5_V7ig0F2FXbnBSTnoM2tBShL9lBK2OG5PLZaZsJToMqIQh6MbTc1hUvRmEWnxY9ARN3dyFc"
                  />
                  <img
                    alt="Modern office"
                    class="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8foMj1FKHsjQu_VtmMv0kzHeqP26RaCiipb0APHtRlSNr9-2b85JuhJ-2XidYONlcx_kF-oIpsPBDSbj7gwFGRyabOIMqqZu_SgzWoVG5adsdXU_GjKU7SHmy0SCwykuAec0rHkWlPYZMrBuktb1-unHFK__0LySyB532OwU4seXCRsPICjB8uSTkLLJ86ajTrb6oHYle_YCmmwyvFMrWvV8Nysk9R4Sj3G24IG8D2KA2Dv3PmfCEnS5mRh9NKFxVncVNZnpLlGM"
                  />
                </div>
                <div class="space-y-4">
                  <img
                    alt="Team meeting"
                    class="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Q3vsrnIZiVHtvEAckny50LiS4cSyTTvVnkMb7K08f-scxyLZepaY9Wv6JOcAJ1MxvuPiyocJ6d9Sdu9CbHfLU6Mg2SQ3LV6H3Em_JJlvtPJZuxaN0y7Jll9SclGdiIXCU-czvgOwtJ_WyhLlc1tBTvnMfJLj7BIU6GwO91_L3vZj6zDwtcSYBSig1KSIyByPCr2F1J9TUZK7zGfFfpgx5cIithfNBg1U-UfqeMXr6WWlrj50tAEBTxtDh_F1CbAcLm2pA-PHyoQ"
                  />
                  <img
                    alt="Creative work"
                    class="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcQI-bSFZrTU6dzNojsCybQ990gchQt9puheFVNYO6keQN2dGEaAgKaJ6rkuVt5yCwnP1cdxwKWCLulMiSjImN4J3IAso4abvzauwSVhtkuIjond8-vOJ9xRGG5tt6cfFlK5HNZExr4iw21PEa1-sxIwsloALXc9gw_KKABwIQXXZ7cTH23aJzSIX2SWQPOs2D3J3NDOJDuqksy-Ah1PtHj3XWyaklzAzqzSyoS-jZ00t4cHMXDSL7QdIDo9I84qSo4WltkeoY-MM"
                  />
                </div>
              </div>
              <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCareerHero;
