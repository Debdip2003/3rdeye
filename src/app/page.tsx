"use client";

import { useState, useEffect } from "react";
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
  Eye,
  Monitor,
  Laptop,
  PhoneCall,
  Users,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import purnandu from "../assets/purnandusensarma.jpg";
import moumita from "../assets/moumitasensarma.jpg";
import barsha from "../assets/barshaprasad.jpg";
import saurav from "../assets/souravsingh.jpg";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      role: "Team Coordinator",
      image: purnandu,
      phoneNumber: "+91 9830548111",
      experience:
        "5+ years of industry expertise in operations and collections management. Specializes in strategic planning and client relationship development.",
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
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-secondary/10 via-background to-accent/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-2 sm:px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-scale" : "opacity-0"
            }`}
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0 text-lg px-6 py-3 font-semibold shadow-lg">
              Established February 2022
            </Badge>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold mb-8 text-balance break-words">
              <span>3rd</span>
              <span className="text-gradient-primary">eye</span>
              <span> Debt Management Service</span>
            </h1>
            <div className="mb-8 sm:mb-12 max-w-2xl sm:max-w-4xl mx-auto animate-slide-in-top">
              <BlurText
                text="We are specialist in"
                animateBy="words"
                direction="top"
                delay={100}
                stepDuration={0.4}
                className="inline text-base xs:text-xl sm:text-2xl md:text-4xl text-muted-foreground leading-relaxed filter drop-shadow-[0_0_6px_hsla(200,70%,55%,0.15)]"
              />
              <span className="inline">&nbsp;</span>
              <BlurText
                text="NPA and RECOVERY."
                animateBy="words"
                direction="top"
                delay={130}
                stepDuration={0.45}
                className="inline text-base xs:text-xl sm:text-2xl md:text-4xl text-primary leading-relaxed filter drop-shadow-[0_0_12px_hsla(15,80%,60%,0.35)]"
              />
            </div>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl sm:max-w-4xl mx-auto text-pretty leading-relaxed">
              A specialized debt recovery partner for financial institutions
              across Kolkata and West Bengal, delivering consistent results
              through a combination of technology and human expertise.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground shadow-lg"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Recovery Process
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 bg-card shadow-lg"
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
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card text-card-foreground border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 text-secondary bg-secondary/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center">
            Company Profile
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-primary-foreground shadow-xl">
              <div className="text-center">
                <Building2 className="h-24 w-24 text-primary-foreground mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Professional Infrastructure
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  State-of-the-art facilities designed for optimal debt recovery
                  operations with modern technology and professional workspace.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="bg-card text-card-foreground border-0 shadow-lg">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-2xl h-12 flex  items-center ">
                  <CardTitle className="text-2xl">Headquarters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  <div>
                    <p className="font-semibold">Corporate Office:</p>
                    <p className="text-muted-foreground">
                      169, Rajdanga Main Road, Kolkata- 700107
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold ">Registered Office:</p>
                    <p className="text-muted-foreground">
                      375, Rajdanga Sarat Park, Kolkata – 700107
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card text-card-foreground border-0 shadow-lg">
                <CardHeader className="bg-muted text-foreground rounded-t-2xl h-12 flex  items-center">
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-medium">9830548111 / 7044592088</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>3rdeyedebtmanagementservice@gmail.com</span>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-card p-6 rounded-lg border-l-4 border-primary shadow-lg">
                <p className="text-muted-foreground text-lg leading-relaxed">
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
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center">
            Current Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6">
              {portfolioData.map((item) => (
                <Card
                  key={item.name}
                  className="bg-card text-card-foreground border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-2xl h-24 py-2 ">
                    <CardTitle className="text-4xl font-bold ">
                      {item.amount}
                    </CardTitle>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center font-medium">
                      {item.type}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl p-12 text-foreground shadow-xl">
              <div className="text-center">
                <TrendingUp className="h-24 w-24 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Portfolio Performance
                </h3>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-primary p-6 rounded-lg">
                    <p className="text-4xl font-bold text-primary-foreground">
                      ₹35Cr
                    </p>
                    <p className="text-primary-foreground/80">
                      Total Portfolio
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <p className="text-4xl font-bold">5+</p>
                    <p className="text-foreground/70">Active Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12 bg-secondary/10 p-4 sm:p-8 rounded-2xl border-0 shadow-lg">
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Total active portfolio of{" "}
              <span className="text-primary font-bold text-3xl">₹35Cr</span>{" "}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-4 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-lg mb-6">
              <Users className="h-8 w-8" />
              <h2 className="text-4xl font-bold">Leadership Team</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals driving excellence in debt recovery
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {leadership.map((leader) => (
              <Card
                key={leader.name}
                className="group bg-card text-card-foreground border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-primary/30"
              >
                <CardHeader className="p-0 m-0">
                  <div className="relative w-full h-72 sm:h-80">
                    {leader.image && (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-top bg-background"
                        priority={false}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="px-5 py-5 sm:px-6 sm:py-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl">{leader.name}</CardTitle>
                    <Badge className="ml-auto shrink-0 bg-primary text-primary-foreground border-0 px-3 py-1 rounded-full">
                      {leader.phoneNumber}
                    </Badge>
                  </div>
                  <Badge className="w-max bg-muted text-foreground rounded-full px-3 py-1 border border-border">
                    {leader.role}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed tracking-[0.01em]">
                    {leader.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-4 sm:p-8 rounded-2xl border-0 shadow-lg">
            <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed">
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
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center">
            Operational Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-secondary/10 p-4 sm:p-8 rounded-2xl border-0 shadow-lg">
                <h3 className="text-3xl font-bold text-secondary mb-8">
                  Technology Resources
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-md">
                    <div className="bg-primary p-3 rounded-full">
                      <Monitor className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Computers</h4>
                      <p className="text-muted-foreground">
                        25 desktop systems for telecalling and data management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-md">
                    <div className="bg-primary p-3 rounded-full">
                      <Laptop className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Laptops</h4>
                      <p className="text-muted-foreground">
                        6 units for field operations and management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-md">
                    <div className="bg-primary p-3 rounded-full">
                      <PhoneCall className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Call Systems</h4>
                      <p className="text-muted-foreground">
                        6 call recording units and 1 dedicated auto-dialer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-4 sm:p-8 rounded-2xl border-0 shadow-lg">
                <h3 className="text-3xl font-bold text-slate-700 mb-4">
                  Human Capital
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Experienced professionals dedicated to delivering exceptional
                  debt recovery results through strategic planning and
                  operational excellence.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-primary to-muted rounded-2xl p-6 sm:p-12 text-primary-foreground shadow-xl">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center bg-white/10 p-6 rounded-lg">
                    <Monitor className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                    <p className="text-3xl font-bold">25+</p>
                    <p className="text-white/80">Desktop Systems</p>
                  </div>
                  <div className="text-center bg-white/10 p-6 rounded-lg">
                    <Laptop className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                    <p className="text-3xl font-bold">6+</p>
                    <p className="text-white/80">Mobile Units</p>
                  </div>
                </div>
                <div className="text-center bg-white/10 p-6 rounded-lg">
                  <PhoneCall className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                  <p className="text-3xl font-bold">7+</p>
                  <p className="text-white/80">Call Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-2xl text-white/80">
              Ready to optimize your debt recovery process?
            </p>
          </div>

          <div className="max-w-2xl sm:max-w-4xl mx-auto">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <Card className="glassmorphism border-0 text-foreground shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="mr-3 h-6 w-6" />
                    Corporate Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">169, Rajdanga Main Road</p>
                  <p className="text-lg">Kolkata - 700107</p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 text-foreground shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Building2 className="mr-3 h-6 w-6" />
                    Registered Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">375, Rajdanga Sarat Park</p>
                  <p className="text-lg">Kolkata - 700107</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="text-xl px-10 py-6 bg-card text-primary hover:bg-card/90 shadow-xl border-0"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  9830548111 / 7044592088
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl px-10 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent shadow-xl"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-muted border-t-4 border-primary py-8 sm:py-12 text-foreground">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-primary p-2 rounded-full">
              <Eye className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold">
              <span>3rd</span>
              <span className="text-gradient-secondary">eye</span>
              <span> Debt Management Service</span>
            </span>
          </div>
          <p className="text-foreground/80 mb-2">
            © 2024 3rdeye Debt Management Service. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm">
            Serving Kolkata and West Bengal with specialized debt recovery
            solutions since 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
