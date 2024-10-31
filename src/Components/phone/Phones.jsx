import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer,XAxis,YAxis } from 'recharts';


const Phones = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData=data.data.data
            const phonesWithFakeData=phoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhones(phonesWithFakeData)
            console.log(phonesWithFakeData);
            
        }
        )
    },[])
    return (
       
        <div>
             <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis/>
          <YAxis/>
        </BarChart>
        </div>
    );
};

export default Phones;