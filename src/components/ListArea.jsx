import React from 'react'
import * as s from './styles/styled-ListArea'
import List from './List'
import { useAuth } from '../providers/auth'

export default function ListArea({theme}) {

    const { items, setItems } = useAuth()

    return(
        <s.ListContainer >
            <s.SearchField 
                theme={theme}
                placeholder="Create a new todo..." 
                onKeyUp={event => {
                    if(event.keyCode === 13) { //keycode 13 = enter
                        setItems([...items, {id: Math.random(), name: event.target.value, state: false}]) //recupera valor e adiciona no array]
                        event.target.value = '' //limpa form
                    }
                }}
            />
            <List 
                theme={theme}
            />
        </s.ListContainer>
    )
}