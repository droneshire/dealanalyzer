import React, { FC } from "react";

import "./Styles.css";
import { Property } from "../types/property";

interface PropertyListProps {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}

const PropertyList: FC<PropertyListProps> = (props: PropertyListProps) => {
  return (
    <div className="PropertyList">
      {props.properties.map((property: Property) => (
        <li key={property.key}>{property.address}</li>
      ))}
    </div>
  );
};

export default PropertyList;
