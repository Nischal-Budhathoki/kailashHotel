import { Routes, Route, Navigate } from "react-router-dom";

import ClientLayout from "./Layout/ClientLayout";
import AdminLayout from "./Layout/AdminLayout";

// Client Pages
import Home from "./pages/client/Home";
import Login from "./pages/client/Login";
import SignUp from "./pages/client/SignUp";
import Profile from "./pages/client/Profile";
import Contact from "./pages/client/Contact";
import Appointment from "./pages/client/Appointment";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignUp from "./pages/admin/AdminSignup";
import Dashboard from "./pages/admin/DashBoard";

// Future Pages
// import Users from "./pages/admin/Users";
// import Rooms from "./pages/admin/Rooms";
// import Bookings from "./pages/admin/Bookings";
// import Payments from "./pages/admin/Payments";

const App = () => {
  return (
    <Routes>

      {/* client - dashboard */}

      <Route element={<ClientLayout />}>
        <Route index element={<Home />} />

        <Route path="rooms" element={<Appointment />} />

        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />

        <Route path="signup" element={<SignUp />} />

        <Route path="client-profile" element={<Profile />} />
      </Route>

      {/* admin - dashboard */}

      <Route path="admin">

        {/* Redirect /admin → /admin/dashboard */}
        <Route
          index
          element={<Navigate to="dashboard" replace />}
        />

        {/* Authentication */}
        <Route path="login" element={<AdminLogin />} />

        <Route path="signup" element={<AdminSignUp />} />

        {/* Dashboard Layout */}
        <Route element={<AdminLayout />}>

          <Route path="dashboard" element={<Dashboard />} />

          {/* Future Routes */}

          {/* <Route path="users" element={<Users />} /> */}

          {/* <Route path="rooms" element={<Rooms />} /> */}

          {/* <Route path="bookings" element={<Bookings />} /> */}

          {/* <Route path="payments" element={<Payments />} /> */}

        </Route>

      </Route>

    </Routes>
  );
};

export default App;