import { render, screen } from '@testing-library/react'
import CounterTwo from './CounterTwo'
import user from '@testing-library/user-event'
describe("CounterTwo with mocking function",()=>{
    test('functions are called',async ()=>{
        user.setup()
        const increHandler=jest.fn();
        render(<CounterTwo incre={increHandler}/>)
        //console.log("test",increFunc)
        const buttonINcrementElem= screen.getByRole('button',{
            name:'increment'
        })
        await user.click(buttonINcrementElem)
        expect(increHandler).toHaveBeenCalledTimes(1);

        

        
    })
})