"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  Navigation,
  Eye,
  Radar,
  Thermometer,
  Shield,
  Cpu,
  Radio,
  Layers,
  Target,
  MapPin,
  Zap,
  HelpCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Crosshair,
  Scan,
  Satellite,
} from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

/* ─── Drone Services Data ─── */
const DRONE_SERVICES = [
  {
    id: "inspection",
    icon: Eye,
    title: "Industrial Inspection & Defect Detection",
    tagline: "AI-powered visual & thermal inspection of critical infrastructure",
    description: "Deploy autonomous drones for close-range inspection of wind turbines, solar panels, power lines, bridges, and oil & gas infrastructure. Our edge AI models detect cracks, corrosion, hot spots, and structural anomalies in real-time — eliminating hazardous manual inspections.",
    image: "/images/drone/inspection.jpg",
    features: [
      "Automated crack & corrosion detection with 98.7% accuracy",
      "Thermal anomaly identification on electrical infrastructure",
      "AI-generated defect classification & severity reports",
      "Regulatory compliance documentation (FAA, EASA, CAAB)",
    ],
  },
  {
    id: "lidar",
    icon: Scan,
    title: "LiDAR Mapping & 3D Photogrammetry",
    tagline: "Centimeter-accurate 3D terrain models from aerial LiDAR",
    description: "Generate ultra-precise 3D point clouds, digital elevation models (DEM), and orthomosaic maps using survey-grade LiDAR and photogrammetry payloads. Ideal for construction site monitoring, mining volumetrics, urban planning, and topographical surveys.",
    image: "/images/drone/lidar.jpg",
    features: [
      "Sub-centimeter accuracy 3D point cloud generation",
      "Automated volumetric calculations for mining & earthwork",
      "Digital Twin terrain modeling & change detection",
      "GIS-ready orthomosaic & contour map export",
    ],
  },
  {
    id: "agriculture",
    icon: Target,
    title: "Precision Agriculture & Crop Intelligence",
    tagline: "Multispectral analysis & variable-rate spraying at scale",
    description: "Monitor crop health, detect pest infestations, and optimize irrigation using NDVI multispectral imaging. Our automated spraying drones deliver precise variable-rate application of fertilizers and pesticides, reducing chemical usage by up to 40%.",
    image: "/images/drone/agriculture.jpg",
    features: [
      "NDVI & multispectral crop health analytics",
      "Automated variable-rate precision spraying",
      "Plant counting, gap analysis & yield prediction",
      "Integration with farm management platforms",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Autonomous Surveillance & Perimeter Security",
    tagline: "24/7 autonomous patrol with AI threat detection",
    description: "Deploy Drone-in-a-Box automated docking stations for continuous, unmanned perimeter security patrols. Edge AI detects intruders, vehicles, and anomalies in real-time, triggering instant alerts to security operations centers.",
    image: "/images/drone/security.jpg",
    features: [
      "Drone-in-a-Box automated launch, patrol & recharge",
      "Real-time intruder & vehicle detection with AI",
      "Night vision & thermal perimeter scanning",
      "Integration with existing CCTV & alarm systems",
    ],
  },
  {
    id: "fleet",
    icon: Satellite,
    title: "Fleet Management & Cloud Telemetry",
    tagline: "Enterprise drone fleet orchestration dashboard",
    description: "Manage, monitor, and orchestrate entire drone fleets from a single cloud dashboard. Track real-time GPS positions, battery health, mission status, and video feeds. Schedule autonomous missions and analyze historical flight data.",
    image: "/images/drone/command-center.jpg",
    features: [
      "Real-time fleet GPS tracking & mission monitoring",
      "Encrypted 5G/LTE live video streaming",
      "Automated mission scheduling & geofencing",
      "Historical flight analytics & maintenance alerts",
    ],
  },
];

/* ─── Stats Data ─── */
const STATS = [
  { value: 98, suffix: ".7%", label: "AI Detection Accuracy" },
  { value: 10, suffix: "ms", label: "Edge Inference Latency" },
  { value: 60, suffix: "%", label: "Cost Reduction vs Manual" },
  { value: 24, suffix: "/7", label: "Autonomous Operation" },
];

/* ─── Tech Stack ─── */
const TECH_STACK = [
  "PX4 Autopilot", "ROS 2", "NVIDIA Jetson", "MAVLink", "OpenCV",
  "PyTorch", "WebRTC", "QGIS", "DJI SDK", "Rust", "ArduPilot",
  "TensorRT", "ONNX Runtime", "InfluxDB", "Grafana",
];

/* ─── FAQs ─── */
const FAQS = [
  {
    q: "Can your drone AI software run offline without cloud connectivity?",
    a: "Yes, our computer vision models execute directly on-device on NVIDIA Jetson edge computers mounted on the UAV for sub-10ms real-time obstacle avoidance and defect detection.",
  },
  {
    q: "Which autopilots and hardware platforms do you support?",
    a: "We engineer for PX4, ArduPilot, custom industrial multirotor/VTOL airframes, and enterprise DJI platforms via Mobile & Onboard SDKs.",
  },
  {
    q: "How do you handle regulatory compliance for BVLOS operations?",
    a: "We work with CAA authorities to obtain specific BVLOS waivers and ensure all operations comply with FAA Part 107, EASA STS, and local civil aviation regulations including CAAB in Bangladesh.",
  },
  {
    q: "What is the maximum flight range and endurance?",
    a: "Depending on the airframe, our enterprise configurations support 45–90 minute endurance with operational ranges up to 15 km BVLOS using 4G/5G cellular command links.",
  },
  {
    q: "Do you provide drone hardware or only software?",
    a: "We are primarily a drone software and AI integration company. We partner with leading hardware manufacturers (DJI Enterprise, Freefly, custom builds) and integrate our autonomous software stack onto the client's preferred platform.",
  },
];

export default function DroneServicePage() {
  const { openConsultationModal, openAIModal } = useApp();
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="pt-36 sm:pt-40 pb-24 bg-[#040711] min-h-screen text-white overflow-hidden">

      {/* ════════════ HERO SECTION ════════════ */}
      <section className="relative w-full mb-20">
        {/* Background Image */}
        <div className="absolute inset-0 h-[600px] sm:h-[700px]">
          <Image
            src="/images/drone/hero.jpg"
            alt="Autonomous drone performing industrial inspection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040711]/70 via-[#040711]/50 to-[#040711]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040711]/80 via-transparent to-[#040711]/40" />
        </div>

        <div className="relative z-10 w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Back Link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="pt-8 sm:pt-16 pb-32 sm:pb-44 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="blue">Autonomous Robotics</Badge>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Enterprise Ready
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.05] mb-6">
              Autonomous{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Drone Technology
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-4 max-w-2xl">
              AI flight autonomy, LiDAR mapping, thermal inspection & edge aerial robotics. We engineer autonomous UAV platforms that transform how enterprises inspect, survey, and secure their assets.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
              From edge AI on NVIDIA Jetson for real-time visual inspection to BVLOS waypoint navigation, automated docking stations, and cloud photogrammetry pipelines — we enable enterprises to deploy smart drones at industrial scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => openConsultationModal("Autonomous Drone Technology")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book Discovery Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openAIModal}
                icon={<Brain className="w-4 h-4 text-brand-cyan" />}
              >
                Ask AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* ════════════ ANIMATED STATS ════════════ */}
        <section className="mb-20 -mt-24 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl p-6 sm:p-8 text-center transition-all duration-500 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ VIDEO SHOWCASE ════════════ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
              See Our Drones in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Watch how our autonomous drone technology transforms industrial operations with AI-powered inspection, mapping, and surveillance.
            </p>
          </div>

          <div
            className="relative group rounded-3xl overflow-hidden border border-slate-700/50 cursor-pointer aspect-video max-w-5xl mx-auto"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            {!isVideoPlaying ? (
              <>
                <Image
                  src="/images/drone/hero.jpg"
                  alt="Drone technology showcase video thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-bold text-lg sm:text-xl">Autonomous Drone Inspection Demo</div>
                  <div className="text-slate-300 text-sm mt-1">5:30 min • Full mission lifecycle walkthrough</div>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wZBtHXGGirw?autoplay=1&rel=0"
                title="Drone Technology Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </section>

        {/* ════════════ SERVICE-WISE BREAKDOWNS ════════════ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
              Our Drone{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Service Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Industry-specific drone solutions engineered with edge AI, autonomous navigation, and enterprise-grade reliability.
            </p>
          </div>

          {/* Service Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {DRONE_SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeService === i
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10"
                      : "bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{svc.title.split(" & ")[0]}</span>
                  <span className="sm:hidden">{svc.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Detail */}
          {DRONE_SERVICES.map((svc, i) => {
            if (i !== activeService) return null;
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in"
              >
                {/* Image */}
                <div className="relative group rounded-3xl overflow-hidden border border-slate-700/50 aspect-[16/10]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-cyan-300">{svc.tagline}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      {svc.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{svc.description}</p>
                  </div>

                  <div className="space-y-3">
                    {svc.features.map((feat, fi) => (
                      <div
                        key={fi}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/20 transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-200 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => openConsultationModal(svc.title)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss {svc.title.split(" & ")[0]}
                  </Button>
                </div>
              </div>
            );
          })}
        </section>

        {/* ════════════ CAPABILITIES & DELIVERABLES ════════════ */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/30 p-8 space-y-4">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" /> Core Platform Capabilities
              </h3>
              <div className="space-y-3 pt-2">
                {[
                  "Autonomous Waypoint Navigation & Beyond Visual Line of Sight (BVLOS)",
                  "Edge AI Aerial Computer Vision & Real-Time Defect Detection",
                  "LiDAR 3D Point Cloud Processing & Orthomosaic Photogrammetry",
                  "Thermal & Multispectral Sensor Pipeline Integration",
                  "Encrypted 5G/LTE Real-Time Telemetry & Video Streaming",
                  "Drone-in-a-Box Automated Docking Station Integration",
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/30 p-8 space-y-4">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Project Deliverables
              </h3>
              <div className="space-y-3 pt-2">
                {[
                  "Onboard Edge AI Inference Package (NVIDIA Jetson / PX4 / ROS 2)",
                  "Cloud Geospatial Drone Fleet Management Dashboard",
                  "Automated 3D Photogrammetry & Orthomosaic Engine",
                  "Enterprise Hardware Integration & MAVLink Telemetry Bridge",
                  "Complete API documentation & SDK integration packages",
                  "Staff training, SOP manuals & 24/7 SLA support plan",
                ].map((del, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ INDUSTRY USE CASES GALLERY ════════════ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
              Industry{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Energy & Utilities",
                desc: "Wind turbine blade inspection, solar panel hotspot detection, power line corridor surveys",
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "hover:border-yellow-500/40",
                iconColor: "text-yellow-400",
              },
              {
                icon: MapPin,
                title: "Construction & Mining",
                desc: "Site progress monitoring, volumetric stockpile measurement, terrain 3D mapping",
                color: "from-emerald-500/20 to-green-500/20",
                borderColor: "hover:border-emerald-500/40",
                iconColor: "text-emerald-400",
              },
              {
                icon: Crosshair,
                title: "Oil & Gas",
                desc: "Pipeline leak detection, flare stack inspection, offshore platform monitoring",
                color: "from-red-500/20 to-rose-500/20",
                borderColor: "hover:border-red-500/40",
                iconColor: "text-red-400",
              },
              {
                icon: Target,
                title: "Agriculture",
                desc: "Crop health NDVI mapping, precision spraying, irrigation monitoring, yield prediction",
                color: "from-green-500/20 to-lime-500/20",
                borderColor: "hover:border-green-500/40",
                iconColor: "text-green-400",
              },
              {
                icon: Shield,
                title: "Security & Defense",
                desc: "Perimeter surveillance, border patrol, event security, search & rescue operations",
                color: "from-blue-500/20 to-indigo-500/20",
                borderColor: "hover:border-blue-500/40",
                iconColor: "text-blue-400",
              },
              {
                icon: Radar,
                title: "Telecom & Infrastructure",
                desc: "Cell tower inspection, roof surveys, railway corridor mapping, bridge assessment",
                color: "from-purple-500/20 to-violet-500/20",
                borderColor: "hover:border-purple-500/40",
                iconColor: "text-purple-400",
              },
            ].map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={i}
                  className={`group relative rounded-2xl border border-slate-700/50 bg-gradient-to-br ${uc.color} p-6 transition-all duration-500 ${uc.borderColor} hover:shadow-lg cursor-default`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${uc.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-bold text-white font-heading">{uc.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════ TECHNOLOGY STACK ════════════ */}
        <section className="mb-20">
          <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/30 p-8">
            <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-400" /> Primary Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-600/50 text-sm font-mono font-semibold text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ IMAGE GALLERY ════════════ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
              Drone Operations{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/drone/hero.jpg", label: "Industrial Facility Inspection" },
              { src: "/images/drone/lidar.jpg", label: "LiDAR 3D Terrain Mapping" },
              { src: "/images/drone/command-center.jpg", label: "Fleet Command Center" },
              { src: "/images/drone/agriculture.jpg", label: "Precision Agriculture Analysis" },
              { src: "/images/drone/inspection.jpg", label: "Wind Turbine Inspection" },
              { src: "/images/drone/security.jpg", label: "Automated Docking Station" },
            ].map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-slate-700/50 aspect-[16/10] cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm font-bold text-white">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ FAQs ════════════ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? "border-cyan-500/40 bg-slate-800/40"
                    : "border-slate-700/50 bg-slate-900/30 hover:border-slate-600"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ CTA SECTION ════════════ */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-700/50 p-8 sm:p-14">
          <div className="absolute inset-0">
            <Image
              src="/images/drone/hero.jpg"
              alt="CTA background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040711]/95 via-[#040711]/85 to-[#040711]/70" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
              Ready to Deploy{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Autonomous Drones?
              </span>
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Let&apos;s discuss your inspection, mapping, or surveillance requirements. Our team will design a custom drone solution tailored to your industry and operational needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => openConsultationModal("Autonomous Drone Technology")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Drone Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openAIModal}
                icon={<Brain className="w-4 h-4 text-brand-cyan" />}
              >
                Ask AI About Drones
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
