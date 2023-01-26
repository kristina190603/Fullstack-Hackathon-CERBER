import React from "react";
import $ from "jquery";
import "./Sidebar.css";
import RoomChat from "./RoomChat";
import { useNavigate } from "react-router";

const Sidebar = () => {
  return (
    <div className="body">
      <div align="center">
        <h2>Auction</h2>
        <div className="container">
          <RoomChat />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
