import React from "react";
import RegionCard from "./RegionCard";

export default function RegionGrid({ regions }) {
  return (
    <>
      <h1 className="section-title">Regions in Australia</h1>
      <div className="grid-style1 clearfix">
        {regions.map((region) => (
          <RegionCard key={region.id} {...region} />
        ))}
      </div>
    </>
  );
}
