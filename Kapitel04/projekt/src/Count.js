import React, {Component} from 'react';

class Count extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 2};

        // Event Handler
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (<>
             {this.state.count} <br/>
            <button onClick={this.increase}>Click</button>
        </>);
    }

}

export default Count;