import i_Stroke2 from '../../icons/Stroke2.png'
import i_alert from '../../icons/alert.png'


function Form(){
    return (
        <div className="form">
            <div className="nav">
                <h3>Samarqand</h3>
                <div className="buttons">
                    <p>Saved 7, October at 18:07</p>
                    <button className="btn1">Draft</button>
                    <button className="btn2">Save</button>
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
                            <input type="text" />
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
                            <select>
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
                            Additional tour types*
                            <select>
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
                            <select>
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
                            <select>
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
                            <input type="text" placeholder='Starting city name' />
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
                            <input type="text" />
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                            Starting point (city)*
                            <input type="text" placeholder='Starting city name' />
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='inputs'>
                        <label>
                        Tour end time (local):
                            <input type="text" />
                        </label>
                    </div>

                </div>
                <div className='row'>
                    <div className='check-div'>
                        <label>
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