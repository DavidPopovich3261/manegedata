import React from 'react'

function Terroristsfunc(props) {
    return (
        props.data.map((terrorist) => {
            return (
                <div key={terrorist.name}>
                    <td>
                        <h2>{terrorist.name}</h2>
                        <img src={terrorist.imageUrl} alt="" />
                        {!(terrorist.imageUrl) && <img src="../src\data\default_profile.png" alt="" />}
                    </td>
                    <td>
                        <h3>{terrorist.organization}</h3>
                    </td>
                    <td>
                        {terrorist.attacksCount}
                    </td>
                    <td>
                        {terrorist.status}
                    </td>
                    <td>
                        <p>{terrorist.relationToIsraelSummary} </p>
                    </td>
                </div>
            )
        }))
}

export default Terroristsfunc
