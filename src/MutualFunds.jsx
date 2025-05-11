import axios from 'axios';
import React, {useEffect, useState } from 'react';

const MutualFunds = () => {
  const [FundData, setFundData]=useState(null);
  const [Loading, setLoading]=useState(false);
  const[error, setError]=useState(null);

  useEffect(()=>{
    const fetchFundData=async()=>{
      setLoading(true);
      setError(null);
      try {
      const response = await axios.get(
        'https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_DAILY',
            symbol: 'BlueStock',
            apikey: 'EX0KVU97FKZ3T1BF'
          }
        }
      );
      setFundData(response.data);
    
    }catch(err){
      setError(err.message);

    }
    setLoading(false);

  };
  fetchFundData();
}, []);

  // --- TEST MESSAGE & BASIC RETURN FOR RENDERING CHECK ---
  const fundCategories = [
    'Equity',
    'Debt',
    'Hybrid',
    'Commodity',
    'Other',
  ];

  const mutualFunds = [
    {
      name: 'Canara Rob Bluechip Equity Fund',
      logo: 'https://via.placeholder.com/40x40?text=CRB',
      aum: '₹ 10,816.61 Cr.',
      expense: '0.54%',
      cagr: '41.48%',
      cagrColor: 'text-green-600',
      details: {
        performance: 'The fund’s annualised performance has been 15.3% since inception.',
        risk: 'The fund has been categorised as Very High by SEBI and has a standard deviation of 9.90% vs its category average of 9.81%.',
        composition: 'Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at 22.27%.'
      }
    },
    {
      name: 'Baroda BNP Paribas Large Cap Fund',
      logo: 'https://via.placeholder.com/40x40?text=BNP',
      aum: '₹ 1,923.42 Cr.',
      expense: '0.92%',
      cagr: '31.19%',
      cagrColor: 'text-green-600',
      details: {
        performance: 'The fund’s annualised performance has been 15.5% since inception.',
        risk: 'The fund has been categorised as Very High by SEBI and has a standard deviation of 8.06% vs its category average of 9.81%.',
        composition: 'Large Cap makes up for the majority of the fund at 78.74% along with the largest allocation towards Private Banks at 18.81%.'
      }
    },
    {
      name: 'Nippon India Large Cap Fund',
      logo: 'https://via.placeholder.com/40x40?text=NIL',
      aum: '₹ 18,017.67 Cr.',
      expense: '0.82%',
      cagr: '31.35%',
      cagrColor: 'text-green-600',
      details: {
        performance: 'The fund’s annualised performance has been 14.29% since inception.',
        risk: 'The fund has been categorised as Very High by SEBI and has a standard deviation of 9.67% vs its category average of 9.81%.',
        composition: 'Large Cap makes up for the majority of the fund at 79.82% along with the largest allocation towards Private Banks at 21.46%.'
      }
    },
  ];

  return (
    <div style={{background:'#ff0',color:'#000',padding:'10px',fontWeight:'bold'}}>TEST: MutualFunds component is rendering!</div>
  );
}

export default MutualFunds;
