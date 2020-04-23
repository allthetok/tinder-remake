import React from "react";
import LikedPerson from "./LikedPerson";

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <p>There's no one new around you...</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>
    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "People you liked... here's to hoping they like you back!"
          : ""}
      </p>

      {likedUsers.map((item) => (
        <LikedPerson key={item.id} person={item} />
      ))}

      <p>{superLikedUsers.length > 0 ? "People you superliked!" : ""}</p>

      {superLikedUsers.map((item) => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
