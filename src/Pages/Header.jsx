import React, {Component} from "react";
export default class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
            <div className="row">
        <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Navbar</a>
       
       <div className="collapse navbar-collapse bg-color" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
            </li>
            </ul>
            <button className="btn btn-primary">Click me</button>

            
        </div>
        </nav>
        </div>
        </div>
        <div>

       
        </div>
        </div>
        <div>            
      
      </div>  
                
            </React.Fragment>
        )
    }
}