import React from "react";

export default function WishList({ wishes }) {
  return (
    <div>
      {wishes.map(wish => (
        <li key={wish.id}>{wish.content}</li>
      ))}
    </div>
  );
}
