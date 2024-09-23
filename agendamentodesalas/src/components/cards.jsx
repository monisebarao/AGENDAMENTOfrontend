"use client";

import Image from "next/image";
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <Image src={props.image} alt={props.alt} width={100} height={100} />
      <h2>{props.title}</h2>
      <button onClick={props.onClick}>Agendar</button>
    </div>
  );
}

export default Card;
