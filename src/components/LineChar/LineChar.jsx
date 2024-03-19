import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from "recharts";

const LineChar = () => {
  const memberShipData = [
    { id: 1, month: "Jan", members: 50 },
    { id: 2, month: "Feb", members: 55 },
    { id: 3, month: "Mar", members: 60 },
    { id: 4, month: "Apr", members: 65 },
    { id: 5, month: "May", members: 70 },
    { id: 6, month: "Jun", members: 75 },
    { id: 7, month: "Jul", members: 80 },
    { id: 8, month: "Aug", members: 85 },
    { id: 9, month: "Sep", members: 90 },
    { id: 10, month: "Oct", members: 95 },
  ];

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <LChart width={500} height={400} data={memberShipData}>
          <XAxis dataKey="month"></XAxis>
          <YAxis dataKey="members"></YAxis>
          <Tooltip></Tooltip>
          <Line dataKey="members" stroke="green"></Line>
        </LChart>
      </div>
      <p className="font-medium mt-4 pb-4 text-lg">
        <span className="text-green-700 font-bold">Figure:</span> GYM Membership
        Growth
      </p>
    </div>
  );
};

export default LineChar;
