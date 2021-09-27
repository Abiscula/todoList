import React, { useState } from 'react'
import * as s from './styles/List'

export default function List({items}) {
    const [status, setStatus] = useState([])
    return(
        <s.TodoList>
            <ul>
                {items.map((item, key) => {

                    function handleCheck(event) { //verifica se o item esta com status "checked"      
                        (event.target.checked ? setStatus([...status, key]) : status.splice(status.indexOf(key), 1))
                    }

                    return( 
                        <li key={key}> 
                            <s.Checkbox> <input type="checkbox" onChange={handleCheck} />
                            <span className="checkSpan" /></s.Checkbox> 
                            <a>{item}</a>
                        </li>
                    )
                })}
            </ul>
            <div>
                <s.CountItems>{items.length} items left</s.CountItems>
                <s.StatusFilters>
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </s.StatusFilters>
                <span>Clear Completed</span>
            </div>
        </s.TodoList>
    )
}