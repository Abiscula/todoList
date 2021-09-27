import styled from 'styled-components'

export const Functions = styled.div`
    padding: 0.6em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: ${(p=>p.theme === 1 ? '#25273c' : '#fafafa')} !important;
    box-shadow: 0 1rem 2rem -0.4rem hsl(0, 0%, 0%, 0.1);

    span {
        cursor: pointer;
        color: hsl(236, 9%, 61%);
    }
`

export const CountItems = styled.span`
    font-size: 0.8rem;
    padding-left: 0.6rem;
    color: hsl(236, 9%, 61%);
    cursor: text;

`

export const StatusFilters = styled.span`
    span {
        padding: 0 0.2rem 0 0.2rem;
    }
`

