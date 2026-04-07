// make a new file and component
// add html with function 
// export and import component 
// Test Code  

function Exercise(){
    function callFun(){

    alert("Function called");
    }
    return(
        <>
        <h1>Saksham Yadav exercise</h1>
        <ul>
            <li>Invent new traffic light</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum</li>
        </ul>
        <button onClick={callFun}>Click me</button>

        </>
    )
}

export default Exercise;