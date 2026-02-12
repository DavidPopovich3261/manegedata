import React, { useState } from 'react'
import Terroristsfunc from './Terroristsfunc';

function Search(props) {
  const [x, setX] = useState('');
  return (
    <form >
      <input placeholder={`search by ${props.filter}`}
        value={x}
        onChange={e => setX(e.target.value)}
      />
      <table className='tabel'>
        <tr>
          <th>Name</th>
          <th>organization</th>
          <th>Attacks</th>
          <th>status</th>
          <th>Summary</th>
        </tr>
        <Terroristsfunc data={
          props.terrorists.filter((terrorist) => {
            if (props.filter == "name") {
              return (
                terrorist[props.filter].includes(x))
            } else {
              return (
                terrorist[props.filter] == (x))
            }
          })
        } />

      </table>
    </form>
  );
}

export default Search