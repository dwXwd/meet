import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        errorText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
          this.setState({
            numberOfEvents: '',
            errorText: 'Please enter a number between 1 and 32',
          })
        } else {
          this.setState({
            numberOfEvents: value
          });
        }
        this.props.updateNumberOfEvents(event.target.value);
      };

    render () {

        return (
            <div className='numberOfEvents'>
                <input 
                type='number'
                className='inputNumberOfEvents'
                onChange={this.handleInputChanged}
                value={this.state.numberOfEvents}
                />
            </div>
        )
    }
}

export default NumberOfEvents;