import React,{Component} from 'react';
import Header from "./Header";
import './common/common.css';
import './Addsubscriber.css';
import {Link} from 'react-router-dom';

class Addsubscriber extends Component {
    constructor() {
        super();
        this.state={
            id : 0,
            name :'',
            phone:''
        }
        
    }

    inputChangeHandler=(e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        
    }
    onformSubmit=(e)=>{
        e.preventDefault();
        this.props.addsubscriberHandler(this.state);
        this.setState({id:0, name:'', phone:''})
        this.props.history.push("/");

    }

    render(){
         const { name, phone } = this.state;
        return(
            <div>
                 <Header heading="Add Subscriber"/>
                 <div className="component-body-container">
                  <Link to="/"><button className="custom-btn">Back</button></Link> 
                     <form className="subscriber-form" onSubmit={this.onformSubmit.bind(this)}>
                         <label htmlFor="name" className="label-control">Name</label><br/>
                         <input id="name" type="text" className="input-control" name='name' onChange={this.inputChangeHandler}/><br/><br/>
                         <label htmlFor="phone" className="label-control" >Phone</label><br/>
                         <input id="phone" type="text" className="input-control" name='phone' onChange={this.inputChangeHandler}/>
                         <div className="subscriber-info-container">
                             <span className="subscriber-to-add-heading">Subscriber to be added</span><br/>
                             <span className="subscriber-info">Name:{name}</span><br/>
                             <span className="subscriber-info">phone:{phone} </span> 
                         </div>
                            <button type="submit" className="add-btn custom-btn">Add</button> 
                     </form>
                 </div>

            </div>
        )
    }
}
export default Addsubscriber;