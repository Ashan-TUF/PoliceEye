import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./scenes/splash";
import LoginScreen from "./scenes/login";
import HomeScreen from "./scenes/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
