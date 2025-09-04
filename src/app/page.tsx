"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioData = [
    { name: "ONE CARD", amount: "₹10Cr", type: "Field collection services" },
    {
      name: "SHRIRAM FINANCE",
      amount: "₹10Cr",
      type: "LAP recovery operations",
    },
    {
      name: "SLICE",
      amount: "₹7Cr",
      type: "Credit card recovery via field and telecalling",
    },
    { name: "KHATABOOK", amount: "₹5Cr", type: "Field collection operations" },
    { name: "WE RIZE", amount: "₹3Cr", type: "Field collection services" },
  ];

  const leadership = [
    {
      name: "Moumita Sen Sarma",
      role: "Managing Partner",
      experience:
        "5+ years of industry expertise in operations and collections management. Specializes in strategic planning and client relationship development.",
    },
    {
      name: "Anjana Das",
      role: "Partner",
      experience:
        "5+ years of collections experience with deep knowledge of regional recovery techniques. Focuses on team training and performance optimization.",
    },
    {
      name: "Saurav Singh",
      role: "Head of Operations",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-slate-600/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Badge className="mb-6 bg-blue-600 text-white border-0 text-lg px-6 py-3 font-semibold shadow-lg">
              Established February 2022
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
              <span className="text-slate-800">3rd</span>
              <span className="text-blue-600">eye</span>
              <span className="text-slate-800"> Debt Management Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
              A specialized debt recovery partner for financial institutions
              across Kolkata and West Bengal, delivering consistent results
              through a combination of technology and human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Recovery Process
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 9830548111
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-white border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 text-blue-600 bg-blue-50 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-slate-800">
            Company Profile
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white shadow-xl">
              <div className="text-center">
                <Building2 className="h-24 w-24 text-white mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Professional Infrastructure
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  State-of-the-art facilities designed for optimal debt recovery
                  operations with modern technology and professional workspace.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="bg-blue-600 text-white rounded-t-2xl h-12 flex  items-center ">
                  <CardTitle className="text-2xl">Headquarters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  <div>
                    <p className="text-slate-800 font-semibold">
                      Corporate Office:
                    </p>
                    <p className="text-slate-600">
                      169, Rajdanga Main Road, Kolkata- 700107
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold ">
                      Registered Office:
                    </p>
                    <p className="text-slate-600">
                      375, Rajdanga Sarat Park, Kolkata – 700107
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="bg-slate-600 text-white rounded-t-2xl h-12 flex  items-center">
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-800 font-medium">
                      9830548111 / 7044592088
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-slate-600" />
                    <span className="text-slate-800">
                      3rdeyedebtmanagementservice@gmail.com
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-lg">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Serving Kolkata and the rest of West Bengal with specialized
                  debt recovery solutions tailored to financial institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-slate-800">
            Current Portfolio
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.map((item, index) => (
                <Card
                  key={item.name}
                  className="bg-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <CardHeader className="text-center bg-blue-600 text-white rounded-t-2xl h-24 py-2 ">
                    <CardTitle className="text-4xl font-bold ">
                      {item.amount}
                    </CardTitle>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center font-medium">
                      {item.type}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-12 text-white shadow-xl">
              <div className="text-center">
                <TrendingUp className="h-24 w-24 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Portfolio Performance
                </h3>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-600 p-6 rounded-lg">
                    <p className="text-4xl font-bold text-white">₹35Cr</p>
                    <p className="text-blue-100">Total Portfolio</p>
                  </div>
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <p className="text-4xl font-bold text-white">5+</p>
                    <p className="text-slate-300">Active Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 bg-blue-50 p-8 rounded-2xl border-0 shadow-lg">
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Total active portfolio of{" "}
              <span className="text-blue-600 font-bold text-3xl">₹35Cr</span>{" "}
              across diverse financial institutions, demonstrating our
              capability to handle various debt categories and client
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-4 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-6">
              <Users className="h-8 w-8" />
              <h2 className="text-4xl font-bold">Leadership Team</h2>
            </div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Experienced professionals driving excellence in debt recovery
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {leadership.map((leader, index) => (
              <Card
                key={leader.name}
                className="bg-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <CardHeader className="text-center bg-blue-600 text-white rounded-t-2xl h-32 flex flex-col justify-center items-center  ">
                  <CardTitle className="text-2xl">{leader.name}</CardTitle>
                  <Badge className="bg-white/20 text-white text-lg px-4 py-1 mt-2 border-0 ">
                    {leader.role}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-slate-600 leading-relaxed">
                    {leader.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl border-0 shadow-lg">
            <p className="text-xl text-slate-700 text-center max-w-4xl mx-auto leading-relaxed">
              Our leadership brings diverse expertise in collections strategy,
              operational excellence, and regional market knowledge to deliver
              superior recovery results.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-slate-800">
            Operational Infrastructure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl border-0 shadow-lg">
                <h3 className="text-3xl font-bold text-blue-700 mb-8">
                  Technology Resources
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Monitor className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800">
                        Computers
                      </h4>
                      <p className="text-slate-600">
                        25 desktop systems for telecalling and data management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Laptop className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800">
                        Laptops
                      </h4>
                      <p className="text-slate-600">
                        6 units for field operations and management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <PhoneCall className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800">
                        Call Systems
                      </h4>
                      <p className="text-slate-600">
                        6 call recording units and 1 dedicated auto-dialer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-8 rounded-2xl border-0 shadow-lg">
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

            <div className="relative bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl p-12 text-white shadow-xl">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center bg-white/10 p-6 rounded-lg">
                    <Monitor className="h-16 w-16 text-white mx-auto mb-4" />
                    <p className="text-3xl font-bold">25+</p>
                    <p className="text-blue-100">Desktop Systems</p>
                  </div>
                  <div className="text-center bg-white/10 p-6 rounded-lg">
                    <Laptop className="h-16 w-16 text-white mx-auto mb-4" />
                    <p className="text-3xl font-bold">6+</p>
                    <p className="text-blue-100">Mobile Units</p>
                  </div>
                </div>
                <div className="text-center bg-white/10 p-6 rounded-lg">
                  <PhoneCall className="h-16 w-16 text-white mx-auto mb-4" />
                  <p className="text-3xl font-bold">7+</p>
                  <p className="text-blue-100">Call Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-2xl text-blue-100">
              Ready to optimize your debt recovery process?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 border-0 backdrop-blur-sm text-white shadow-lg">
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

              <Card className="bg-white/10 border-0 backdrop-blur-sm text-white shadow-lg">
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

            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="text-xl px-10 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-xl border-0"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  9830548111 / 7044592088
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white/10 bg-transparent shadow-xl"
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
      <footer className="bg-slate-800 border-t-4 border-blue-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-blue-600 p-2 rounded-full">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold">
              <span className="text-white">3rd</span>
              <span className="text-blue-400">eye</span>
              <span className="text-white"> Debt Management Service</span>
            </span>
          </div>
          <p className="text-slate-300 mb-2">
            © 2024 3rdeye Debt Management Service. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Serving Kolkata and West Bengal with specialized debt recovery
            solutions since 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
