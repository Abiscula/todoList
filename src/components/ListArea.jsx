import React from 'react'
import * as s from './styles/styled-ListArea'
import List from './List'

export default function ListArea({setItems, items, theme, lineFilter, setLineFilter}) {
    return(
        <s.ListContainer >
            <s.SearchField 
                theme={theme}
                placeholder="Create a new todo..." 
                onKeyUp={event => {
                    if(event.keyCode === 13) { //keycode 13 = enter
                        setItems([...items, {name: event.target.value, state: false}]) //recupera valor e adiciona no array]
                        event.target.value = '' //limpa form
                    }
                }}
            />
            <List 
                items={items} 
                theme={theme}
                lineFilter={lineFilter}
                setLineFilter={setLineFilter}
                setItems={setItems}
            />
        </s.ListContainer>
    )
}