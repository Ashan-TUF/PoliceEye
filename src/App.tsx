import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./scenes/splash";
import LoginScreen from "./scenes/login";
import HomeScreen from "./scenes/home";
import CriminalDetectorScreen from "./scenes/criminalDetector";
import { ManagePrisonersScreen } from "./scenes/managePrisoners";
import { AppointmentsScreen } from "./scenes/appointments";
import { IdentifiedGangsScreen } from "./scenes/identifiedGangs";
import { RegistrationScreen } from "./scenes/registration";
import { ManageOfficersScreen } from "./scenes/manageOfficers";
import { NoticeBoardScreen } from "./scenes/noticeBoard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/criminalDetector" element={<CriminalDetectorScreen />} />
        <Route path="/managePrisoners" element={<ManagePrisonersScreen />} />
        <Route path="/appointments" element={<AppointmentsScreen />} />
        <Route path="/identifiedGangs" element={<IdentifiedGangsScreen />} />
        <Route path="/manageOfficers" element={<ManageOfficersScreen />} />
        <Route path="/noticeBoard" element={<NoticeBoardScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
