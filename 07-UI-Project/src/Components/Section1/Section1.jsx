// ! this file work for overall page 

import Navbar from "./Navbar"
import Page1Content from "./Page1Content"

// * important css property 
//  h-screen , w-full to cover overall screen {height=100% , width=100%}

const Section1 = (props) => {
    // console.log(props)
    return (
        <div className="h-screen w-full">
            <Navbar />
            <Page1Content users={props.users}/>
        </div>
    )
}

export default Section1