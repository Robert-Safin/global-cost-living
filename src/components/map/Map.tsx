"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

import { DataObjectType } from "@/lib/DataObjectType";
import { FC } from "react";

interface Props {
  locations: DataObjectType[];
}

const Map: FC<Props> = (props) => {
  const filteredEntries = props.locations.filter(
    (entry) => entry.averageMonthlyNetSalaryAfterTaxUSD !== 0
  );

  const lowestValue = Math.min(
    ...filteredEntries.map((entry) => entry.averageMonthlyNetSalaryAfterTaxUSD)
  );
  const highestValue = Math.max(
    ...filteredEntries.map((entry) => entry.averageMonthlyNetSalaryAfterTaxUSD)
  );

  const range = highestValue - lowestValue;
  let color:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";

  const getColor = (value: number) => {
    if (value < lowestValue + range / 8) {
      color = "red";
    } else if (value < lowestValue + (range / 8) * 2) {
      color = "orange";
    } else if (value < lowestValue + (range / 8) * 3) {
      color = "yellow";
    } else if (value < lowestValue + (range / 8) * 4) {
      color = "green";
    } else if (value < lowestValue + (range / 8) * 5) {
      color = "blue";
    } else if (value < lowestValue + (range / 8) * 6) {
      color = "indigo";
    } else if (value < lowestValue + (range / 8) * 7) {
      color = "purple";
    } else {
      color = "pink";
    }
    return color;
  };

  return (
    <div className="bg-white">
      <ComposableMap>
        <ZoomableGroup center={[0, 0]} zoom={1}>
          <Geographies
            geography="/features.json"
            fill="#ECEFF1"
            stroke="#607D8B"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

          {props.locations.map((location) => (
            <Marker

              key={location.id}
              coordinates={[location.longitude, location.latitude]}
            >
              <circle
                r={0.4}
                fill={getColor(location.averageMonthlyNetSalaryAfterTaxUSD)}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Map;
