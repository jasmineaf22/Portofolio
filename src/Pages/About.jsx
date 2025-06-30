import React, { useEffect, memo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>
      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          <img src="/Photo.jpg" alt="Profile" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);

  const frameworksAndLanguages = [
    { icon: "codeigniter.svg", name: "CodeIgniter" },
    { icon: "laravel.svg", name: "Laravel" },
    { icon: "flutter.svg", name: "Flutter" },
    { icon: "bootstrap.svg", name: "Bootstrap" },
    { icon: "html.svg", name: "HTML" },
    { icon: "css.svg", name: "CSS" },
    { icon: "javascript.svg", name: "JavaScript" },
    { icon: "php.svg", name: "PHP" },
    { icon: "dart.svg", name: "Dart" },
    { icon: "cpp.svg", name: "C++" },
    { icon: "mysql.svg", name: "MySQL" },
  ];

  const tools = [
    { icon: "vscode.svg", name: "VS Code" },
    { icon: "figma.svg", name: "Figma" },
    { icon: "git.svg", name: "Git" },
    { icon: "github.svg", name: "GitHub" },
    { icon: "canva.svg", name: "Canva" },
    { icon: "xampp.svg", name: "XAMPP" },
    { icon: "colab.svg", name: "Google Colab" },
  ];

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="About">
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left" data-aos="fade-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Get to Know Me</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0" data-aos="fade-right">
              An Informatics student specializing in Laravel, Flutter, Power Platform, and data analytics. Experienced in building web dashboards, mobile apps, and automation tools to transform complex ideas into user‑friendly digital products.
            </p>
          </div>
          <ProfileImage />
        </div>

        {/* Tech Stack */}
        <div className="mt-12 space-y-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-200">Frameworks & Languages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworksAndLanguages.map((tech, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center group ${idx % 2 === 0 ? 'animate-float-up' : 'animate-float-down'}`}
                data-aos="fade-up"
              >
                <img
                  src={`/${tech.icon}`}
                  alt={tech.name}
                  title={tech.name}
                  className="w-28 h-28 rounded-xl bg-white/5 p-3 border border-white/10 shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="mt-2 text-xs text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 mt-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 ">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center group ${idx % 2 === 0 ? 'animate-float-up' : 'animate-float-down'}`}
                data-aos="fade-up"
              >
                <img
                  src={`/${tool.icon}`}
                  alt={tool.name}
                  title={tool.name}
                  className="w-28 h-28 rounded-xl bg-white/5 p-3 border border-white/10 shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="mt-2 text-xs text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slower { to { transform: rotate(360deg); } }
        @keyframes pulse-slow { 0%,100%{opacity:1;} 50%{opacity:0.5;} }
        @keyframes float-up { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
        @keyframes float-down { 0%,100%{transform:translateY(0);} 50%{transform:translateY(8px);} }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
        .animate-spin-slower { animation: spin-slower 8s linear infinite; }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-float-down { animation: float-down 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
