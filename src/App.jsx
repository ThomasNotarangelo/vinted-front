import "./App.css";

// Import de mes packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import de mes Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Import de mes composants
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* Je définie que ce qui sera après offer sera l'id */}
        <Route path="/offer/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
