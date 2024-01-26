import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Categories({activeCategory, setActiveCategory}) {
    const categories = ["all", "favorite", "currently reading", "finished reading", "want to read"]
    const {pathname} = useLocation()

    const capitilize = (text) => {
        return text.charAt(0).toUpperCase().concat(text.slice(1))
    }
    return (
    <ButtonGroup>
        {categories.map(category => {
            return (<Link to={category==='all' ? '/' : `/${category.replaceAll(' ', '_')}`} key={category}>
                <Button outline color='success' active={activeCategory===category} onClick={() => setActiveCategory(category)}>{capitilize(category)}</Button>
            </Link>)
        })}
    </ButtonGroup>
    )
}