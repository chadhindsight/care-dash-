import React, { useState } from 'react';
import { Input, AutoComplete, Spin } from 'antd';

import { Link } from 'react-router-dom';

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const Search = (query,meds) =>{
    console.log(query)

  return meds.slice(0,20).map((item, idx) => {
            const category = `${query}${idx}`;
            return {
                value: JSON.stringify(item),
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Link to="/product"> <span>{item.drugName} ({item.condition})</span></Link>
                    </div>
                ),
            };
        });
    }
// Search bar logic 
const SearchBar = (props) => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    // const [meds, setMeds] = useState([]) 
   
    let timeout = null;
    const handleSearch = async (value) => {
        setValue(value)
        clearTimeout(timeout)
        timeout = setTimeout(async() => {
            let results = await props.getResults(value)
            // setOptions(value ? Search(value) : []);
            console.log(results)
            setOptions(Search(value, results.data.meds))
        }, 1000);

    };

    const onSelect = value => {
        value = JSON.parse(value)
        console.log('onSelect', value);
        setValue(value.drugName)
        props.showInfo(value)
    };
    console.log(options)
    return (
        <AutoComplete className='search-bar'
            dropdownMatchSelectWidth={252}
            style={{
                width: 350,
                marginTop: '4.6%'
            }}
            options={options}
            notFoundContent={options.length < 0 ? <p>Not Found</p> : <Spin />  }
            onSelect={onSelect}
            placeholder="Search by medication or by your symptoms"
            onSearch={handleSearch}
            value={value}
        >
            {/* <Input.Search size="large" placeholder="input here" enterButton /> */}
        </AutoComplete>
    );
};

export default SearchBar;