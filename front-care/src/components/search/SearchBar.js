import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';

import { Link } from 'react-router-dom';

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const Search = query =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

const SearchBar = (props) => {
    const [options, setOptions] = useState([]);

    const handleSearch = async (value) => {
        await props.getResults(value)
        setOptions(value ? Search(value) : []);
    };

    const onSelect = value => {
        console.log('onSelect', value);
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: 450,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            {/* <Input.Search size="large" placeholder="input here" enterButton /> */}
        </AutoComplete>
    );
};

export default SearchBar;