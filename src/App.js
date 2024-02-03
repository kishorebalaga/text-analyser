import "./App.css";
import { NavBAr } from "./features/navbar/NavBar";
import Display from "./features/display/Display";

function App() {
  return (
    <div className=" bg-[#f0f2f5] h-screen">
      <NavBAr />
      <Display />
    </div>
  );
}
export default App;
