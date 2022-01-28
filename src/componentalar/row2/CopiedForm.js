

import i_Stroke2 from '../../icons/Stroke2.png'
import i_alert from '../../icons/alert.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';


function CopiedForm(){

    let navigate = useNavigate();
    console.log('salom');
    // let visits= JSON.parse(localStorage.getItem('uzgaruvchi'))
        // inp1 = React.createRef(),
        // inp2 = '',
        // inp3 = '',
        // inp4 = '',
        // inp5 = '',
        // inp6 = React.createRef(),
        // inp7 = React.createRef(),
        // inp8 = React.createRef(),
        // inp9 = React.createRef(),
        // inp10 = '',
        // inp11 = false;
    // document.getElementById('inp1').value = visits.let1
    console.log(visits.let1);
    console.log(document.getElementById('inp1'));

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
    const changeFile = (e)=>{
        inp10 = e.target.files[0].name
    }
    
    async function handle(){
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
                formdata:inp10,
                check:inp11,
                seen:1,
                id:Date.now()
            }
            visits.push(card)
            let text = JSON.stringify(visits);
            localStorage.setItem('items',text)
            navigate('/')
        }else alert("Ma'lumotlar to'liq yuklanmadi")
    }


    return (
        <div className="form">
            <div className="nav">
                <h3>Samarqand</h3>
                <div className="buttons">
                    <p>Saved 7, October at 18:07</p>
                    <button className="btn1">Draft</button>
                    <button className="btn2" onClick={handle}>Save</button>
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
                            <input type="text" ref={inp1} id='inp1' />
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
                                <option value="bi" key="">bir</option>
                                <option value="ikki" key="">ikki</option>
                                <option value="uch" key="">uch</option>
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
                                <option value="Sigmbkr hufytenciv" key="">Sigmbkr hufytenciv</option>
                                <option value="hufytenciv Sigmbkr" key="">hufytenciv Sigmbkr </option>
                                <option value="asfadfasd hufytenci" key="">asfadfasd hufytenciv</option>
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
                                <option value="Sigmbkr hufytenciv" key="">Sigmbkr hufytenciv</option>
                                <option value="hufytenciv Sigmbkr" key="">hufytenciv Sigmbkr </option>
                                <option value="asfadfasd hufytenci" key="">asfadfasd hufytenciv</option>
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
                                <option value="one" key="">Samarkand</option>
                                <option value="two" key="">Bukhara</option>
                                <option value="three" key="">Xiva</option>
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
                            <input type='number' ref={inp6} placeholder='Starting city name'  />
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
                        <input type="file" onChange={e=>changeFile(e)} />
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


export default CopiedForm;