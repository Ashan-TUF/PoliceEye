import { ResponsivePie } from "@nivo/pie";
import { MockPieChartData as data } from "../data/mockPieChartData";

const PieChart = () => {
  return (
    
    <div className="h-96 w-full xl:w-1/2 bg-white rounded-4xl shadow-lg cursor-pointer">
            <ResponsivePie
          data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={10}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={1}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          fill={[
            { match: { id: "ruby" }, id: "dots" },
            { match: { id: "c" }, id: "dots" },
            { match: { id: "go" }, id: "dots" },
            { match: { id: "python" }, id: "dots" },
            { match: { id: "scala" }, id: "lines" },
            { match: { id: "lisp" }, id: "lines" },
            { match: { id: "elixir" }, id: "lines" },
            { match: { id: "javascript" }, id: "lines" },
          ]}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 5,
            },
          ]}
          legends={[]} 
        />
    </div>
  );
};

export default PieChart;
