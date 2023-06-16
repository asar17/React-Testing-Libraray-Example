type WrapperPopsType={
    children:any
}
const Wrapper = ({children}:WrapperPopsType) =>{
    return(
        <>
         <h1>wrapper parent</h1>
         {/* <WrapperChild/> */}
         {children}
        </>
    )
}
export default Wrapper