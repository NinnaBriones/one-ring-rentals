import React from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties }) {
  return (
    <>
      <h1 className="section-title">Featured Properties</h1>
      <div className="grid-style1 clearfix">
        {properties.length === 0 ? (
          <p>No properties match your search.</p>
        ) : (
          properties.map((p) => <PropertyCard key={p.id} {...p} />)
        )}
      </div>
    </>
  );
}