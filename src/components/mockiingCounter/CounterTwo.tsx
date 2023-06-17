
type CounterTwoPropsType={
    counter?:number
    incre?:()=>void
}
const CounterTwo = ({counter,incre}:CounterTwoPropsType) =>{
    return(
        <>
        counter mocking {counter} 
         {incre && 
         (<button onClick={()=>incre()}>increment</button>)
         } 
         {incre && 
         (<button onClick={()=>incre()}>increment2</button>)
         } 
        </>
    )
}
export default CounterTwo;