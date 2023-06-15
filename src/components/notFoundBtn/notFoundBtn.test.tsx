import React from 'react'
import { render, screen ,logRoles} from '@testing-library/react'
import NotFoundBtn from './notFoundBtn'
describe('notFoundBtn com',()=>{
    const items=['html','css','javascript','react.js','next.js'];
    //test list [ul]
    test('render list',()=>{
        render(<NotFoundBtn items={items}/>)
        const listElem= screen.getByRole('list');
        expect(listElem).toBeInTheDocument();

    });
    //test list items
    test('render list item',()=>{
        render(<NotFoundBtn items={items}/>)
        const listItemElem= screen.getAllByRole('listitem');
        expect(listItemElem).toHaveLength(items.length);

    });
    //test login button
    test('render login button',()=>{
        render(<NotFoundBtn items={items}/>)
        const loginBtnElem= screen.getByRole('button',{
            name:'login'
        });
        expect(loginBtnElem).toBeInTheDocument();
    })
    //test logout button
    test('render logout button',()=>{
        render(<NotFoundBtn items={items}/>)
        const logoutBtnElem= screen.queryByRole('button',{
            name:'logout'
        })

        expect(logoutBtnElem).not.toBeInTheDocument()
    })
    //test logout button appear after interval
    test('render logout button affter 500sec',async ()=>{
       const view= render(<NotFoundBtn items={items}/>);
       logRoles(view.container)
       
        const logoutBtnElem2=await screen.findByRole('button',{
            name:'logout'
        });
        expect(logoutBtnElem2).toBeInTheDocument()
        //screen.debug()


    })
})