import { useState } from "react"

const Destructure = () => {

    const [num, setNum] = useState({user:'Ladaba', age:30})
    const [arrnum, setArrnum] = useState([10,20,30])

    const btnClicked = () => {
        // setNum(20) // ? this will show , on UI reson is written down 

        // * Cause: You initialized num as an object ({ user: 'Ladaba', age: 30 }) but call setNum(20). After that num is a number, so num.user and num.age are both undefined. React renders undefined as an empty string, so your JSX <h2>{num.user}, {num.age}</h2> ends up showing only the literal comma: ,.
        // * Also: console.log(num) immediately after setNum(...) shows the old value because "state updates are asynchronous."

        // console.log(num)

        // ! Method 1
        // const newNum = {...num}; // *this is destructuring 
        // *destructuring :-  ... this three dot is destructuring and num written after three dot show u are destructuring the num.  here num is object so written in {} if it is array then written in []
        // newNum.user = 'Avi'
        // newNum.age = 20
        // setNum(newNum)

        // ! Method 2 {best}
        // using previous {prev}
        setNum(prev => ({...prev, age:40}))
    }

    const arrDestructure = () => {
        // setArrnum(40,30,20) // *it sets arrnum to 40 (the first argument). Extra arguments are ignored.
        // *if u want to see these all number then pass these numbers in array cause arrnum is an array so it will change with array.
        // setArrnum([40,30,20])

        // ? Destructuring array
        const newarrnum = [...arrnum];
        newarrnum.push(100) // adding elements {push}
        setArrnum(newarrnum)
    }

    return (
        <div>
            <hr />
            <h1>Destructring concept</h1>
            <h2>{num.user}, {num.age}</h2>
            <button onClick={btnClicked}>Click</button>
            <hr />
            <h2>{arrnum}</h2>
            <button onClick={arrDestructure}>destructure Array</button>
        </div>
    )
}

export default Destructure