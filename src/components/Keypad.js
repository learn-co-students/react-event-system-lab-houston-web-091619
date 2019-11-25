// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

    render() {
        return(
            <input type="password" ////In that component, render an input with the right type.
            onKeyUp={this.event}/> // On that input, add an event handler that listens for the keyUp event.
        )
    }

    event = () => { //When that event fires,
        console.log('Entering password...') //use console.log to print out the text 'Entering password...'.
    }
}