import React from "react";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";

export default function Profile() {
  const user = {
    userName: "이용석",
    userEmail: "dydtm3@naver.com",
    birth: "1994년 7월 17일",
    phoneNumber: "010-4124-5417",
  };
  return (
    <div className="Profile">
      <Header />
      <ProfileInfo user={user} />
    </div>
  );
}
