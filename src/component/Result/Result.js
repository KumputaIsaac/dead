import React from 'react'
import './result.css'

const Result = ({row}) => {
    console.log(row.number)



    return (
        <div>
            <div className="words">
                <h2>Number</h2>
                <h2>Dead</h2>
                <h2>Injured</h2>
            </div>
            {
                row.map(items=>{
                   return   <div key={row.number} className="result">
                                <div className="number">{items.number}</div>
                                <div className="dead">{items.dead}</div>
                                <div className="injured">{items.injured}</div> 
                            </div> 
                })
            }
        </div>
    )
}

export default Result
