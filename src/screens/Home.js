import React, { useState, useReducer, useCallback, useEffect } from 'react'

// import Navbar from '../components/navbar'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

export default function Home() {

    const [search, setSearch] = useState('')
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body:JSON.stringify({ email: credentials.email , password : credentials.password })
        })
        response = await response.json()

        setFoodCat(response[1]);
        setFoodItem(response[0])
        console.log(response)
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <div>

            <div><Navbar2 /></div>
            {/* <div>Body home k</div> */}
            <div>

                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain : !important" }}>
                    <div className="carousel-inner" id='carousel'>

                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div class="d-flex justify-content-center" >
                                <input class="form-control me-2 bg-dark" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
                                    setSearch(e.target.value)
                                }}/>
                                {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x700/?cake" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?mango" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?banana" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    foodCat != [] ?
                        foodCat.map((data) => {
                            return (
                                // <div></div>
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3'>
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem != [] ?
                                        foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                            .map((filterItem) => {
                                                return (
                                                    <div key={filterItem._id} className="col-12 col-md-6 col-lg-3">
                                                        <Card foodItem = {filterItem}
                                                            options={filterItem.options[0]}
                                                            imgSrc={filterItem.img}
                                                        >
                                                        </Card>
                                                    </div>
                                                )
                                            }) :
                                        <div>no data foound </div>
                                    }


                                    {/* <div>hellloo</div> */}
                                </div>
                            )
                        }) :
                        <div>
                            nonnonnoe
                        </div>
                }
                {/* <Card></Card> */}


            </div>

            <div><Footer /></div>
        </div>
    )
}
