import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DataDisplay from './DataDisplay';

function UpperToolBar() {
  const [responseData, SetResponseData] = useState();
  const [categories, setCategories] = useState(["people", "films", "starships", "vehicles", "species", "planets"]);
  const [selected, setSelected] = useState(categories[0]);
  const [apiId, setApiId] = useState(1);
  const [flag, setFlag] = useState(true);

  function handleQuery(e) {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${selected}/${apiId}`)
      .then(response => {
        SetResponseData(response.data);
        setFlag(true)
      })
      .catch((error) => {
        setFlag(false)
      })
  }
  
  return (
    <div>
      <div className='d-flex align-items-center'>
        <span className='me-1'>Search for:</span>
        <DropdownButton variant="secondary" id="dropdown-basic-button" title={selected}>
          {
            categories.filter(category => !category.includes(selected)).map(
              (filteredName, index) => (
                <Dropdown.Item key={index} onClick={ () => setSelected(filteredName) }>{ filteredName }</Dropdown.Item>
              ))
          }
        </DropdownButton>
        <div className='ms-5'>
          <form>
            <label className='me-1' htmlFor="">Id</label>
            <input value={apiId} onChange={(e) => setApiId(e.target.value)} type="number" min={1} />
            <button onClick={handleQuery} className='btn-secondary px-3' type="submit">Search</button>
          </form>
        </div>
      </div>
      <div>
        {
          responseData ? <DataDisplay apiResponse={ responseData } statusFlag={ flag } /> : undefined
        }
      </div>
    </div>
  )
}

export default UpperToolBar
