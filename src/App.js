import Counter from "./components/Counter.js"
import CounterAction from "./components/CounterAction.js"
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import './index.css'
import { UseSelector, useSelector } from "react-redux";
function App() {
  const site=useSelector(state=>state.site)
  return (
    <div className={site.dark ? 'dark': 'light'}>
      <Header></Header>
     <Counter></Counter>
     <CounterAction></CounterAction>
     <Footer></Footer>
    </div>
  );
}

export default App;
