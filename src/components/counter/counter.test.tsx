import { render, screen } from '@testing-library/react'
import Counter from './counter'
import user from  '@testing-library/user-event'

describe('Counter',()=>{
    //test each element in the counter component
    test('renders correctly',()=>{
        render(<Counter/>)
        //test counter heading
        const counterElem= screen.getByRole('heading')
        expect(counterElem).toBeInTheDocument()
        
        //test button increment
        const buttonIncElem= screen.getByRole('button',{
            name:'Increment'
        })
        expect(buttonIncElem).toBeInTheDocument()
    })

    //test tha states
    test('renders a counter of 0',()=>{
        render(<Counter/>)
        const counterElem= screen.getByRole('heading')
        expect(counterElem).toHaveTextContent('0')
    })
    //test click event by increment button
    test('renders counter of 1 after clicking increment button',async()=>{
        user.setup();
        render(<Counter/>)
        const incrementButton= screen.getByRole('button',{
            name:'Increment'
        })
        await user.dblClick(incrementButton);
        const counterElem= screen.getByRole('heading');
        expect(counterElem).toHaveTextContent('counter is 1')
    })
    //test mouse left
    test('mouse left',async()=>{
        user.setup()
        render(<Counter/>)
        const leftButton= screen.getByRole('button',{
            name:'mouse-left'
        });
       await user.pointer({target:leftButton ,keys:'[MouseLeft][Mouseright]'});
        const counterElem= screen.getByRole('heading');
        expect(counterElem).toHaveTextContent('counter is 2')
    })

})