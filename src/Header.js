import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <div className="mainblock">
        <ul className="menu">
          {props.datamenu
            .sort((a, b) => a.order - b.order)
            .map((item, ind) =>
              ind == 0 ? (
                <li>
                  <Link to="/">{item.title}</Link>
                </li>
              ) : (
                <li>
                  <Link to={item.id}>{item.title}</Link>
                </li>
              )
            )}
        </ul>
      </div>
    </>
  );
}
