import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <Link to = "/" className="navbar-brand">ExerciseTracker</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Exercises<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link" >Create User</Link>
                        </li>
                        </ul>
                        
                    </div>
                    
            </nav>
            </div>
        )
    }
}

export default Navbar;