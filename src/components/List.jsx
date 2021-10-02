import React from 'react'
import ListFunctions from './ListFunctions'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import * as s from './styles/styled-List'
import {ReactComponent as Close} from './styles/images/close.svg'
import { useAuth } from '../providers/auth'

export default function List({theme}) {

    const { items, setItems, lineFilter } = useAuth()

    function itemChecked(checked, itemId) { //criando copia do array original para poder modifica-lo
        const itemsCopy = [...items]
        let item = itemsCopy.filter((i) => {
            return i.id === itemId
        })[0]

        item.state = checked
        setItems(itemsCopy)     
    }

    let showItems = [...items] //mostra os itens ativos
    if ( lineFilter ==='active') {   
        showItems = showItems.filter(it => !it.state)    
    }
    else if (lineFilter === 'completed'){ //mostra os itens completos
        showItems = showItems.filter(it => it.state)
    }

    function taskDel(id) { //função apagar apagar o item selecionado (pelo icone 'X')
        console.log(id)
        showItems = showItems.filter(item => item.id !== id)
        setItems(showItems) 
    }

    function handleOnDragEnd(result) { //função para mover os items (drag and drop)
        if(!result.destination) return;
        const listItems = Array.from(items)
        const [reorderedItem] = listItems.splice(result.source.index, 1)
        listItems.splice(result.destination.index, 0, reorderedItem)

        setItems(listItems)
    }

    return(
        <s.TodoList theme={theme}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {showItems.map((item, index) => {
                                return( 
                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}> 
                                                <s.Checkbox> <input type="checkbox" 
                                                    onChange={(e) => 
                                                    itemChecked(e.target.checked, item.id)}  
                                                    checked={item.state}
                                                    />
                                                    <span className="checkSpan" />
                                                    <a className="item">{item.name}</a>     
                                                </s.Checkbox> 
                                                <p><Close onClick={() => taskDel(item.id)} /></p>
                                            </li>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <ListFunctions 
                theme={theme} 
            />
        </s.TodoList>
    )
}