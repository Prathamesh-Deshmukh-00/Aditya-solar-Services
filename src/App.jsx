
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


// Import  pages
import {
 LandingPage
} from "./Pages/LandingPage.jsx";





// Import Components 
import  {AdityaSolarServices , SolarSquarePromo, Footer} from "./Components/index.js";

// import { ProtectedRoute, ProtectedRouteForDealer } from "./ProtectedRoute/ProtectedRoute.jsx";

function App() {
  // const isAuthenticated = localStorage.getItem("accessToken");
  // const token = localStorage.getItem("Name");



  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
           <Navigate to="/LandingPage" />
          }
        />

        {/* Public routes */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} /> */}

        {/* Protected Routes */}
        <Route
          path="/LandingPage"
          element={
              <LandingPage /> 
          }
        />

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reset-password"
          element={
              <ResetPassword />
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/verify-phone"
          element={
            <ProtectedRoute>
              <PhoneNumberVerification />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/TicketDetails"
          element={
            <ProtectedRoute>
              <TicketDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Ticket"
          element={
            <ProtectedRoute>
              <Ticket />
            </ProtectedRoute>
          }
        />

        <Route
          path="/DeviceManagementcomp"
          element={
            <ProtectedRoute>
              <DeviceManagementcomp />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Alert"
          element={
            <ProtectedRoute>
              <Alert />
            </ProtectedRoute>
          }
        />

        <Route
          path="/AlertForDealer"
          element={
            <ProtectedRouteForDealer>
              <AlertForDealer />
            </ProtectedRouteForDealer>
          }
        />

        <Route
          path="/ManageCustomer"
          element={
            <ProtectedRoute>
              <ManageCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ManageDealer"
          element={
            <ProtectedRoute>
              <ManageDealer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/TrackDevice"
          element={
            <ProtectedRoute>
              <TrackDevicepage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/DealerDashboard"
          element={
            <ProtectedRouteForDealer>
              <DealerDashboard />
            </ProtectedRouteForDealer>
          }
        />
        <Route
          path="/DeviceManagementcompForDealer"
          element={
            <ProtectedRouteForDealer>
              <DeviceManagementcompForDealer />
            </ProtectedRouteForDealer>
          }
        />
        <Route
          path="/ManageCustomerForDealer"
          element={
            <ProtectedRouteForDealer>
              <ManageCustomerForDealer />
            </ProtectedRouteForDealer>
          }
        /> */}

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

