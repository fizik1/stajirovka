import i_home from '../../icons/home.png'
import i_stroke from '../../icons/Stroke1.png'
import i_vector from '../../icons/Vector.png'
import i_ellepse from '../../icons/Ellipse1.png'
import i_calendar from '../../icons/calendar1.png'
import { useState } from 'react'

import { Link } from "react-router-dom";

function Panel() {

    const [selected, setSelected] = useState(null)

    const toogle = (i) =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return(
        <div className="panel">
            <div className="my-tour">
                <h3>My Tours</h3>
                <span>16</span>
            </div>
            <div className="panel-list">
                <div className="item">
                    <div className='title' onClick={()=>toogle(1)}>
                        <div className='text'>
                            <img src={i_home} alt="" />
                            <h4>Add Tour</h4>
                        </div>
                        <img src={i_vector} alt="" />
                    </div>
                    <div className={selected === 1 ? 'content show': 'content'}>
                        <ul>
                            <li><img src={i_ellepse} alt="" /><Link to="/addTour">General information</Link></li>
                            <li><img src={i_ellepse} alt="" />Dates & price</li>
                            <li><img src={i_ellepse} alt="" />Cancellation police</li>
                            <li><img src={i_ellepse} alt="" />Day byday schedule</li>
                            <li><img src={i_ellepse} alt="" />Tour lider</li>
                            <li><img src={i_ellepse} alt="" />Terms & conditions</li>
                            <li><img src={i_ellepse} alt="" />Extra services</li>
                            <li><img src={i_ellepse} alt="" />Improtant informatons</li>
                            <li><img src={i_ellepse} alt="" />Photo</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div className='text'>
                            <img src={i_calendar} alt="" />
                            <h4>Orders</h4>
                        </div>
                        <img src={i_vector} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div className='text'>
                            <img src={i_calendar} alt="" />
                            <h4>Messages</h4>
                        </div>
                        <span>22</span>
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div className='text'>
                            <img src={i_calendar} alt="" />
                            <h4>Payments & Payouts</h4>
                        </div>
                        <img src={i_vector} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div className='text'>
                            <img src={i_calendar} alt="" />
                            <h4>Progress</h4>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div className='text'>
                            <img src={i_calendar} alt="" />
                            <h4>Previews</h4>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div className='text'>
                            <img src={i_calendar} alt="" />
                            <h4>Settings</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel;