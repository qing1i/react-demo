import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  function forward() {
    navigate(1);
  }

  return (
    <div>
      <div className="row my-4">
        <h2>React Router Demo</h2>
      </div>
      <button onClick={back}>回退</button>
      <button onClick={forward}>前进</button>
    </div>
  );
}
