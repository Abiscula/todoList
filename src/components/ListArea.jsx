import React from 'react'
import * as s from './styles/styled-ListArea'
import List from './List'

export default function ListArea({setItems, items, theme}) {
    return(
        <s.ListContainer >
            <s.SearchField 
                theme={theme}
                placeholder="Create a new todo..." 
                onKeyUp={event => {
                    if(event.keyCode === 13) { //keycode 13 = enter
                        setItems([...items, event.target.value]) //recupera valor e adiciona no array]
                        console.log(event.target.value)
                        event.target.value = '' //limpa form
                    }
                }}
            />
            <List items={items} theme={theme}/>
        </s.ListContainer>
    )
}