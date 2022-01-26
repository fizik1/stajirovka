import { Link } from "react-router-dom";



function TotalVisits() {
    let json = localStorage.getItem('items')
    let array = JSON.parse(json)
    console.log(array);
    let card = array.map((card, key)=>{
        return(
            <div className="card">
                    <div className="image">
                        <img src="/img/card1.png" alt="error" />
                        <p>{card.t_title}</p>
                    </div>
                    <div className="content">
                        <div className="date">
                            <select>
                                <option value="one" key="">Nov 30 - Dec 02</option>
                            </select>
                        </div>
                        <div className="seats">
                            <p>Seats left:</p>
                            <select>
                                <option value="one" key="">1</option>
                            </select>
                            <p>from 10</p>
                        </div>
                        <div className="seen">
                            <div>
                                <img src="/icons/eye.png" alt="" />
                                <p>7</p>
                            </div>
                            <div>
                                <img src="/icons/basket.png" alt="" />
                                <p>3</p>
                            </div>
                            <div className="button">
                                <button>Ready</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })

    return(
        
        <div className="visits">
            <div className="nav">
                <h3>Total visits</h3>
                <div className="filter">
                    <form>
                        <select>
                            <option value="one" key="">Tour name</option>
                        </select>
                        <select>
                            <option value="one" key="">Tour status</option>
                        </select>
                        <select>
                            <option value="one" key="">Start date</option>
                        </select>
                        <select>
                            <option value="one" key="">Data of completion</option>
                        </select>
                        <select>
                            <option value="one" key="">A country</option>
                        </select>
                        <select>
                            <option value="one" key="">Region</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="add-btn">
                <Link to='/addTour'><button>Add New Tour</button></Link>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="image">
                        <img src="/img/card1.png" alt="error" />
                        <p>Samarqand</p>
                    </div>
                    <div className="content">
                        <div className="date">
                            <select>
                                <option value="one" key="">Nov 30 - Dec 02</option>
                            </select>
                        </div>
                        <div className="seats">
                            <p>Seats left:</p>
                            <select>
                                <option value="one" key="">1</option>
                            </select>
                            <p>from 10</p>
                        </div>
                        <div className="seen">
                            <div>
                                <img src="/icons/eye.png" alt="" />
                                <p>7</p>
                            </div>
                            <div>
                                <img src="/icons/basket.png" alt="" />
                                <p>3</p>
                            </div>
                            <div className="button">
                                <button>Ready</button>
                            </div>
                        </div>
                    </div>
                </div>
                {card}
            </div>
        </div>
    
    )
}

export default TotalVisits;