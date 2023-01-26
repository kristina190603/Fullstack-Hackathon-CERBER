import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import Backs from "../../components/storage/backs.jpg";
import React from "react";
import { ChatEngine } from "react-chat-engine";


const Chat = () => {
  return (
    <>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <ChatEngine
        projectID="4031ffd2-1596-4f7f-9fb3-523f1c8b7189"
        userName="Dragoverlord"
        userSecret="192837465"
      />
      <Footer />
    </>
  );
};

export default Chat;
