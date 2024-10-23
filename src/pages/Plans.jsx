import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlanCard, PlanCardWrapper } from "../components/Cards/Cards";
import { ButtonRow } from "../components/Buttons/Buttons";

const Plans = ({plans, selectedPlan, setSelectedPlan}) => {
  return (
    <div className="section">
      <h1 className="heading heading--is-light text-center">Choose insurance policy</h1>
      
      <div className="card-plan-container">
        <PlanCardWrapper value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </PlanCardWrapper>
      </div>
      

      <ButtonRow
        leftTo="/details"
        rightText="Confirm"
        rightTo={selectedPlan ? "/summary" : ""}
        rightDisabled={!selectedPlan}
        step={2}
      />
      
    </div>
  );
};

export default Plans;