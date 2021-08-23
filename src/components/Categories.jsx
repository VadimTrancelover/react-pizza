import React from 'react'

function Categories({items}) {

    console.log(items)

    return (
        <div>
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                {
                    items.map((item, index) => 
                    <li key={`${item}_${index}`}>{item}</li>)    
                }
              </ul>
            </div>
        </div>
    )
}

export default Categories

