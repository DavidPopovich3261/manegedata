import React from 'react'

function SelectStatus(props) {
    return (
        <div>
            <select name="status" id="" onChange={(event) => {
                props.setselect(event.target.value)
                const t = props.terrorists.filter((t) => {
                    t.status == select
                })
                props.setData(() => [t])
                console.log(props.terrorists);

            }}>
                <option value="Active">Active</option>
                <option value="Quiet">Quiet</option>
                <option value="Dead">Dead</option>
                <option value="Agent">Agent</option>
            </select>
        </div>
    )
}

export default SelectStatus