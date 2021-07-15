import React from 'react';


export default class LightSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    flipSwitch = () => {
        if (this.state.position === "On") {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>
                {/* <button onClick={() => { this.setState({ position: "Off" }) }}>Flip Switch</button> */}
            </fieldset>
        );
    }
}

