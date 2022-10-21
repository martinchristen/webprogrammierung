import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Umrechner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {meter: 0, kilometer: 0, render: true};
        this.changeMeter = this.changeMeter.bind(this);
        this.changeKilometer = this.changeKilometer.bind(this);
        this.buttonclicked = this.buttonclicked.bind(this);
    }

    buttonclicked(event) {
        this.setState({render: !this.state.render});
    }

    changeMeter(event) {
        const neuerWert = event.target.value;
        this.setState({kilometer: neuerWert/1000});
        this.setState({meter: neuerWert});

    }

    changeKilometer(event) {
        const neuerWert = event.target.value;
        this.setState({meter: neuerWert*1000});
        this.setState({kilometer: neuerWert});

    }

    render() {

        return (
            <>
                {this.state.render &&
                <Grid container>
                    <Grid style={{margin: 20}}>
                        <TextField value={this.state.meter} 
                        onChange={this.changeMeter} 
                        label="Meter"/>
                    </Grid>
                    <Grid style={{margin: 20}}>
                        <TextField value={this.state.kilometer} 
                        onChange={this.changeKilometer} 
                        label="Kilometer"/>
                    </Grid>
                </Grid>
                }

                <Button onClick={this.buttonclicked}>Click</Button>
            </>
        )
    }
}

export default Umrechner;
