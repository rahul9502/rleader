import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MyGroup from "./pages/MyGroup";
import CreateGroup from "./pages/CreateGroup/CreateGroup";
import AddMember from "./pages/AddMember/AddMember";
import GroupMembers from "./pages/GroupMembers/GroupMembers";
import WarRoom from "./pages/WarRoom/WarRoom";
import NewsView from "./pages/NewsView/NewsView";
import Groups from "./pages/Groups/Groups";
import ActiveMembers from "./pages/ActiveMembers/ActiveMembers";
import Hotspot from "./pages/Hotspot/Hotspot";
import ReportProblem from "./pages/ReportProblem/ReportProblem";
import Login from "./pages/Authentication/Login";
import OtpVerification from "./pages/Authentication/OtpVerification";
import { useEffect } from "react";
import { navPaths } from "./constants/paths";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location);

  useEffect(() => {
    if (location.pathname === "/") navigate(navPaths.LOGIN);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/my-group" element={<MyGroup />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/group-members" element={<GroupMembers />} />
        <Route path="/war-room" element={<WarRoom />} />
        <Route path="/news-more" element={<NewsView />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/active-members" element={<ActiveMembers />} />
        <Route path="/hotspot" element={<Hotspot />} />
        <Route path="/report-problem" element={<ReportProblem />} />

        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </div>
  );
}

export default App;
