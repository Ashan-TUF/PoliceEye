import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./ui/splashScreen";
import LoginScreen from "./ui/loginScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
