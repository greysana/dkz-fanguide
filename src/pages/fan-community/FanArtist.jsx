import React from "react";
import { TwitterVideoEmbed } from "react-twitter-embed";

const FanArtist = () => {
  return (
    <div>
      {" "}
      <TwitterVideoEmbed
        id={"1555599136396677120"}
        options={{
          width: "100%",
          height: "100%",
        }}
        placeholder={""}

        // placeholder={"loading"}
      />
    </div>
  );
};

export default FanArtist;
