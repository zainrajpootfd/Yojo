import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-400 text-white p-5 text-3xl font-bold">
      MyPramas: {userid}
    </div>
  );
}

export default User;
