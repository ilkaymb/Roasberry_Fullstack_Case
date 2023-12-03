import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { IoIosSquare } from "react-icons/io";
import { Col, FlexboxGrid } from "rsuite";

function AkademikPersonel() {
  return (
    <div className=" ">
      <div className="flex flex-col justify-flex-start items-start w-full text-left">
        <h2 className="text-gray-900 text-2xl capitalize mb-5 text-center">
          Line Chart
        </h2>{" "}
      </div>

      <div className="flex justify-flex-start items-start">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: "#EF4444" },
              parent: { border: "1px solid #ccc" },
            }}
            data={[
              { x: "2018", y: 15 },
              { x: "2019", y: 25 },
              { x: "2020", y: 50 },
              { x: "2021", y: 35 },
              { x: "2022", y: 60 },
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default AkademikPersonel;
