import { VictoryChart, VictoryArea, VictoryTheme } from "victory";
import { IoIosSquare } from "react-icons/io";
import { Col, FlexboxGrid } from "rsuite";

function AkademikPersonel() {
  return (
    <div className="text-black">
      <div className="flex flex-col justify-flex-start items-start w-full text-left">
        <h2 className="text-gray-900 text-2xl capitalize mb-5 text-center">
          Area Chart
        </h2>{" "}
      </div>

      <div>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15 }}>
          <VictoryArea
            style={{
              data: { fill: "rgb(59, 130, 246)" },
            }}
            data={[
              { x: "2018", y: 150000 },
              { x: "2019", y: 250000 },
              { x: "2020", y: 500020 },
              { x: "2021", y: 750000 },
              { x: "2022", y: 1000000 },
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default AkademikPersonel;
