import React from 'react';
import { render, screen } from '@testing-library/react'
import Skills from './skills'

describe('Skills comp',()=>{
    const skills=['html','css','javascript']
    //test ul singleElement by getByRole
    test('renders correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElem= screen.getByRole('list')
        expect(listElem).toBeInTheDocument()
    })
    //test li[props from test file to skills comp] multipleElement by getByAllRole
    test('renders a list of skills',()=>{
        render(<Skills skills={skills}/>)
        const listItemElem= screen.getAllByRole('listitem')
        expect(listItemElem).toHaveLength(skills.length)
    })
})