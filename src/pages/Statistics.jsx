// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data=useLoaderData()
    return (
        <div className='w-[1100px] h-[500px] mx-auto my-9'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_title" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="price" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="price" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;