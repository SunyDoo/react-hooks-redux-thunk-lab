// write your CatList component here
import React from "react";

export default function CatList({ catPics }) {
  return (
    <>
      {catPics.map((cat) => (
        <img key={cat.id} src={cat.url} alt="cat" />
      ))}
    </>
  );
}
