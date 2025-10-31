import React from "react";
import DealItem from "./DealItem";

export default function DealList({ deals }) {
  return (
    <div className="col-sm-12">
      <h2 className="section-title">Last minute deals</h2>
      <ul className="latest-news">
        {deals.map((d, i) => (
          <DealItem key={i} {...d} />
        ))}
      </ul>
      <p className="center">
        <a className="btn btn-fullcolor" href="#">
          More deals
        </a>
      </p>
    </div>
  );
}