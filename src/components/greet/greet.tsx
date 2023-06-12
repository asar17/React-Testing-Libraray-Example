type GreetPropsType={
    name?:string
}
const Greet = ({name}:GreetPropsType) => {
    return(
    <div>
        <h1>hello {name}</h1>
        <h2>from react</h2>
        


    </div>)
}
export default Greet