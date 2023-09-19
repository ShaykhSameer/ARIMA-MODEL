import React from "react";
//import "./Graph.css"
import "../Styles/Graph.css"
import { ResponsiveContainer,LineChart,Line, XAxis,YAxis,CartesianGrid, Legend, Tooltip } from "recharts";
function Graph(props){
    return(
        <>
      <ResponsiveContainer className="responsive-container" width={"100%"} aspect={3}>
        <LineChart className="line-chart" data={props.DATA} margin={{ top: 60, right: 80, left: 20, bottom: 5 }}>
          <CartesianGrid className="cartesian-grid" strokeDasharray="3 3"></CartesianGrid>
          <XAxis className="x-axis" dataKey="date" interval="preserveStartEnd"></XAxis>
          <Tooltip />
          <YAxis className="y-axis" dataKey="forecast"></YAxis>
          <Legend className="legend"></Legend>
          <Line className="line" type="monotone" dataKey="forecast" stroke="black" strokeWidth={3} activeDot={{ r: 8 }}></Line>
          <Line type="monotone" dataKey="date" stroke="green" activeDot={{r:8}}></Line>
        </LineChart>
      </ResponsiveContainer>
      
  
</>
    )

}
export default Graph