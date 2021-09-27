import styled from 'styled-components'

export const ListContainer = styled.main`
    display: flex;
    width: 40%;
    margin: 0 0 2rem 0;
    flex-direction: column;
`

export const SearchField = styled.input`
    padding: 1.5rem;
    background: ${(p=>p.theme === 1 ? '#25273c' : '#fafafa')};
    border-style: none;
    color: ${(p=>p.theme === 1 ? '#cacde8' : '#9394a5')};
    font-size: 18px;
    border-radius: 5px;
    ::placeholder{
        font-family: 'Josefin Sans', sans-serif;
        color: ${(p=>p.theme === 1 ? '#cacde8' : '#9394a5')};
        font-size: 18px;
    }
`