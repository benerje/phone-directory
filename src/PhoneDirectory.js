import React, { Component } from 'react';
import Addsubscriber from './Addsubscriber';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class PhoneDirectory extends Component {
    constructor() {
        super()
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'bunny',
                phone: '7396335969'
            }, {
                id: 2,
                name: 'pavan',
                phone: '8885123270'
            }
            ]

        }

    }
    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }
    
    addsubscriberHandler = (newsubscriber) => {

        let subscriberList = this.state.subscriberList;

        if (subscriberList.length > 0) {
            newsubscriber.id = subscriberList[subscriberList.length - 1].id + 1;

        }
        else {
            newsubscriber.id = 1;
        }
        subscriberList.push(newsubscriber);
        this.setState({ subscriberList: subscriberList });
        console.log(this.state.subscriberList);
    }

    render() 
             {
        
        return (
            <Router>
                <div className='main-container'>
                    <Route exact path='/' render={(props) => < App {...props} subscribers_list_to_show={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}  />}/>
                    <Route exact path='/Addsubscriber' render={(props,history) => < Addsubscriber history={history} {...props} addsubscriberHandler={this.addsubscriberHandler} />}/>
                </div>
            </Router>
        )
    }

}
export default PhoneDirectory;