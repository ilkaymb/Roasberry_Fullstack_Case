import { VictoryPie } from "victory";

function PieChartSection() {
  return (
    <div className="text-black text-left">
      <div className="flex flex-col justify-flex-start items-start w-full text-left">
        <h2 className="text-gray-900 text-2xl capitalize mb-5 text-center">
          Pie Chart
        </h2>{" "}
      </div>

      <div>
        <VictoryPie
          data={[
            { x: "Kadın", y: 35 },
            { x: "Erkek", y: 40 },
            { x: "Çocuk", y: 22 },
          ]}
          colorScale={["#EF4444", "rgb(59, 130, 246)", "gold"]}
        />
      </div>
    </div>
  );
}

export default PieChartSection;
