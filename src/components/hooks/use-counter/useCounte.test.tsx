import { renderHook , screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
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
    //test the increment method => update the state => setState => should use act utility function
    test('increment the counter by 1',()=>{
      const {result} = renderHook(useCounter)
      act(()=>{result.current.incre()})
      expect(result.current.count).toBe(1)
    })

     //test the decrement method => update the state => setState => should use act utility function
     test('decrement the counter by 1',()=>{
        const {result} = renderHook(useCounter)
        act(()=>{result.current.decre()})
        expect(result.current.count).toBe(-1)
      })


 })

