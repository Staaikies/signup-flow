import { useState } from 'react';
import './App.css';
import { Button, ButtonRow } from './components/Buttons/Buttons';
import { RadioCard } from "./components/Cards/Cards";

function App() {
  return (
    <>
      <div>
        <Button style="primary">Primary</Button>
        <Button style="secondary">Secondary</Button>
        <ButtonRow>
          <Button style="secondary">Secondary</Button>
          <Button style="primary">Primary</Button>
        </ButtonRow>

        <RadioCard />
      </div>
    </>
  )
}

export default App;
