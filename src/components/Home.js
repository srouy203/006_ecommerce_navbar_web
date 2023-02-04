import React from 'react'
import './Home.css';

function Home() {
    return (
        <div>
            <div class="card text-bg-dark border-0">
                <img src="/asset/pic-1.jpg" class="card-img" alt="bg" height='750px'/>
                    <div class="card-img-overlay">
                        <div className="container d-flex flex-column justify-content-center">
                            <h5 class="card-title display-3 fw-bolder mb-0">EASY TO SHOPPING HERE</h5>
                            <p class="card-text lead fs-3">Shop everyday to make yourself good</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Home
