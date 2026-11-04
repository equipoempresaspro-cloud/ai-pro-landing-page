import React, { useState } from "react";
import CommandHeader from "./components/CommandHeader";
import OpeningCommandLedger from "./components/OpeningCommandLedger";
import ComparativeBalanceLedger from "./components/ComparativeBalanceLedger";
import SevenAgentsCircuit from "./components/SevenAgentsCircuit";
import RoiAndTariffLedger from "./components/RoiAndTariffLedger";

export default function App() {
  const [selectedPlanLabel, setSelectedPlanLabel] = useState(
    "Software Completo · S/ 690 + IGV / mes"
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#EDF2FA] text-[#091536]">
      <CommandHeader activePlanLabel={selectedPlanLabel} />

      <main className="flex-1">
        <OpeningCommandLedger onSelectQuickPlan={setSelectedPlanLabel} />

        <ComparativeBalanceLedger onSelectPlan={setSelectedPlanLabel} />

        <SevenAgentsCircuit />

        <RoiAndTariffLedger
          selectedPlanLabel={selectedPlanLabel}
          onSelectPlan={setSelectedPlanLabel}
        />
      </main>
    </div>
  );
}
