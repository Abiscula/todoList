import React from 'react'
import ListFunctions from './ListFunctions'
import * as s from './styles/styled-List'
import {ReactComponent as Close} from './styles/images/close.svg'

export default function List({items, setItems, theme, lineFilter, setLineFilter}) {

    function itemChecked(checked, itemName) {
        const itemsCopy = [...items]
        let item = itemsCopy.filter((i) => {
            return i.name === itemName
        })[0]

        item.state = checked
        console.log(item)
        setItems(itemsCopy)
        
    }

    let showItems = [...items] //mostra os itens ativos
    if ( lineFilter ==='active') {   
        showItems = showItems.filter(it => !it.state)    
    }
    else if (lineFilter === 'completed'){ //mostra os itens completos
        showItems = showItems.filter(it => it.state)
    }
    let b = ''
    items.forEach(element => {
        b += `\n${element.name} = ${element.state}`
    });
    console.log(b)
    return(
        <s.TodoList theme={theme}>
            <ul>
                {showItems.map((item, key) => {

                    return( 
                        <li data-line key={key}> 
                            <s.Checkbox> <input type="checkbox" 
                                onChange={(e) => 
                                itemChecked(e.target.checked, item.name)}  
                                checked={item.state}
                                />
                                <span className="checkSpan" />
                                <a className="item">{item.name}</a>
                            </s.Checkbox> 
                        </li>
                    )
                })}
            </ul>
            <ListFunctions 
                items={items} 
                theme={theme} 
                setLineFilter={setLineFilter}
                setItems={setItems}
            />
        </s.TodoList>
    )
}