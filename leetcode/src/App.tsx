import { useState } from 'react';
import './App.css';
import AddTwoNumbers from './components/add-two-numbers';





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <AddTwoNumbers />
    </>
  );
}

export default App;
