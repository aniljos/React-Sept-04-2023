import {ChangeEvent, useState, useRef, useEffect} from 'react';

type FnCounterProps = {
    initValue?: number
}
function FnCounter( props: FnCounterProps){

    const [counter, setCounter] = useState(props.initValue ? props.initValue : 0);
    const inputRef = useRef<HTMLInputElement>(null);
    //let incrementCount = 0;
    const incrementCount = useRef(0);


    //signatue: useEffect(callback, [dependencies])
    // useEffect equivalent to componentDidMount => useEffect(callback, [])
    useEffect(() => {

        console.log("useEffect equivalent to componentDidMount...")

        // useEffect equivalent to componentWillUnMount 
                            //=> callback returned form the useEffect with no dependencies
        return () => {
            console.log("useEffect equivalent to componentWillUnMount...")
        }
    }, [])

    // useEffect equivalent to componentDidUpdate => useEffect(callback, [dependency])
    useEffect(()=> {
        console.log("useEffect equivalent to componentDidUpdate...", counter)
    }, [counter])

    function inc(){
        setCounter(counter + 1);
        console.log("Counter", counter);
        incrementCount.current++;
        console.log("incrementCount", incrementCount.current);

    }

    const decr = ()=> {
        setCounter(counter - 1);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        if(evt.target.value){
            setCounter(Number(evt.target.value))
        }
        else{
            setCounter(0)
        }
        
    }
    function handleUpdate(){
        //setCounter()
        console.log("inputRef: ", inputRef);
        console.log("inputRef: ", inputRef.current?.value);
        setCounter(Number(inputRef.current?.value))
    }

    return (
        <div>
            <h4>Fn Counter: {counter}</h4>
            <p>This is a functional component with hooks</p>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <div>
                {/* Controlled Input */}
                Counter: <input type='number' 
                            placeholder='Counter' value={counter} onChange={handleChange}/>
            </div>
            <div>
                {/* Uncontrolled Input */}
                Update Counter: <input ref={inputRef} type='number' placeholder='Enter a value'/>&nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default FnCounter