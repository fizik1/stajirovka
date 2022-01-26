import i_Stroke2 from '../../icons/Stroke2.png'
import i_alert from '../../icons/alert.png'
import React from 'react'
import { Link } from "react-router-dom";


function Form(){
    

    let visits= JSON.parse(localStorage.getItem('items'))||[];
    let inp1 = React.createRef()
    let inp2 = ''
    let inp3 = ''
    let inp4 = ''
    let inp5 = ''
    let inp6 = React.createRef()
    let inp7 = React.createRef()
    let inp8 = React.createRef()
    let inp9 = React.createRef()
    let inp10 = React.createRef()
    let inp11 = false
    let linkTo = '/'

    function checkHandler(){
        inp11 = true
    }
    
    const clickHanldler=(e)=>{
        console.log(e.target.value);
        if(e.target.id=='two'){
            inp2 = e.target.value
        }
        if(e.target.id=='three'){
            inp3 = e.target.value
        }
        if(e.target.id=='four'){
            inp4 = e.target.value
        }
        if(e.target.id=='five'){
            inp5 = e.target.value
        }
    }

    function handle(){
        if (inp1.current.value!=''&&inp3!=''&&inp5!=''&&inp6!=''&&inp11==true){
            let card = {
                t_title:inp1.current.value,
                main_tour:inp2,
                addition_tour:inp3,
                tour_country:inp4,
                region:inp5,
                start_point:inp6.current.value,
                arrival_time:inp7.current.value,
                end_point:inp8.current.value,
                ent_time:inp9.current.value,
                check:inp11

            }
            visits.push(card)
            let text = JSON.stringify(visits);
            console.log(text);
            localStorage.setItem('items',text)
            linkTo = ''
        }else alert('error')
    }



    return (
        <div className="form">
            <div className="nav">
                <h3>Samarqand</h3>
                <div className="buttons">
                    <p>Saved 7, October at 18:07</p>
                    <button className="btn1">Draft</button>
                    <Link to={`${linkTo}`}><button className="btn2" onClick={()=>(handle())}>Save</button></Link>
                    <button className="btn3">To Review</button>
                    <button className="btn4">More <img src={i_Stroke2} alt="" /></button>

                </div>
            </div>
            <div className='forma'>
                <h3>General information</h3>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Tour title*
                            <input type="text" ref={inp1} />
                        </label>
                    </div>
                    <div className='alert'>
                        <img src={i_alert} alt="" />
                        <p>Maximum 50 symbols</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Main tour type*
                            <select onChange={e=>clickHanldler(e)} id='two'  >
                                <option value="" key=""></option>
                                <option value="one" key="">bir</option>
                                <option value="two" key="">ikki</option>
                                <option value="three" key="">uch</option>
                            </select>
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Additional tour types*
                            <select onChange={e=>clickHanldler(e)} id='three'>
                                <option value="" key=""></option>
                                <option value="one" key="">Sigmbkr hufytenciv</option>
                                <option value="two" key="">Sigmbkr hufytenciv</option>
                                <option value="three" key="">Sigmbkr hufytenciv</option>
                            </select>
                        </label>
                    </div>
                    <div className='alert'>
                        <img src={i_alert} alt="" />
                        <p>Main tour type is displayed in tour card in the catalogue. You can check all available tour types here</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Tour destination / country*
                            <select onChange={e=>clickHanldler(e)} id='four'>
                                <option value="" key=""></option>
                                <option value="one" key="">Sigmbkr hufytenciv</option>
                                <option value="two" key="">Sigmbkr hufytenciv</option>
                                <option value="three" key="">Sigmbkr hufytenciv</option>
                            </select>
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Region
                            <select onChange={e=>clickHanldler(e)} id='five'>
                                <option value="" key=""></option>
                                <option value="one" key="">Sigmbkr hufytenciv</option>
                                <option value="two" key="">Sigmbkr hufytenciv</option>
                                <option value="three" key="">Sigmbkr hufytenciv</option>
                            </select>
                        </label>
                    </div>
                    <div className='alert'>
                        <img src={i_alert} alt="" />
                        <p>Main tour type is displayed in tour card in the catalogue. You can check all available tour types here</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Starting point (city)*
                            <input type="text" ref={inp6} placeholder='Starting city name' />
                        </label>
                    </div>
                    <div className='alert'>
                        <img src={i_alert} alt="" />
                        <p>Main tour type is displayed in tour card in the catalogue. You can check all available tour types here</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                        Arrival time (local):
                            <input type="text" ref={inp7} />
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Final destination (city)*
                            <input type="text" ref={inp8} placeholder='Starting city name' />
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                        Tour end time (local):
                            <input type="text" ref={inp9} />
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                        Enter a picture*
                        <input type="file" ref={inp10} />
                        </label>
                    </div>
                    <div className='alert'>
                        <img src={i_alert} alt="" />
                        <p>Main tour type is displayed in tour card in the catalogue. You can check all available tour types here</p>
                    </div>

                </div>
                <div className='row'>
                    <div className='check-div'>
                        <label onClick={checkHandler}>
                            <input type="checkbox" />
                            Access by link only
                        </label>
                    </div>
                    <div className='alert'>
                        <img src={i_alert} alt="" />
                        <p>Main tour type is displayed in tour card in the catalogue. You can check all available tour types here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Form;