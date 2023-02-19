import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import countries from "../data/countries.json";
import { datamap1, datamap2, datamap5 } from "../data/data";


function MyResponsiveChoropleth({data}) {
  return (
    <div style={{ height: "500px"}}>
      <ResponsiveChoropleth
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1]}
        colors= "nivo"
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
            <span>{data.feature.properties.name}: <strong>{data.feature.value ? data.feature.value : 0}%</strong></span>
          </div>
        )}
      />
    </div>
  );
}

export default MyResponsiveChoropleth;
