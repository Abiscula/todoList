import React, { useState } from 'react'
import styled from 'styled-components'
import backIMG from './components/styles/images/desktop-dark.jpg'
import ListArea from './components/ListArea'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${backIMG}) no-repeat;
  align-items: center;
`

const Header = styled.header`
  display: flex;
`

const Footer = styled.footer`
  display: flex;
`

function App() {

  const [items, setItems] = useState([])

  console.log(items)
  return (
    <Container>
      <Header />
      <ListArea setItems={setItems} items={items}/>
      <Footer>teste</Footer>
    </Container>
    
  );
}

export default App;
