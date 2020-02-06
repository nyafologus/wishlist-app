import React from "react";

export default function List({ wishes }) {
  return (
    <div>
      {wishes.map(wish => (
        <li key={wish.id}>{wish.content}</li>
      ))}
    </div>
  );
}
