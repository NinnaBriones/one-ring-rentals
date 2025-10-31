import React, { useEffect } from 'react';
import RegionGrid from './RegionGrid'; 
import { regionsPageData } from '../data/homepageData'; 
export default function RegionsPage() {
  
  useEffect(() => {
    document.title = "One Ring Rentals - Regions";
  }, []); 

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <RegionGrid regions={regionsPageData} />
          </div>
        </div>
      </div>
    </div>
  );
}