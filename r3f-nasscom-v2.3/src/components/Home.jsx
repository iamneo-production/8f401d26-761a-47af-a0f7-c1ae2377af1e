import "./home.css"
import axios from 'axios';
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const API = () => {
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
    .then((res) => {
      console.log(res.data);
    });
  }, []);
}

const Featured = () => {
    return(
        <div className="featured">
            <div className="featureditems">
                <span className="featuredtitle">1 Month</span>
                <div className="featuredprob">
                    <span className="prob">27%</span>
                </div>
                <span className="featuredsub">1 month time period</span>
            </div>
            <div className="featureditems">
                <span className="featuredtitle">3 Month</span>
                <div className="featuredprob">
                    <span className="prob">30%</span>
                </div>
                <span className="featuredsub">3 month time period</span>
            </div>
            <div className="featureditems">
                <span className="featuredtitle">6 Month</span>
                <div className="featuredprob">
                    <span className="prob">38%</span>
                </div>
                <span className="featuredsub">6 month time period</span>
            </div>
        </div>
    )
}

const Chart = () => {
    const data = [
        {
          name: 'Page A',
          "Active User": 27,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          "Active User": 30,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          "Active User": 32,
          pv: 9800,
          amt: 2290,
        }
      ];
    return(
        <div className="chart">
           <h3 className="charttitle">
            Analytics
            </h3> 
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}


function Home() {
  return (
    <div className='home'>
      <Featured />
      <Chart />
      <API />
    </div>
  )
}

export default Home;
