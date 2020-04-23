import React from "react";

const Like = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, "ADD_TO_LIKED_USERS")}
  >
    <img src="images/misc/like.png" alt="Dislike User" />
  </button>
);

export default Like;
