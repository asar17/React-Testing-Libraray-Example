import { renderHook , screen } from "@testing-library/react"
import { useCounter } from './useCounter'
describe('useCounter Hook',()=>{
    renderHook(useCounter)
    //test the inintial state of zero
    test('renders count of zero inital state',()=>{
       const {result} =renderHook(useCounter)
       expect(result.current.count).toBe(0);
       console.log(result.current)
    })

    //pass 10 to the initail state [count] and test it again
    test('should accept and render the value passed',()=>{
      const {result}  = renderHook(useCounter,{
        initialProps:{
            initialCounter:20
        }
      })
      expect(result.current.count).toBe(20)
    })

 })

