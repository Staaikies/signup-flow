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
            description="You get the basic cover that you need. You get access to 24/7 online support and can edit your settings on the go with the app version."
            value="basic"
            id="basic"
            name="plantype"
          />
          <RadioCard
            title="Standard"
            description="You get the basic cover that you need. You get access to 24/7 online support and can edit your settings on the go with the app version."
            value="standard"
            id="standard"
            name="plantype"
          />
          <RadioCard
            title="Premium"
            description="You get the basic cover that you need. You get access to 24/7 online support and can edit your settings on the go with the app version."
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
