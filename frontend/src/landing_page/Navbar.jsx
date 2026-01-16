// import "../index.css"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#FFF"}}>
                <div class="container-fluid" style={{height:"50px"}}>
                    <Link class="navbar-brand" to="/"><img src="media/images/logo.svg" style={{width:"25%", paddingLeft:"30px", marginLeft:"30%"}} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent " style={{marginLeft:"20%"}}>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            <li class="nav-item">
                                <Link class="nav-link"style={{marginLeft:"20px"}} to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"style={{marginLeft:"20px"}} to="/product">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " style={{marginLeft:"20px"}} to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"style={{marginLeft:"20px"}} to="/support">Support</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/login">Login</Link>
                            </li>
                            
                           
                        </ul>
                       
                    </div>
                </div>
            </nav>
        
    )
}