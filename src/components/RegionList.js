import React from "react";

export default function RegionList({ regions }) {
  return (
    <>
      <h1 className="section-title">Popular Regions</h1>
      <div id="regions">
        <ul className="regions-list">
          {regions.map((r) => (
            <li key={r.id} className="region-item">
              <a href={r.link || "#"} className="region-link">
                {r.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}