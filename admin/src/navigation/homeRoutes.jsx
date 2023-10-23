import MyNavbar from "../components/MyNavbar/MyNavbar";
import SeeAppointmentPage from "../pages/appointmentspage/seeAppointmentPage";
import { Route, Routes, Navigate} from "react-router-dom";
import HomePage from "../pages/homepage/homePage";

import { useAuth,} from "../context/AuthContext";
import ConfirmPage from "../pages/confirmpage/confirmpage";
function HomeRoutes() {
  const { authenticated } = useAuth(); 


  return authenticated ? (
    <>
      <MyNavbar />
      <main className="p-3 bg-secondary">
        <Routes>
          <Route index element={<HomePage/> } />
          <Route path='/confirm' element={<ConfirmPage/>} />
          <Route path='/appointments' element={<SeeAppointmentPage />} />
        </Routes>
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default HomeRoutes;