import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import countries from "../data/countries.json";
import { datamap } from "../data/data";


function MyResponsiveChoropleth() {
  return (
    <div style={{ height: "500px" }}>
      <ResponsiveChoropleth
        data={datamap}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1]}
        unknownColor="#ededed"
        valueFormat=".2s"
        projectionScale={130}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#ffffff"
        borderWidth={0.5}
        borderColor={{ theme: "background" }}
        tooltip={(data, color) => (
          <div
            style={{
              padding: 12,
              color,
              background: "#ffffff"
            }}
          >
            <span>Look, I'm custom :</span>
            <br />
            <strong>
              <span>{data.feature.properties.name}</span>
            </strong>
            <br />
            <strong>
              {data.feature.id}: {data.feature.value}
            </strong>
          </div>
        )}
      />
    </div>
  );
}

export default MyResponsiveChoropleth;
