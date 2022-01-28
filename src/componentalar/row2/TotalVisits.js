import { Link, useNavigate } from "react-router-dom";



function TotalVisits() {

    let navigate = useNavigate();

    let json = localStorage.getItem('items')||Boolean(false)
    console.log(json);
    if (json==false){
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
                <div className="cards" id="cards">
                   <h4>Hozircha malumot yo'q</h4>
                </div>
            </div>
            
        )
    }else {
        let array = JSON.parse(json)

        console.log(localStorage);
        let count= JSON.parse(localStorage.getItem('seen'))||1;
        
        const countF = ()=>{
            count+=1
            localStorage.setItem('seen', count)
        }
        
        
        console.log(count);
    
        // const finish = ()=>{
    
        // }
        
    
    
    
        
        
    
        let cart = array.map((card, key)=>{

            const handlerEdit = ()=>{
                let uzgaruvchi = {
                    let1:card.t_title,
                    let2:card.main_tour,
                    let3:card.addition_tour,
                    let4:card.tour_country,
                    let5:card.region,
                    let6:card.start_point,
                    let7:card.arrival_time,
                    let8:card.end_point,
                    let9:card.ent_time,
                    let10:card.formdata,
                    let11:card.check,
                    kalit:key+1
                };
                let uzgar = JSON.stringify(uzgaruvchi);
                localStorage.setItem('uzgaruvchi', uzgar)
                console.log(localStorage.getItem('uzgaruvchi'))
                navigate('/CopiedForm')
            }

            let raqam= card.start_point
            raqam=parseInt(raqam)

            let rasm = '/Joylar/'+card.formdata
    
            card.seen+=1
    
    
            let box = []
        
            for (let i =1; i<raqam;i++){
                box.push(i)
            }
        
            let options= box.map((son,key)=>{
                return <option value="one" key={key}>{son}</option>
            })
            console.log(array);
            
            return(
                <div className="card">
                        <div className="image">
                            <img src={rasm} alt="error" />
                            <p>{card.t_title}</p>
                        </div>
                        <div className="content">
                            <div className="date">
                                <select>
                                    <option value="one" key="">{card.main_tour}</option>
                                    <option value="one" key="">{card.addition_tour}</option>
                                    <option value="one" key="">{card.tour_country}</option>
                                    <option value="one" key="">{card.region}</option>
                                </select>
                            </div>
                            <div className="seats">
                                <p>Seats left:</p>
                                <select className="bir" >
                                    {options}
                                </select>
                                <p>from {card.start_point}</p>
                            </div>
                            <div className="seen">
                                <div>
                                    <img src="/icons/eye.png" alt="" />
                                    <p>{count}</p>
                                </div>
                                <div>
                                    <img src="/icons/basket.png" alt="" />
                                    <p>3</p>
                                </div>
                                <div className="button">
                                    <button onClick={(e)=>handlerEdit(e)}>Ready</button>
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
                <div className="cards" id="cards">
                   {cart}
                </div>
                {countF()}
            </div>
            
        )
    }
    
    


    
}

export default TotalVisits;