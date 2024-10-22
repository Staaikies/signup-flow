import { useState, useEffect } from 'react';
import './App.css';
import { Button, ButtonRow } from './components/Buttons/Buttons';
import { RadioCard, RadioCardWrapper } from "./components/Cards/Cards";

function App() {
  const [plan, setPlan] = useState("");

  useEffect(() => console.log(plan), [plan]);

  return (
    <>
      <div>
        <Button style="primary">Primary</Button>
        <Button style="secondary">Secondary</Button>
        <ButtonRow>
          <Button style="secondary">Secondary</Button>
          <Button style="primary">Primary</Button>
        </ButtonRow>

        <RadioCardWrapper value={plan} onChange={(e) => setPlan(e.target.value)}>
          <RadioCard
            title="Basic"
            description="For this those that want to know they're covered but don't want to dive too deep into the bells and whistles. You get access to our award winning support team 24/7 as well as our learning resources for how best to be insured."
            features={[
              {description: "Basic coverage", positive: true},
              {description: "24/7 award winning support.", positive: true},
              {description: "One scheduled call with an insurance expert.", positive: false},
              {description: "Access to premium dashboard.", positive: false},
              {description: "Unlimited access to personal insurance expert.", positive: false}
            ]}
            value="basic"
            id="basic"
            name="plantype"
          />
          <RadioCard
            title="Standard"
            description="For those who want to rest easy at night knowing that everything is taken care of. You get access to our award winning support team 24/7, your own personalised dashboard, as well as one scheduled web call with an insurance expert to get advice on how best to manage your coverage."
            features={[
              {description: "Standard coverage", positive: true},
              {description: "24/7 award winning support.", positive: true},
              {description: "One scheduled call with an insurance expert.", positive: true},
              {description: "Access to premium dashboard.", positive: false},
              {description: "Unlimited access to personal insurance expert.", positive: false}
            ]}
            value="standard"
            id="standard"
            name="plantype"
          />
          <RadioCard
            title="Premium"
            description="For those that want everything we have to offer. Great choice! You are considered a VIP amongst our business and will get full access to everything we have to offer. You get full access to our team of insurance experts with the single goal of insuring everything you own. You get a customised dashboard with premium features and benefits. As well as a direct line to our team of insurance experts."
            features={[
              {description: "Premium coverage", positive: true},
              {description: "24/7 award winning support.", positive: true},
              {description: "One scheduled call with an insurance expert.", positive: true},
              {description: "Access to premium dashboard.", positive: true},
              {description: "Unlimited access to personal insurance expert.", positive: true}
            ]}
            value="premium"
            id="premium"
            name="plantype"
          />
        </RadioCardWrapper>
        
      </div>
    </>
  )
}

export default App;
