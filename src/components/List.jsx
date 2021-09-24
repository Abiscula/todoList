import React from 'react'
import styled from  'styled-components'

const TodoList = styled.div`
    background: #25273c;
    margin-top: 1.5rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    ul li {
        padding: 1em 0;
        border-bottom: 1px solid #CCC;
    }
`

export default function List({items}) {
    return(
        <TodoList>
            <ul>
                {items.map((item ) => {
                    return(
                    <li><input type="checkbox"/>{item}</li>
                    )
                })}
            </ul>
            <p>rodapé da lista</p>
        </TodoList>
    )
}