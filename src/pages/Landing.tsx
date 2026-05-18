import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Briefcase, Github, Linkedin, Mail, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.png";

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: "Home", to: "/" },
    { label: "QA Portfolio", to: "/qa" },
    { label: "Business Portfolio", to: "/business" },
    { label: "About", to: "/#about-dual" },
    { label: "Contact", to: "/#contact-dual" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/60 backdrop-blur-xl border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold gradient-text hidden sm:inline">Dilmi S.</span>
        </Link>
        <div className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 border transition-all duration-500 ${
          scrolled ? "bg-muted/30 backdrop-blur-sm border-border/30" : "bg-white/10 backdrop-blur-sm border-white/20"
        }`}>
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted/50" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-24 pb-12">
        {/* animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl -top-40 -left-40 animate-pulse-glow" />
          <div className="absolute w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse-glow delay-1000" />
          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" />
          {/* floating dots */}
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float"
              style={{
                top: `${(i * 53) % 100}%`,
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 6) * 0.4}s`,
                animationDuration: `${4 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        {/* floating social */}
        <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
          <a href="https://github.com/DilSenevirathna" target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all">
            <Github className="w-4 h-4 text-white" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all">
            <Linkedin className="w-4 h-4 text-white" />
          </a>
          <a href="mailto:chathuryadilmi@gmail.com" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all">
            <Mail className="w-4 h-4 text-white" />
          </a>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Dual-Career Portfolio
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl ring-4 ring-white/10 ring-offset-4 ring-offset-transparent animate-float bg-white/10">
                  <img src={profilePicture} alt="Dilmi Senevirathna" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-2xl -z-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Building Excellence in
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-amber-200 bg-clip-text text-transparent">
                Technology &amp; Business
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-light">
              Explore my professional journey across Software Engineering, Quality Assurance,
              and Human Resource Management.
            </p>
          </div>

          {/* DUAL CARDS */}
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* LEFT - QA */}
            <Link
              to="/qa"
              className="group relative overflow-hidden rounded-3xl p-8 md:p-10 text-left border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-purple-600/20 to-fuchsia-500/30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">Career Path 01</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  QA &amp; Software Engineering
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
                  Discover test automation projects, performance engineering, QA reports,
                  certifications, and full-stack development work.
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-violet-700 font-semibold text-sm shadow-lg group-hover:gap-3 transition-all">
                  Preview QA Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* RIGHT - Business */}
            <Link
              to="/business"
              className="group relative overflow-hidden rounded-3xl p-8 md:p-10 text-left border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-purple-700/20 to-amber-600/30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">Career Path 02</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Business Administration &amp; HR
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
                  Explore business administration studies, HRM skills, leadership experience,
                  organizational knowledge, and management portfolio.
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 text-purple-900 font-semibold text-sm shadow-lg group-hover:gap-3 transition-all">
                  Preview Business Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70 flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ABOUT (dual) */}
      <section id="about-dual" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Professional, <span className="gradient-text">Two Disciplines</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I bridge the precision of engineering with the strategy of business leadership.
            On one side, I build reliable software through automated testing and quality
            engineering. On the other, I shape people-first organizations through human
            resource management and business administration.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all">
              <Code2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Engineering Mindset</h3>
              <p className="text-sm text-muted-foreground">Detail-oriented, analytical, and driven by quality and continuous improvement.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all">
              <Briefcase className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Business Acumen</h3>
              <p className="text-sm text-muted-foreground">People-first leadership, strategic thinking, and organizational excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-dual" className="py-24 gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-white/80 mb-8">Open to opportunities in both technology and business domains.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="mailto:chathuryadilmi@gmail.com"><Mail className="w-4 h-4" />Email Me</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
              <a href="https://github.com/DilSenevirathna" target="_blank" rel="noreferrer"><Github className="w-4 h-4" />GitHub</a>
            </Button>
          </div>
          <p className="mt-12 text-sm text-white/60">© {new Date().getFullYear()} Dilmi Senevirathna</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
