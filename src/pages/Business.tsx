import { Link } from "react-router-dom";
import {
  Briefcase, Users, Target, Award, GraduationCap, TrendingUp,
  Heart, Lightbulb, ArrowLeft, Mail, Linkedin, CheckCircle2, Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePicture from "@/assets/profile-picture.png";
import { useEffect, useState } from "react";

const BusinessNav = () => {
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
    { label: "About", href: "#b-about" },
    { label: "Contact", href: "#b-contact" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#1a0f2e]/70 backdrop-blur-xl border-b border-amber-300/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Crown className="w-5 h-5 text-purple-900" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hidden sm:inline">
            Dilmi · Business
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md">
          {items.map((it) =>
            it.to ? (
              <Link key={it.label} to={it.to} className="px-4 py-2 text-sm font-medium rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-all">
                {it.label}
              </Link>
            ) : (
              <a key={it.label} href={it.href} className="px-4 py-2 text-sm font-medium rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-all">
                {it.label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

const Business = () => {
  const skills = [
    { icon: Users, title: "Human Resource Management", desc: "Recruitment, employee engagement, performance management." },
    { icon: Target, title: "Strategic Planning", desc: "Goal setting, KPI design, and organizational alignment." },
    { icon: Heart, title: "Employee Relations", desc: "Conflict resolution, workplace culture, and well-being." },
    { icon: TrendingUp, title: "Business Administration", desc: "Operations, finance basics, and process optimization." },
    { icon: Lightbulb, title: "Leadership", desc: "Team coordination, mentoring, and motivational leadership." },
    { icon: Award, title: "Organizational Behavior", desc: "Change management and cross-functional collaboration." },
  ];

  const hrTools = ["Recruitment & Onboarding", "HR Analytics", "Payroll Basics", "Training & Development", "Policy Drafting", "MS Office Suite", "Google Workspace", "BambooHR (Concepts)"];
  const bizTools = ["Business Communication", "Project Management", "Marketing Principles", "Financial Accounting", "Business Ethics", "Negotiation", "Decision Making", "Organizational Strategy"];

  const experiences = [
    {
      role: "HR & Administration Trainee",
      org: "Academic / Industry Exposure",
      period: "2023 – Present",
      points: [
        "Supported recruitment lifecycle: CV screening, scheduling, onboarding documentation.",
        "Maintained employee records and assisted with policy communication.",
        "Coordinated training programs and internal engagement events.",
      ],
    },
    {
      role: "Student Leader & Event Coordinator",
      org: "University Society",
      period: "2022 – 2024",
      points: [
        "Led teams of 10+ members for academic & cultural events.",
        "Managed budgets, sponsorships, and stakeholder communications.",
        "Mentored junior members in leadership and teamwork.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0820] text-white">
      <BusinessNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#2a1745] to-[#0f0820]" />
          <div className="absolute w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-3xl -top-40 -right-40 animate-pulse-glow" />
          <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl -bottom-40 -left-40 animate-pulse-glow delay-1000" />
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="absolute w-1 h-1 bg-amber-200/50 rounded-full animate-float"
              style={{ top: `${(i * 47) % 100}%`, left: `${(i * 31) % 100}%`, animationDelay: `${(i % 5) * 0.5}s`, animationDuration: `${4 + (i % 4)}s` }} />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Link to="/" className="inline-flex items-center gap-2 text-amber-200/80 hover:text-amber-200 text-sm mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to dual portfolio
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-300/10 backdrop-blur-md border border-amber-300/30 rounded-full text-sm text-amber-200 mb-6">
              <Briefcase className="w-4 h-4" /> Business & HR Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Leading People.
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Driving Business.
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Business administration graduate with a passion for human resource management,
              leadership, and building organizations where people thrive.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-amber-300 to-amber-500 text-purple-900 hover:from-amber-400 hover:to-amber-600 shadow-lg">
                <a href="#b-contact"><Mail className="w-4 h-4" /> Get in Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                <a href="#b-experience">View Experience</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-300/40 shadow-2xl ring-4 ring-purple-500/20 ring-offset-4 ring-offset-transparent bg-white/5 animate-float">
                <img src={profilePicture} alt="Dilmi" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-amber-400/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-500/40 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="b-about" className="py-24 bg-[#0f0820]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              I am pursuing studies in Business Administration with a specialization in Human Resource
              Management. My passion lies in connecting people, processes, and purpose — building
              workplaces that are efficient, inclusive, and growth-oriented.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 bg-gradient-to-b from-[#0f0820] to-[#150c28]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <Card className="p-8 bg-white/5 backdrop-blur-md border-amber-300/20 hover:border-amber-300/40 transition-all">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Bachelor of Business Administration</h3>
                <p className="text-amber-200/90">Specialization in Human Resource Management</p>
                <p className="text-white/60 text-sm mt-1">University Studies</p>
              </div>
              <Badge className="bg-amber-300/20 text-amber-200 border-amber-300/30">Ongoing</Badge>
            </div>
            <p className="text-white/70 mt-4 text-sm leading-relaxed">
              Studying core business disciplines including management, marketing, finance, organizational
              behavior, and strategic HR practices — with applied projects in workforce planning and
              employee engagement.
            </p>
          </Card>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 bg-[#150c28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Core Competencies</h2>
            <p className="text-white/60">Skills built through study, leadership roles, and practice.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((s) => (
              <Card key={s.title} className="p-6 bg-white/5 backdrop-blur-md border-white/10 hover:border-amber-300/40 hover:bg-white/10 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <s.icon className="w-6 h-6 text-purple-900" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/70">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HR & BIZ TOOLS */}
      <section className="py-24 bg-[#0f0820]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">HR & Business Toolkit</h2>
            <p className="text-white/60">In-demand skills aligned with today's people-centric workplace.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-amber-300/20">
              <h3 className="font-semibold text-amber-200 mb-4 flex items-center gap-2"><Users className="w-5 h-5" /> Human Resources</h3>
              <div className="flex flex-wrap gap-2">
                {hrTools.map((t) => (
                  <Badge key={t} className="bg-white/10 text-white border-white/20 hover:bg-amber-300/20 hover:text-amber-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />{t}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-amber-300/20">
              <h3 className="font-semibold text-amber-200 mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5" /> Business Administration</h3>
              <div className="flex flex-wrap gap-2">
                {bizTools.map((t) => (
                  <Badge key={t} className="bg-white/10 text-white border-white/20 hover:bg-amber-300/20 hover:text-amber-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />{t}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="b-experience" className="py-24 bg-gradient-to-b from-[#0f0820] to-[#150c28]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Leadership & Experience</h2>
            <p className="text-white/60">People-first roles and real-world learning.</p>
          </div>
          <div className="space-y-6">
            {experiences.map((e) => (
              <Card key={e.role} className="p-8 bg-white/5 backdrop-blur-md border-white/10 hover:border-amber-300/40 transition-all">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{e.role}</h3>
                    <p className="text-amber-200/90">{e.org}</p>
                  </div>
                  <Badge className="bg-amber-300/20 text-amber-200 border-amber-300/30">{e.period}</Badge>
                </div>
                <ul className="space-y-2 mt-4">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-white/75 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="b-contact" className="py-24 bg-gradient-to-br from-[#1a0f2e] via-purple-900 to-[#2a1745]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Together</h2>
          <p className="text-white/80 mb-8">
            Open to HR internships, business administration roles, and leadership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-amber-300 to-amber-500 text-purple-900 hover:from-amber-400 hover:to-amber-600">
              <a href="mailto:chathuryadilmi@gmail.com"><Mail className="w-4 h-4" />Email Me</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
              <a href="#" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4" />LinkedIn</a>
            </Button>
          </div>
          <p className="mt-12 text-sm text-white/50">© {new Date().getFullYear()} Dilmi Senevirathna · Business & HR Portfolio</p>
        </div>
      </section>
    </div>
  );
};

export default Business;
