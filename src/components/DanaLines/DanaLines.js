import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DanaLine from '../../components/DanaLine/DanaLine';


class DanaLines extends Component{
    render() {
        return (
            <div>
    
            {this.props.danaLines.map(danaLine =>
                        <DanaLine
                          danaLine={danaLine} 
                          key={danaLine._id}
                          handleGetAllDanaLines={this.props.handleGetAllDanaLines}
                          handleDeleteDanaLine={this.props.handleDeleteDanaLine}
                          user={this.props.user}
                        />
                      )}
            </div>
        );
    }

}
export default DanaLines;