import React, { Component } from 'react';
import './DanaPage.css';
import DanaLines from '../../components/DanaLines/DanaLines'
import * as danaLinesAPI from '../../services/danaLines-api'

class DanaPage extends Component {
state = {
    danaLines: []

}

async componentDidMount() {
    const danaLines = await danaLinesAPI.getAll()
    this.setState({ danaLines })
}
    render() {
        return (
            <>
                <div className="dana-page">
                    <p>dana page</p>

                <DanaLines 
                className="dana-lines"
                danaLines={this.state.danaLines}
                handleGetAllDanaLines={this.props.handleGetAllDanaLines}/>
                </div>
            </>
        );
    }
}

export default DanaPage;
