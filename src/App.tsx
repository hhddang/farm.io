import "./App.css";
import { SidebarLayout } from "./layouts";
import Background from "./assets/background.svg";

function App() {
  return (
    <SidebarLayout>
      <img src={Background} alt="background" className="background" />
    </SidebarLayout>
  );
}

export default App;
