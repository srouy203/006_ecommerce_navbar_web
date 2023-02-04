import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">LS Music</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">More</a>
                            </li>
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-success ms-2" type="submit">Rigister</button>
                            <button class="btn btn-outline-dark ms-2" type="submit"> Login</button>
                            <button class="btn btn-outline-danger ms-2" type="submit">Cart (0)</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
