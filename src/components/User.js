import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState([0]);
  const [count1, setCount1] = useState([1]);
  return (
    <div className="user_card">
      <h2>count : {count}</h2>
      <h2>count1 : {count1}</h2>
      <h2>Name: {name}</h2>
      <h2>This is me</h2>
    </div>
  );
};
export default User;