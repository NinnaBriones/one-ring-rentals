// Creates options for the stay length dropdown 
export const stayOptions = Array.from({ length: 14 }, (_, i) => ({
 
  value: String(i + 1),
  
  label: `${i + 1} Night${i + 1 > 1 ? "s" : ""}`, // adds s if more than 1 night
}));

// Creates options for the bedrooms dropdown 
export const bedroomOptions = [
 
  ...Array.from({ length: 5 }, (_, i) => ({
    
    value: String(i + 1),
    
    label: `${i + 1} Bedroom${i + 1 > 1 ? "s" : ""}`, 
  })),
  // adds 5 plus bedrooms option
  { value: "5plus", label: "5+ Bedrooms" },
];