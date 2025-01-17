import React from "react";

export default function ProfileInfo({ user }) {
  return (
    <div>
      <p>{user.userName}</p>
      <p>{user.userEmail}</p>
      <p>{user.birth}</p>
      <p>{user.phoneNumber}</p>
    </div>
  );
}
