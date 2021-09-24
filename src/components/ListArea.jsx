import React from 'react'
import styled from 'styled-components'
import List from './List'

const ListContainer = styled.main`
    display: flex;
    width: 40%;
    margin: 10rem 0 2rem 0;
    flex-direction: column;
`

const SearchField = styled.input`
    padding: 1.5rem;
    background: #25273c;
    border-style: none;
    color: #fefefe;
    font-size: 18px;
    ::placeholder{
        font-family: 'Josefin Sans', sans-serif;
        color: #fefefe;
        font-size: 18px;
    }
`

export default function ListArea({setItems, items}) {
    return(
        <ListContainer>
            <SearchField 
                placeholder="Create a new todo..." 
                onKeyUp={(event) => {
                    if(event.keyCode == 13) { //keycode 13 = enter
                        setItems([...items, event.target.value]) //recupera valor e adiciona no array
                        event.target.value = '' //limpa form
                    }
                }}
            />
            <List items={items}/>
        </ListContainer>
    )
}