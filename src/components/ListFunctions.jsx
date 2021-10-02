import React from 'react'
import { useAuth } from '../providers/auth'
import * as s from './styles/styled-ListFunctions'

export default function ListFunction({theme }) {

    const { items, setLineFilter, setItems} = useAuth()

    function handleAll() {
        setLineFilter('all')
    }

    function handleActive() {
        setLineFilter('active')
    }

    function handleCompleted() {
        setLineFilter('completed')
    }

    function handleClearCompleted() {
        
        let itemsCompleted = items.filter((it) => {
            return !it.state
        })
        setItems(itemsCompleted)
    }


    return(
        <s.Functions theme={theme}>
            <s.CountItems>{items.length} items left</s.CountItems>
            <s.ClearCompleted onClick={handleClearCompleted}>Clear Completed</s.ClearCompleted>
            <s.StatusFilters>
                <span onClick={handleAll}>All</span>
                <span onClick={handleActive}>Active</span>
                <span onClick={handleCompleted}>Completed</span>
            </s.StatusFilters>
        </s.Functions>
    )
}