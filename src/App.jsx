import React, { useState } from "react";
import CommandHeader from "./components/CommandHeader";
import HeroSection from "./components/HeroSection";
import OpeningCommandLedger from "./components/OpeningCommandLedger";
import SevenAgentsCircuit from "./components/SevenAgentsCircuit";
import RoiAndTariffLedger from "./components/RoiAndTariffLedger";

export default function App() {
  const [selectedPlanLabel, setSelectedPlanLabel] = useState(
    "Software Completo · S/ 690 + IGV / mes"
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1E293B]">
      <CommandHeader />

      <main className="flex-1">
        <HeroSection />

        <OpeningCommandLedger />

        <SevenAgentsCircuit />

        <RoiAndTariffLedger
          selectedPlanLabel={selectedPlanLabel}
          onSelectPlan={setSelectedPlanLabel}
        />
      </main>
    </div>
  );
}
