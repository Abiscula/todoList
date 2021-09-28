import styled from 'styled-components'

export const Functions = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 8px;
    background: ${(p=>p.theme === 1 ? '#25273c' : '#fafafa')} ;
    box-shadow: 0 1rem 2rem -0.4rem hsl(0, 0%, 0%, 0.1);

    span {
        cursor: pointer;
        color: hsl(236, 9%, 61%);
    }

    span:active {
        color: blue;
    }

`

export const CountItems = styled.span`
    display: flex;
    font-size: 0.8rem;
    padding-left: 0.6rem;
    color: hsl(236, 9%, 61%);
    cursor: text;
    order: 0;
`

export const StatusFilters = styled.span`
    display: flex;
    order: 1;
    span {
        padding: 0 0.2rem 0 0.2rem;
    }

    @media (max-width: 375px) {
        order: 2;
        padding-top: 10%;
        span {
            padding-top: 10%;
        }
    }
`

export const ClearCompleted = styled.span`
    display: flex;
    order: 2;
    padding: 0 0.2rem 0 0.2rem;
`

