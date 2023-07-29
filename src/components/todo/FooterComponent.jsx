import {AuthContext} from "./security/AuthContext"
import { useContext } from "react";

function FooterComponent(){
    
    // const authContext = useContext(AuthContext)

    // console.log(`Footer Component - ${authContext.number}`)

    return(
        <footer className="footer">
            <div className="container">
                <hr/> F O O T E R 
            </div>
        </footer>
    )
}

export default FooterComponent