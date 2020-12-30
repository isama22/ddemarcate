import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DanaLine from '../../components/DanaLine/DanaLine';


class DanaLines extends Component{
    render() {
        return (
            <div>
            <p style={{backgroundColor: "red"}}>dana lines go here</p>
    
            {this.props.danaLines.map(danaLine =>
                        <DanaLine
                          danaLine={danaLine} 
                          key={danaLine._id}
                          handleGetAllDanaLines={this.props.handleGetAllDanaLines}
                        />
                      )}
            </div>
        );
    }

}
export default DanaLines;