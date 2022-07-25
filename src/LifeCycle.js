import { useEffect, useState } from "react";


const UnmountTest = ()=>{
    useEffect(()=>{
        console.log('Mount');

        return()=>{
            console.log('Unmount');
        }
    },[])

    return(
        <div>
            useEffect Test
        </div>
    )
}

const LifeCycle = ()=>{

    const [visible, setVisible] = useState(false);

    const toggle = ()=>{
        setVisible(!visible);
    }

    return(
        <div style={{padding : 30}}>
            <button onClick={toggle}>ON/OFF</button>
            {visible && <UnmountTest />}
        </div>
    )
}

export default LifeCycle;