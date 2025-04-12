import BaseHead from "../auxFuncs/BaseHead";


let ws = undefined;

//const webSocket = () =>{
    //const newws = new WebSocket('ws://example.com')
//}

export default function Page2(){
    return(
        <>
        <BaseHead/>        
        
        <h1>
            Hello from page 2
        </h1>
        </>
    );
}