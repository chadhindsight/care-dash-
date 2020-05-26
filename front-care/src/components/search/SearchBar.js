import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import {Link} from 'react-router-dom';

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = query =>
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
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <Link
                                to={`http://localhost:5000/search?q=${query}`}
                                rel="noopener noreferrer"
                            >
                                {category}
                            </Link>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

const SearchBar = () => {
    const [options, setOptions] = useState([]);

    const handleSearch = value => {
        setOptions(value ? searchResult(value) : []);
    };
    // Check the selected value
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
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};

export default SearchBar;