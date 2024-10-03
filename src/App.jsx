import { useState } from 'react';
import './App.css';
import InputField from './components/InputFields';
import OutputField from './components/OutputFields';

function App() {
  const [output, setOutput] = useState([]);

  const containerStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-photo/virtual-trainer-guiding-male-through-workout-plan-designed-his-fitness-level_1314467-197833.jpg?size=626&ext=jpg&ga=GA1.1.2145590233.1727780633&semt=ais_hybrid')`,
    backgroundSize: 'cover', // Cover the entire screen
    backgroundRepeat: 'no-repeat', // Prevent the background from repeating
    backgroundPosition: 'center', // Center the background
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={containerStyle}
    >
      <h1 className="text-4xl w-[80vw] font-bold mb-6 text-white">AI Fitness Trainer</h1>
      <InputField setOutput={setOutput} />
      <OutputField output={output} />
    </div>
  );
}

export default App;
