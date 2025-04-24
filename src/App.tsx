import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./scenes/splash";
import LoginScreen from "./scenes/login";
import HomeScreen from "./scenes/home";
import CriminalDetectorScreen from "./scenes/criminalDetector";
import { ManagePrisonersScreen } from "./scenes/managePrisoners";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/criminalDetector" element={<CriminalDetectorScreen />} />
        <Route path="/managePrisoners" element={<ManagePrisonersScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
