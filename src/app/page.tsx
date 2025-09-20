"use client";

import { useState, useEffect, useRef } from "react";

// Minimal types for Vanta.js Fog effect
type VantaEffect = { destroy: () => void };
type VantaFogOptions = {
  el: Element | null;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  // Optional Vanta FOG tuning parameters
  highlightColor?: number;
  midtoneColor?: number;
  lowlightColor?: number;
  baseColor?: number;
  blurFactor?: number;
  speed?: number;
  zoom?: number;
};
type VantaNamespace = { FOG?: (opts: VantaFogOptions) => VantaEffect };
declare global {
  interface Window {
    VANTA?: VantaNamespace;
  }
}
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlurText from "@/components/ui/blurtext";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Target,
  Building2,
  Monitor,
  Laptop,
  PhoneCall,
  Users,
  TrendingUp,
  Shield,
  Clock,
  LoaderPinwheel,
  Bike,
  Home,
} from "lucide-react";
import purnandu from "../assets/purnandusensarma.jpg";
import moumita from "../assets/moumitasensarma.jpg";
import barsha from "../assets/barshaprasad.jpg";
import saurav from "../assets/souravsingh.jpg";
import logo from "../assets/logo.png";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const vantaInstanceRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll-based reveal animations
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // optional delay per element via data-reveal-delay (ms)
            const delayAttr = el.dataset.revealDelay;
            const baseDelayMs = 150; // base delay for all reveal animations
            const extraDelayMs = delayAttr ? parseInt(delayAttr, 10) || 0 : 0;
            el.style.transitionDelay = `${baseDelayMs + extraDelayMs}ms`;
            // ensure transition is set if not provided by utility classes
            if (!el.style.transition) {
              el.style.transition = "transform 700ms ease, opacity 700ms ease";
            }
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Dynamically load scripts and initialize VANTA.FOG on the hero section
  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        // Avoid adding the same script multiple times
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });

    const initVanta = async () => {
      if (!heroRef.current || vantaInstanceRef.current) return;
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.fog.min.js"
        );
        const VANTA = window.VANTA;
        if (VANTA && VANTA.FOG) {
          vantaInstanceRef.current = VANTA.FOG({
            el: heroRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            // Darker palette for better foreground contrast
            highlightColor: 0x9a9a9a,
            midtoneColor: 0x5a5a5a,
            lowlightColor: 0x2a2a2a,
            baseColor: 0x0a0a0a,
            blurFactor: 0.6,
            speed: 1.2,
            zoom: 1.0,
          });
        }
      } catch {
        // fail silently if CDN blocked
      }
    };

    initVanta();

    return () => {
      if (vantaInstanceRef.current) {
        try {
          vantaInstanceRef.current.destroy();
        } catch {}
        vantaInstanceRef.current = null;
      }
    };
  }, []);

  const portfolioData = [
    { name: "ONE CARD", amount: "₹15Cr", type: "Field collection services" },
    {
      name: "SHRIRAM FINANCE (LAP)",
      amount: "₹50Cr",
      type: "LAP recovery operations",
    },
    {
      name: "SLICE",
      amount: "₹10Cr",
      type: "Credit card recovery via field and telecalling",
    },
    { name: "KHATABOOK", amount: "₹8Cr", type: "Field collection operations" },
    { name: "WE RIZE", amount: "₹6Cr", type: "Field collection services" },
  ];

  const leadership = [
    {
      name: "Purnendu Sen Sarma",
      role: "Founder",
      image: purnandu,
      phoneNumber: "+91 9830548111",
      experience:
        "25+ years of industry expertise in operations and collections management. Specializes in strategic planning and client relationship development.",
    },
    {
      name: "Moumita Sen Sarma",
      role: "Managing Partner",
      image: moumita,
      phoneNumber: "+91 7044592088",
      experience:
        "5+ years of industry expertise in operations and collections management. Specializes in strategic planning and client relationship development.",
    },
    {
      name: "Barsha Prasad",
      role: "Head of HR",
      image: barsha,
      phoneNumber: "+91 8777529011",
      experience:
        "5+ years of collections experience with deep knowledge of regional recovery techniques. Focuses on team training and performance optimization.",
    },
    {
      name: "Saurav Singh",
      role: "Head of Operations",
      image: saurav,
      phoneNumber: "+91 7003041979",
      experience:
        "3+ years of specialized experience in hardcore collections. Oversees day-to-day recovery operations and technology implementation.",
    },
  ];

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Field Collection Services",
      description:
        "Professional field agents for direct customer engagement and debt recovery operations",
    },
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "Telecalling Operations",
      description:
        "Advanced call center operations with recording systems and auto-dialers for efficient communication",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "LAP Recovery",
      description:
        "Specialized loan against property recovery services with legal compliance and documentation",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Credit Card Recovery",
      description:
        "Comprehensive credit card debt recovery through combined field and telecalling approaches",
    },
    {
      icon: <LoaderPinwheel className="h-8 w-8" />,
      title: "Personal Loan Recovery",
      description: "Any type of unsecured in NPA and Recovery collection",
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Two Wheeler Recovery",
      description: "Secured recovery collection",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Loan Recovery",
      description: "Specialist in secured recovery with legal experts",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-secondary/50 via-background to-accent/50 flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => {
          if (!heroRef.current || !heroContentRef.current) return;
          const rect = heroRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          const translateX = x * 12; // px
          const translateY = y * 10; // px
          heroContentRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        }}
        onMouseLeave={() => {
          if (heroContentRef.current) {
            heroContentRef.current.style.transform = "translate3d(0,0,0)";
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-20 pointer-events-none"></div>
        <div className="absolute -top-32 -left-24 h-96 w-96 bg-primary/30 blur-3xl rounded-full z-10 pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] bg-secondary/30 blur-3xl rounded-full z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0.0)_70%)]"></div>
        <div className="container mx-auto px-2 sm:px-4 text-center relative z-30">
          <div
            ref={heroContentRef}
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-scale" : "opacity-0"
            }`}
          >
            <div className="mx-auto mb-6 sm:mb-8 md:mb-10"></div>
            <Badge className="mb-6 bg-primary text-primary-foreground border-0 text-lg px-6 py-3 font-semibold shadow-lg">
              Established February 2022
            </Badge>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-balance break-words drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              <span className="inline-flex items-center gap-2 sm:gap-3 align-middle">
                <Image
                  src={logo}
                  alt="3rd eye logo"
                  width={48}
                  height={48}
                  className="w-[0.95em] h-[0.95em] align-middle object-contain rounded-md shadow-md"
                  priority
                />
                <span>3rd</span>
                <span className="text-gradient-primary">eye</span>
              </span>
              <span className="block mt-2">Debt Management Service</span>
            </h1>
            <div className="mb-6 sm:mb-8 md:mb-12 max-w-2xl sm:max-w-4xl mx-auto animate-slide-in-top">
              <BlurText
                text="We are specialist in NPA and RECOVERY."
                animateBy="words"
                direction="top"
                delay={100}
                stepDuration={0.45}
                className="inline text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary leading-relaxed filter drop-shadow-[0_0_12px_hsla(15,80%,60%,0.35)]"
              />
            </div>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-12 max-w-2xl sm:max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              A specialized debt recovery partner for financial institutions
              across Kolkata and West Bengal, delivering consistent results
              through a combination of technology and human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-primary hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Recovery Process
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 bg-card shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 9830548111
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card text-card-foreground border-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] text-center ring-1 ring-transparent hover:ring-primary/30 reveal-on-scroll opacity-0 translate-y-6 h-full flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

                <CardHeader className="items-center">
                  <div className="mx-auto mb-4 text-secondary bg-secondary/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-14 sm:py-20 bg-muted/20">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Company Profile
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-primary-foreground shadow-xl reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
              <div className="text-center">
                <Building2 className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-primary-foreground mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Professional Infrastructure
                </h3>
                <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                  State-of-the-art facilities designed for optimal debt recovery
                  operations with modern technology and professional workspace.
                </p>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <Card
                className="bg-card text-card-foreground border-0 shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                data-reveal-delay="100"
              >
                <CardHeader className="bg-primary text-primary-foreground rounded-t-2xl h-12 flex items-center">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    Headquarters
                  </CardTitle>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Corporate Office:
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      169, Rajdanga Main Road, 3rd Floor, Near Motherhood
                      Hospital, Kolkata- 700107
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Registered Office:
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      375, Rajdanga Sarat Park, Kolkata – 700107
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="bg-card text-card-foreground border-0 shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                data-reveal-delay="200"
              >
                <CardHeader className="bg-muted text-foreground rounded-t-2xl h-12 flex items-center">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    Contact Information
                  </CardTitle>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base break-all">
                      9830548111 / 7044592088
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">
                      3rdeyedebtmanagementservice@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">
                      response.3edms.ss@gmail.com
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div
                className="bg-card p-4 sm:p-6 rounded-lg border-l-4 border-primary shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                data-reveal-delay="300"
              >
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  Serving Kolkata and the rest of West Bengal with specialized
                  debt recovery solutions tailored to financial institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Portfolio Section */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Current Portfolio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {portfolioData.map((item) => (
                <Card
                  key={item.name}
                  className="relative overflow-hidden bg-card text-card-foreground border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ring-1 ring-transparent hover:ring-primary/30 reveal-on-scroll opacity-0 translate-y-6"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                  <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-2xl h-20 sm:h-24 py-2">
                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {item.amount}
                    </CardTitle>
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold">
                      {item.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex justify-center">
                      <span className="mt-2 sm:mt-3 inline-block rounded-full border border-border bg-muted/60 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-foreground text-center">
                        {item.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div
              className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl p-6 sm:p-8 md:p-12 text-foreground shadow-xl ring-1 ring-primary/20 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
              data-reveal-delay="150"
            >
              <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl"></div>
              <div className="text-center relative">
                <TrendingUp className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-accent mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Portfolio Performance
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
                  <div className="bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md shadow-primary/20">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
                      ₹35Cr
                    </p>
                    <p className="text-primary-foreground/80 text-xs sm:text-sm md:text-base">
                      Total Portfolio
                    </p>
                  </div>
                  <div className="bg-muted p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      5+
                    </p>
                    <p className="text-foreground/70 text-xs sm:text-sm md:text-base">
                      Active Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center mt-6 sm:mt-8 md:mt-12 bg-secondary/10 p-4 sm:p-6 md:p-8 rounded-2xl border-0 shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
            data-reveal-delay="200"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Total active portfolio of{" "}
              <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl">
                ₹35Cr
              </span>{" "}
              across diverse financial institutions, demonstrating our
              capability to handle various debt categories and client
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-14 sm:py-20 bg-muted/20">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center space-x-3 sm:space-x-4 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg mb-4 sm:mb-6 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
              <Users className="h-6 w-6 sm:h-8 sm:w-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Leadership Team
              </h2>
            </div>
            <p
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
              data-reveal-delay="100"
            >
              Experienced professionals driving excellence in debt recovery
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {leadership.map((leader) => (
              <Card
                key={leader.name}
                className="group bg-card text-card-foreground border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-primary/30 h-full flex flex-col reveal-on-scroll opacity-0 translate-y-6"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

                <CardHeader className="p-0 m-0">
                  <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                    {leader.image && (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={false}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 space-y-2 sm:space-y-3 flex-1 flex flex-col">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-center">
                      {leader.name}
                    </CardTitle>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <Badge className="w-max bg-muted text-foreground rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm border border-border">
                      {leader.role}
                    </Badge>
                    <Badge className="shrink-0 bg-primary text-primary-foreground border-0 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full">
                      {leader.phoneNumber}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed tracking-[0.01em] text-xs sm:text-sm md:text-base">
                    {leader.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-2xl border-0 shadow-lg">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto leading-relaxed">
              Our leadership brings diverse expertise in collections strategy,
              operational excellence, and regional market knowledge to deliver
              superior recovery results.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Infrastructure Section */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Operational Infrastructure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-secondary/10 p-4 sm:p-6 md:p-8 rounded-2xl border-0 shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-6 sm:mb-8">
                  Technology Resources
                </h3>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

                <div className="space-y-4 sm:space-y-6">
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 bg-card p-4 sm:p-6 rounded-lg shadow-md reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                    data-reveal-delay="0"
                  >
                    <div className="bg-primary p-2 sm:p-3 rounded-full flex-shrink-0">
                      <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                        Computers
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        25 desktop systems for telecalling and data management
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 bg-card p-4 sm:p-6 rounded-lg shadow-md reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                    data-reveal-delay="100"
                  >
                    <div className="bg-primary p-2 sm:p-3 rounded-full flex-shrink-0">
                      <Laptop className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                        Laptops
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        6 units for field operations and management
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 bg-card p-4 sm:p-6 rounded-lg shadow-md reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                    data-reveal-delay="200"
                  >
                    <div className="bg-primary p-2 sm:p-3 rounded-full flex-shrink-0">
                      <PhoneCall className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                        Auto Dialer
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        2 dedicated auto-dialer with 32 ports each
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 bg-card p-4 sm:p-6 rounded-lg shadow-md reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                    data-reveal-delay="200"
                  >
                    <div className="bg-primary p-2 sm:p-3 rounded-full flex-shrink-0">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                        Static IP
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-slate-100 p-4 sm:p-6 md:p-8 rounded-2xl border-0 shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                data-reveal-delay="150"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 mb-3 sm:mb-4">
                  Human Capital
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Experienced professionals dedicated to delivering exceptional
                  debt recovery results through strategic planning and
                  operational excellence.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-primary to-muted rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-primary-foreground shadow-xl reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                  <div className="text-center bg-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                    <Monitor className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-foreground mx-auto mb-2 sm:mb-3 md:mb-4" />
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                      25+
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">
                      Desktop Systems
                    </p>
                  </div>
                  <div className="text-center bg-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                    <Laptop className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-foreground mx-auto mb-2 sm:mb-3 md:mb-4" />
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                      6+
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">
                      Mobile Units
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center bg-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                    <PhoneCall className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-foreground mx-auto mb-2 sm:mb-3 md:mb-4" />
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                      30+
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">
                      Call Systems
                    </p>
                  </div>
                  <div className="text-center bg-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                    <Shield className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-foreground mx-auto mb-2 sm:mb-3 md:mb-4" />
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                      2+
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">
                      Automatic Dialer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
              Get In Touch
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white/80 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
              data-reveal-delay="100"
            >
              Ready to optimize your debt recovery process?
            </p>
          </div>

          <div className="max-w-2xl sm:max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
              <Card className="glassmorphism border-0 text-foreground shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl md:text-2xl">
                    <MapPin className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    Corporate Office
                  </CardTitle>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg">
                    169, Rajdanga Main Road, 3rd Floor
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    Near Motherhood Hospital, Kolkata - 700107
                  </p>
                </CardContent>
              </Card>

              <Card
                className="glassmorphism border-0 text-foreground shadow-lg reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                data-reveal-delay="100"
              >
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl md:text-2xl">
                    <Building2 className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    Registered Office
                  </CardTitle>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg">
                    375, Rajdanga Sarat Park
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    Kolkata - 700107
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700">
                <Button
                  size="lg"
                  className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 w-full sm:w-auto bg-card text-primary hover:bg-card/90 shadow-xl border-0"
                >
                  <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="break-all">9830548111 / 7044592088</span>
                </Button>
                <Button
                  size="lg"
                  className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 w-full sm:w-auto bg-card text-primary hover:bg-card/90 shadow-xl border-0"
                >
                  <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="break-all text-xs sm:text-sm md:text-base">
                    3rdeyedebtmanagementservice@gmail.com
                  </span>
                </Button>
                <Button
                  size="lg"
                  className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 w-full sm:w-auto bg-card text-primary hover:bg-card/90 shadow-xl border-0"
                >
                  <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="break-all text-xs sm:text-sm md:text-base">
                    response.3edms.ss@gmail.com
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-muted border-t-4 border-primary py-6 sm:py-8 md:py-12 text-foreground">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="bg-primary p-2 rounded-full">
              <Image
                src={logo}
                alt="3rd eye logo"
                width={32}
                height={32}
                className="h-6 w-6 sm:h-8 sm:w-8 object-contain rounded"
              />
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              <span>3rd</span>
              <span className="text-gradient-secondary">eye</span>
              <span className="hidden sm:inline"> Debt Management Service</span>
              <span className="sm:hidden"> DMS</span>
            </span>
          </div>
          <p className="text-foreground/80 mb-2 text-sm sm:text-base">
            © 2024 3rdeye Debt Management Service. All rights reserved.
          </p>
          <p className="text-foreground/60 text-xs sm:text-sm">
            Serving Kolkata and West Bengal with specialized debt recovery
            solutions since 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
