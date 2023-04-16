import React from "react";

import "./Styles.css";
import { Property } from "./Property";

interface PropertyListProps {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}

const PropertyList = (props: PropertyListProps) => {
  return (
    <div className="PropertyList">
      {props.properties.map((property: Property) => (
        <li>{property.address}</li>
      ))}
    </div>
  );
};

export default PropertyList;
