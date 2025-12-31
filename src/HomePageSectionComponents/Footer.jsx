import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <>
      <footer class="bg-white relative dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div class="col-span-2 lg:col-span-2">
              <div class="flex  ">
                {/* <div class="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm">
                  P
                </div>
                <span class="font-display font-bold text-xl text-slate-900 dark:text-white">
                  PigoPi
                </span> */}
                <img src={logo1} alt="logo" className="w-24 h-22" />
              </div>
              <p class="text-slate-600 pl-4 dark:text-slate-400 text-sm max-w-xs leading-relaxed mb-6">
                Empowering businesses with cutting-edge digital solutions. We
                build the future of web and mobile experiences.
              </p>
              <div class="flex space-x-4 pl-4">
                <a
                  class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition"
                  href="/"
                >
                  <i class="material-symbols-outlined text-lg">public</i>
                </a>

                <a
                  class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition"
                  href="https://www.linkedin.com/company/pigopi-private-limited/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition"
                  href="https://www.instagram.com/pigopi_pvt_ltd?igsh=MXQ0cjl4bTBnbDc1Mg=="
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>

                <a
                  class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition"
                  href="https://www.facebook.com/profile.php?id=61576543783204&sk=about"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>

                {/* <a
                  class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition"
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </a> */}

                <a
                  class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition"
                  href="https://youtube.com/@pigopi_314?si=i7dw1qqsGdXBu5Oe"
                  target="_blank"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white mb-6">
                Services
              </h4>
              <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a
                    class="hover:text-primary transition block"
                    href="/services"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-primary transition block"
                    href="/services"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-primary transition block"
                    href="/services"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-primary transition block"
                    href="/services"
                  >
                    QA Testing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white mb-6">
                Company
              </h4>
              <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <Link class="hover:text-primary transition block" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <a class="hover:text-primary transition block" href="#">
                    Careers
                  </a>
                </li>
                {/* <li>
                  <a class="hover:text-primary transition block" href="#">
                    Blog
                  </a>
                </li> */}
                <li>
                  <Link
                    class="hover:text-primary transition block"
                    to={"/#contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white mb-6">
                Legal
              </h4>
              <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <Link
                    class="hover:text-primary transition block"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    class="hover:text-primary transition block"
                    to="/terms-conditions"
                  >
                    Terms of Service
                  </Link>
                </li>
                {/* <li>
                  <a class="hover:text-primary transition block" href="#">
                    Cookie Policy
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-500 text-sm text-center md:text-left">
              © 2026 PigoPi PVT. LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
