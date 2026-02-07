import { Link } from "react-router-dom"
const Navbar = () => {

    return(
        <div>
            <h3>Navbar</h3>
            <div>
                {/* 
                  
                  link is a tag provided by react router dom that do not reload when we move from one page to other.

                  import link from react router dom to use link 

                  link is use in place of anchor tag

                */}
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contactpage'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar