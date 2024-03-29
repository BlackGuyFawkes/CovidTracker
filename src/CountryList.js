import React from 'react';
import Country from './Country';
import './countryList.css';

const CountryList = ({stats}) =>{
    return(
        <div className='countrylist'>
            {
             stats.map(country =><Country key={country.CountryCode} stats={country}/>)
            }
        </div>
    )
}
export default CountryList;