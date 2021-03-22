import React from 'react';

class Hobby extends React.Component{
    constructor(props){
        super();
        this.state={
            eating : false,
            coding : false,
            sleeping : false
        }
    }
    updateInput = (e)=>{
        this.setState({
            ...this.state,
            [e.target.name] : e.target.checked
        })
    }
    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header text-white bg-dark">
                                Select your favorate!
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-input-check" name="eating" onClick={this.updateInput} /> Eating
                                        
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-input-check" name="coding" onClick={this.updateInput} /> Coding
                                        
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-input-check" name="sleeping" onClick={this.updateInput} /> Sleeping
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {
                                        this.state.eating ? 
                                        <div className="card m-2 animated jello shadow">
                                            <div className="card-header bg-dark text-white">
                                                Your Selection!
                                                </div>
                                                <div className="card-body">
                                                    Lorem ispusm is one of the dummy text
                                                </div>
                                        </div>     : null
                                    }

{
                                        this.state.coding ? 
                                        <div className="card m-2 animated bounce shadow tada">
                                            <div className="card-header bg-cl">
                                                Your Selection!
                                                </div>
                                                <div className="card-body">
                                                    Lorem ispusm is one of the dummy text
                                                </div>
                                        </div>     : null
                                    }

{
                                        this.state.sleeping ? 
                                        <div className="card m-2">
                                            <div className="card-header bg-c2 animated bounce shadow animate__backInLeft">
                                                Your Selection!
                                                </div>
                                                <div className="card-body">
                                                    Lorem ispusm is one of the dummy text
                                                </div>
                                        </div>     : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hobby;