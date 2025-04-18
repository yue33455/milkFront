import { useEffect } from "react";
import BaseHead from "../auxFuncs/BaseHead";


async function Requests() {
    const response = await fetch("https://fantastic-robot-x59r6946q57qcpp7p-8000.app.github.dev");
    const result = await response.json()
    if(response.status == 200)
    {
        console.log(result);
    }
    return (
        <p>
            hehe
        </p>
    )
}

export default function Page2() {
    
    useEffect(()=>{
        Requests();
    }, []);
    return (
        <>
            <BaseHead />

            <h1>
                Hello from page 2
            </h1>
        </>
    );
}