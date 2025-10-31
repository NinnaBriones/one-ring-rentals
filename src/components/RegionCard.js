import React from "react";

export default function RegionCard({ name, location, image, link }) {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href={link || "#"}>
          <h3>{name}</h3>
          <span className="location">{location}</span>
        </a>
        <img
          src={image || "https://via.placeholder.com/760x670.png?text=Region"}
          alt={name}
        />
      </div>
    </div>
  );
}
