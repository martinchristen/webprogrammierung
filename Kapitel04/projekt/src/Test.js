import React, {Component} from 'react';


class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <h2>Dies ist ein Test (Komponente Test)</h2>
            {this.props.text}
        </>);
    }
}

export default Test;

