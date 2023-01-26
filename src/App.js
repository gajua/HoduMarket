import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Home path="/home" />
    </BrowserRouter>
  );
}

export default App;
