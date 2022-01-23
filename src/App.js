import { useState } from 'react';
import Button from './components/button';
import './App.css';

function App() {
  const [status1, setstatus1] = useState('ON')
  const [status2, setstatus2] = useState('ON')
  return (
    <div className="App">
      <div className='lightContainer'>
        <Button isOn={status1} toggle={() => setstatus1(status1 === 'ON' ? 'OFF' : 'ON')} />
        <Button isOn={status2} toggle={() => setstatus2(status2 === 'ON' ? 'OFF' : 'ON')} />
      </div>
    </div>
  );
}

export default App;
