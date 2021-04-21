import React from "react";
import { getCurrentUser } from "../services/auth.service";

const Profile = () => {
  const currentUser = getCurrentUser();

  return(
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.userName}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Refresh Token:</strong> {currentUser.refreshToken}
      </p>
    </div>
  )
}
export default Profile;