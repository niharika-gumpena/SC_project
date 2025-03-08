import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Trophy,
  Target,
  Users,
  Flame,
  Coins,
  UserCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    // Clear any stored authentication data (if needed)
    localStorage.removeItem("userToken"); // Example if using JWT tokens

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="nav flex-column">
          <button className="sidebar-link">
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button className="sidebar-link">
            <Target size={20} />
            Goals
          </button>
          <button className="sidebar-link">
            <Trophy size={20} />
            Rewards
          </button>
          <button className="sidebar-link">
            <Users size={20} />
            Women for Women
          </button>
          {/* Logout Button */}
          <button className="sidebar-link mt-auto" onClick={handleLogout}>
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="navbar-brand">
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=50&h=50&fit=crop"
            alt="Logo"
            className="me-2"
            style={{ width: "40px", height: "40px", borderRadius: "8px" }}
          />
          <span>Dashboard</span>
        </div>

        <div className="user-stats">
          <div className="stat-item">
            <Flame size={20} color="#e74c3c" />
            <span>15 Days</span>
          </div>
          <div className="stat-item">
            <Coins size={20} color="#f1c40f" />
            <span>2,500</span>
          </div>
          <div className="profile-icon" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
            <UserCircle size={24} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container-fluid">
          <h2 className="mb-4">Welcome back, Sarah!</h2>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
