import styled from "styled-components";

export const TodoList = styled.div`
    background: ${(p=>p.theme === 1 ? '#25273c' : '#fafafa')};
    margin-top: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem -0.4rem hsl(0, 0%, 0%, 0.1);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    ul li {
        padding: 1em 0;
        border-bottom: 1px solid ${(p=>p.theme === 1 ? '#323449' : '#CCC')};
        display: flex;
    }

    div {
        padding: 0.6em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        box-shadow: 0 1rem 2rem -0.4rem hsl(0, 0%, 0%, 0.1)
    }

    span {
        font-size: 0.8rem;
        display: flex;
        margin: auto;
    } 
`

export const Checkbox = styled.label`
    margin-bottom: 2px;
    padding-left: 2rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const CountItems = styled.span`
    font-size: 0.8rem;
    padding-left: 0.6rem;
    color: hsl(236, 9%, 61%);

`

export const StatusFilters = styled.span`
    color: hsl(236, 9%, 61%);
    span {
        padding: 0 0.2rem 0 0.2rem;
    }
`

export const ClearCompleted = styled.span`
    color: hsl(236, 9%, 61%);
`