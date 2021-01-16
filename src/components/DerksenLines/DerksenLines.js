import React, {Component} from 'react';
import DerksenLine from '../../components/DerksenLine/DerksenLine';


class DerksenLines extends Component{
    render() {
        return (
            <div>
    
            {this.props.derksenLines.map(derksenLine =>
                        <DerksenLine
                          derksenLine={derksenLine} 
                          key={derksenLine._id}
                          handleGetAllDerksenLines={this.props.handleGetAllDerksenLines}
                          handleDeleteDerksenLine={this.props.handleDeleteDerksenLine}
                          user={this.props.user}
                        />
                      )}
            </div>
        );
    }

}
export default DerksenLines;