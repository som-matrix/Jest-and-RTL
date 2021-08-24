import {useState} from "react"
import './App.css';
function App() {
  const [count,setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = ()=>{
    if(count === 0){
      return
    }
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Counter App 😃</h1>
      <div className="flex">
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
      </div>
      <div className="App">
       <h2 title="Display">{count}</h2>
      </div>
    </div>
  );
}
export default App;
