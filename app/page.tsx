"use client";

import { FontStyle } from "./components/FontStyle";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ProofBar } from "./components/ProofBar";
import { BuiltForRealOperators } from "./components/BuiltForRealOperators";
import { TrustPain } from "./components/TrustPain";
import { WhatItDoes } from "./components/WhatItDoes";
import { HowItWorks } from "./components/HowItWorks";
import { DayInLife } from "./components/DayInLife";
import { AfterBooking } from "./components/AfterBooking";
import { CoreAutomations } from "./components/CoreAutomations";
import { LivePipeline } from "./components/LivePipeline";
import { Industries } from "./components/Industries";
import { WhyLoseRevenue } from "./components/WhyLoseRevenue";
import { SystemSpecs } from "./components/SystemSpecs";
import { MobileApp } from "./components/MobileApp";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { Pricing } from "./components/Pricing";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function RevenueSystemsHome() {
  return (
    <div className="font-body text-white bg-[var(--bg-primary)] min-h-screen">
      <FontStyle />
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <BuiltForRealOperators />
        <TrustPain />
        <WhatItDoes />
        <HowItWorks />
        <DayInLife />
        <AfterBooking />
        <CoreAutomations />
        <LivePipeline />
        <Industries />
        <WhyLoseRevenue />
        <SystemSpecs />
        <MobileApp />
        <WhoThisIsFor />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
