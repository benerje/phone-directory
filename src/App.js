
import React,{ Component } from 'react';
import Header from "./Header";
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component { 
 
  
    onDeletedClick = (subscriberId) => {
      this.props.deleteSubscriberHandler(subscriberId); 
    }
    render()  {
       return (
         
         <div className="component-container">
           <Header heading="Phone Directory"/>
           <div className="component-body-container">
            <Link to="/Addsubscriber"><button className="custom-btn add-btn"> Add </button></Link>
            <div className="grid-container heading-container">
              <span className="grid-item name-heading"> Name </span>
              <span className="grid-item phone-heading"> Phonenumber </span>
            </div>
             {
               this.props.subscribers_list_to_show.map(sub=>{
                 return <div key={sub.id} className="grid-container">
                   <span className="grid-item">{sub.name}</span>
                   <span className="grid-item">{sub.phone}</span>
                   <span className="grid-item action-btn-container">
                   <button className="custom-btn delete" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                   </span>
                   </div>
               })
             }

            </div>
         </div>   
        );
    }
}  

export default App;
