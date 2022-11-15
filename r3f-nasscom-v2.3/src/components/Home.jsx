import "./home.css"
import axios from 'axios';
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const API = () => {
  useEffect(() => {
    axios.get("https://dbqzo7x9t9.execute-api.us-east-1.amazonaws.com/default/model",{
      header:{
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then((res) => {
      console.log(res);
    });
  }, []);
}

const Featured = () => {
    return(
        <div className="featured">
            <div className="featureditems card1">
                <span className="featuredtitle">1 Month</span>
                <div className="featuredprob">
                    <span className="prob">27%</span>
                </div>
                <span className="featuredsub">1 month time period</span>
            </div>
            <div className="featureditems card2">
                <span className="featuredtitle">3 Month</span>
                <div className="featuredprob">
                    <span className="prob">30%</span>
                </div>
                <span className="featuredsub">3 month time period</span>
            </div>
            <div className="featureditems card3">
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
          name: '1 Month',
          "Active User": 27,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '3 Month',
          "Active User": 30,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '9 Month',
          "Active User": 38,
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
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis type="number" domain={[25,40]} />
                    <Line type="monotone" dataKey="Active User" stroke="#fff" />
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
