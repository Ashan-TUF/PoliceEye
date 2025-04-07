import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./ui/splashScreen";
import LoginScreen from "./ui/loginScreen";
import HomeScreeen from "./ui/homeScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreeen />} />
      </Routes>
    </Router>
  );
}

export default App;
