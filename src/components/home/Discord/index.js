import React from "react";

import Discord1 from "../../../assets/images/discord-1.svg";
import Discord2 from "../../../assets/images/discord-2.svg";
import Discord3 from "../../../assets/images/discord-3.svg";
import Discord4 from "../../../assets/images/discord-4.svg";

function Discord() {
  return (
    <div className="discord">
      <div>
        <h1>Join Our Discord!</h1>
        <p>
          Be the first to hear about 1Block news, exclusive announcements and
          surprises when you join our community
        </p>
      </div>
      <div className="discord-characters">
        <div>
          <a href="https://discordlink/......" target="_blank">
            <img src={Discord1} />
          </a>
          <a href="https://discordlink/......" target="_blank">
            <img src={Discord2} />
          </a>
        </div>
        <div style={{ marginTop: "50px" }}>
          <a href="https://discordlink/......" target="_blank">
            <img src={Discord3} />
          </a>
          <a href="https://discordlink/......" target="_blank">
            <img src={Discord4} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Discord;
