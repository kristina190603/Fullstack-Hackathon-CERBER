import React from "react";
import { useState } from "react";

const RoomChat = () => {
  const [bet , setBet] = useState()


  return (
    <div className="body">
      <div className="container">
        <h2>Auction Bet</h2>
        <div id="display"></div>
        <form id="post-form">
          <input
            type="hidden"
            name="BET"
            id="BET"
            value={bet}
            onChange={(e)=>setBet(e.target.value)}
          />
          <input type="text" name="message" id="message" width="100px" />
          <input type="submit" value="Save Bet" />
        </form>
      </div>
    </div>
  );
};

export default RoomChat;
