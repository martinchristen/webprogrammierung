import React, {Component} from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {count: this.props.countdown, msg: ""};
        this.interval = null;
    
        // Event-Handler registrieren:
        this.update = this.update.bind(this);
        this.start_timer = this.start_timer.bind(this);
    }

    update() {
        this.setState({ count: this.state.count - 1 });
        if (this.state.count <= 1) {
            this.setState({msg: "FERTIG"});
            this.setState({count: ""});
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    start_timer() {
        this.setState({count: this.props.countdown, msg: ""});

        if (this.interval != null)
        {
            clearInterval(this.interval);
        }

        this.interval = setInterval(this.update, 1000);
    }


    render() {
        return (
        <>
            <hr/>
            <h1>Timer {this.props.countdown} Sekunden</h1>
            <p>{this.state.count}</p>
            <p>{this.state.msg}</p>
            <button onClick={this.start_timer}>Start</button> 
            <hr/>
        </>)
    }
}

export default Timer;
