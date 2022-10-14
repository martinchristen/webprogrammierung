import React, {Component} from "react";

class Uhr extends Component {
    constructor(props) {
        super(props);

        this.state = {time: 'please wait, time is calculated'};
        this.updateTime = this.updateTime.bind(this);

        
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 500);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateTime() {
        var datum = new Date();
        var Uhrzeit = datum.toTimeString();

        this.setState({time: Uhrzeit});
    }

    render() {
        return(<>
            {this.state.time}
        </>)
    }

}

export default Uhr;
