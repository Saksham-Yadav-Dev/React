// use of curly braces

function Basic(){
    // const name="saksham";

    // function fruit(){
    //     return"apple";
    // }
    // function Sum(a,b){
    //     return a+b;
    // }
    // const obj={
    //     name:"saksham",
    //     id:2411981485,
    // }

    // return(
    //     <>
    //     <h1>{name}</h1>
    //     <h1>{fruit()}</h1>
    //     <h1>{Sum(10,30)}</h1>
    //     <h1>{obj.id}</h1>
    //     </>
    // )

    // click event and function calling
    function click(){
        console.log("hello");
    }
    function fruit(name){
        console.log(name);
    }
    return(
        <>
    <button onClick={click}>click me one</button>
    <button onClick={()=>fruit("apple")}>click for fruit</button> {/*function for parameters */}
    </>
    
    )

}
export default Basic;