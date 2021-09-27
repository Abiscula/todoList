import React, { useState } from 'react'
import * as s from './components/styles/styled-App'
import ListArea from './components/ListArea'
import {ReactComponent as Sun} from './components/styles/images/icon-sun.svg'
import {ReactComponent as Moon} from './components/styles/images/icon-moon.svg'

function App() {
  const [items, setItems] = useState([])
  const [theme, setTheme] = useState(1)
  const [lineFilter, setLineFilter] = useState('all') // 0 all, 1 active, 2 completed
  const body = document.querySelector('body')
  theme === 1 ? body.style.background = '#161722' : body.style.background = '#fafafa' // altera o backgroundcolor com base no estado

  return (
    <s.Container theme={theme}>
      <s.Header>
        <title>TODO</title>
        {(theme === 1 
        ? <Sun onClick={() => setTheme(2)}className="sun"/>  // altera background para light (1 == true)
        : <Moon onClick={() => setTheme(1)} className="moon"/>) // altera background para dark (1 == false)
        }
      </s.Header>
      <ListArea 
        setItems={setItems} 
        items={items} 
        theme={theme}
        lineFilter={lineFilter}
        setLineFilter={setLineFilter}
      />
      <footer>Drag and drop to reorder list</footer>
    </s.Container>
    
  );
}

export default App;
