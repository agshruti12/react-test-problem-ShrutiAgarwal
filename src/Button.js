import React, { Component } from 'react';

class Button extends Component {
    state = {  
        isThanks: 1
    };

    handleClick = () => {
        const newValue = (this.state.isThanks) === 0 ? 1 : 0;
        this.setState({ isThanks: newValue});
    }

    render() { 
        return <React.Fragment>
            <button onClick={this.handleClick} className='btn btn-secondary btn-sm'>{this.formatText()}</button>
            </React.Fragment>;
    }

    formatText() {
        const { isThanks } = this.state;
        return isThanks === 0 ? 'Thanks' : 'Click Me';
    }
}
 
export default Button;