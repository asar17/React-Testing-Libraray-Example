import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFoundBtn from './notFoundBtn'
describe('notFoundBtn com',()=>{
    const skills=['html','css','javascript','react.js','next.js']
    //test login button
    test('render login button',()=>{
        render(<NotFoundBtn skills={skills}/>)
        const loginBtnElem= screen.getByRole('button',{
            name:'login'
        });
        expect(loginBtnElem).toBeInTheDocument();
    })
    //test logout button
    test('render logout button',()=>{
        render(<NotFoundBtn skills={skills}/>)
        const logoutBtnElem= screen.queryByRole('button',{
            name:'logout'
        })
        expect(logoutBtnElem).not.toBeInTheDocument()
    })
})