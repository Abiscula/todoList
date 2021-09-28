import styled from "styled-components";

export const TodoList = styled.div`
    margin-top: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1rem 2rem -0.4rem hsl(0, 0%, 0%, 0.1);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        background: ${(p=>p.theme === 1 ? '#25273c' : '#fafafa')};
        
    }

    ul li {
        padding: 1em 0;
        border-bottom: 1px solid ${(p=>p.theme === 1 ? '#323449' : '#CCC')};
        display: flex;
    }

    span {
        font-size: 0.8rem;
        display: flex;
        margin: auto;
    } 

    p {
        display: flex;
        position: absolute;
        margin: 0 0 0 36%;
        filter: invert(68%) sepia(17%) saturate(256%) hue-rotate(199deg) brightness(85%) contrast(83%);
        cursor: pointer;
    }

    @media (max-width: 375px) {
        p {
            margin: 0 0 0 72%;
        }

        ul {
            margin-bottom: 1rem;
        }
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

export const ClearCompleted = styled.span`
    color: hsl(236, 9%, 61%);
`