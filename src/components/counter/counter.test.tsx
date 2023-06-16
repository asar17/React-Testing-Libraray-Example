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

    //test button [change counter by amount value]
    test('renders counter 10 after clicking chage counter by amount value',async ()=>{
        user.setup()
        render(<Counter/>)
        const inputNumberElem= screen.getByRole('spinbutton');
        //await user.type(inputNumberElem,"20")
        expect(inputNumberElem).toHaveValue(10);

        const btnChangeCounterByAmountValueElem= screen.getByRole('button',{
            name:"change counter by amount value"
        })
        await user.click(btnChangeCounterByAmountValueElem);
        const counterElem= screen.getByRole('heading')
        expect(counterElem).toHaveTextContent('counter is 10')
    })
    //test keyboard interaction

    test('keyboard interactions',async ()=>{
        render(<Counter/>)
        const incrementButton= screen.getByRole('button',{
            name:'Increment'
        })
        await user.tab()
        expect(incrementButton).toHaveFocus()
    })

})