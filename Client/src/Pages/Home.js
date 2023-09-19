import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../Components/Loader";
//import "./main.css";
import "../Styles/main.css"
//import { ResponsiveContainer,LineChart,Line, XAxis,YAxis,CartesianGrid, Legend, Tooltip } from "recharts";
import Graph from "../Components/Graph";
const Home = () => {
    const [graph,setGraph]=useState({});
    const [loading,setLoading]=useState(false);
    console.log(graph);
    console.log(typeof(graph));
   function handleSubmit()
   {
        setLoading(true);
        axios
        .get('http://localhost:3001/get-trained-data')
        .then((res) => {
            res.data.shift();
           // console.log(res.data[0].split()[2]);
          const parsedData = res.data.map((entry) => ({
     //const parts=entry.split('');
           date: entry.split(' ')[1],
          forecast:parseFloat(entry.split(/\s+/)[2]),
         }));
         console.log(parsedData);
          setGraph(parsedData);
          setLoading(false);
        })
        .catch(err=>
            {
                console.log("error fetching image",err)
            })
            
        }
    return (<>{loading ? <LoadingSpinner message="Loading..."/>:
    <div className="bg-image">
    <button className="show-graph-button" type="submit" style={{justifyContent:"center"}} onClick={handleSubmit}>show graph</button> 
   { Object.keys(graph).length!==0 && <Graph DATA={graph}/>
}
    </div>
}
</>

    )

}
export default Home;