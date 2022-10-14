import React, {Component} from "react";

class Umrechner extends Component {
    constructor(props) {
        super(props);

        this.rate = 1.03;
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
            <h3>Umrechner Franken zu Euro</h3>
            <form action="#">
                <div>
                CHF: <input type="number" step="any" onChange={this.change} />
                </div>
                <div>
                EUR: <input value={this.state.dest} type="number" step="any" readOnly/>   
                </div>
                <div>
                    <button onClick={this.click}>Convert</button>
                </div>
            </form>
        </>)        
    }


}

export default Umrechner;
