import React, {Fragment} from 'react';
import Img1 from '../assets/Img1.jpeg';
import Img2 from '../assets/Img2.jpeg';
import Img3 from '../assets/Img3.jpeg';
import Img4 from '../assets/Img4.jpeg';


class Cards extends React.Component{
    render(){
        return(

            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={Img1} className="img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Paris</h4>
                                    <p className="card-text text-justify">These license terms are an agreement between Microsoft Corporation (or based on where you live, one of its affiliates) and you. Please read them. They apply to the software.</p>
                                    <button className="btn btn-dark mx-auto">Book Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img src={Img2} className="img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">India</h4>
                                    <p className="card-text text-justify">These license terms are an agreement between Microsoft Corporation (or based on where you live, one of its affiliates) and you. Please read them. They apply to the software.</p>
                                    <button className="btn btn-dark mx-auto">Book Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img src={Img3} className="img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">London</h4>
                                    <p className="card-text text-justify">These license terms are an agreement between Microsoft Corporation (or based on where you live, one of its affiliates) and you. Please read them. They apply to the software.</p>
                                    <button className="btn btn-dark mx-auto">Book Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img src={Img4} className="img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Turkey</h4>
                                    <p className="card-text text-justify">These license terms are an agreement between Microsoft Corporation (or based on where you live, one of its affiliates) and you. Please read them. They apply to the software.</p>
                                    <button className="btn btn-dark mx-auto">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}
export default Cards;