import React from "react";
import Styled from "styled-components";

const wood = ["moccasin", "navajoWhite", "oldlace", "peachpuff"];

const Tile = Styled.div`
background-color: ${wood[Math.floor(Math.random() * wood.length)]};
position: absolute;
top: ${Math.floor(Math.random() * 150)}px;
left: ${Math.floor(Math.random() * 150)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  font-size: 30px;
  transform: rotate(${Math.floor(Math.random() * 360)}deg);
`;

export default function SingleTileLetter({ letter }) {
  return <Tile>{letter}</Tile>;
}
