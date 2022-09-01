

import "./App.css";
import Home from "./components/pages/Home/Home";
import CounterProvider from "./context/counter-context";



function App() {
  return (
    <div className="App">
      <CounterProvider>
       <Home/>
      </CounterProvider>
    </div>
  );
}

export default App;
