import React from "react";
import { SummaryCard } from "../components/Cards/Cards";
import { ButtonRow } from "../components/Buttons/Buttons";

const Summary = ({userDetails, plans, selectedPlan}) => {
  return (
    <div className="section">
      <SummaryCard
        userDetails={userDetails}
        userPlan={plans.find(plan => plan.id === selectedPlan)}
      />
      <ButtonRow
        leftTo="/plans"
        rightText="Finish"
        rightTo={(userDetails && selectedPlan) ? "/done" : ""}
        step={3}
      />
      
    </div>
  );
};

export default Summary;