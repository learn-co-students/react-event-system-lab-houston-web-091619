// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component { // create a EyesOnMe React component.

    render() {
        return( //In that component, render a button.
                //On that button, add event handlers that listens for the focus and blur events.
            <button onFocus={this.goodEvent} onBlur={this.blurEvent}>what a button</button> 
        )
    }
    goodEvent = () => { //When the focus event fires, use console.log to print out the text 'Good!'.
        console.log('Good!')
    } 

    blurEvent = () => { //When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
        console.log('Hey! Eyes on me!')
    }
}

