import React, {Component} from "react";

class Umrechner extends Component {
    constructor(props) {
        super(props);

        this.title = props.title;
        this.rate = props.rate;
        this.state = {source: 0, dest: 0};

        // Events registrieren:
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);

    }

    change(event) {
        var chf = event.target.value;
        this.setState({source: chf});
    }

    click(event) {
        this.setState({dest: this.state.source*this.rate});
    }

    render() {
        return (<>
            <h3>{this.title}</h3>
            <form action="#">
                <div>
                {this.props.src}: <input type="number" step="any" onChange={this.change} />
                </div>
                <div>
                {this.props.dst}: <input value={this.state.dest} type="number" step="any" readOnly/>   
                </div>
                <div>
                    <button onClick={this.click}>Convert</button>
                </div>
            </form>
        </>)        
    }


}

export default Umrechner;
