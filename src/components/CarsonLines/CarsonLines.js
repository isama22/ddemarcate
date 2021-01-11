import React, {Component} from 'react';
import CarsonLine from '../../components/CarsonLine/CarsonLine';


class CarsonLines extends Component{
    render() {
        return (
            <div>
    
            {this.props.carsonLines.map(carsonLine =>
                        <CarsonLine
                          carsonLine={carsonLine} 
                          key={carsonLine._id}
                          handleGetAllCarsonLines={this.props.handleGetAllCarsonLines}
                          handleDeleteCarsonLine={this.props.handleDeleteCarsonLine}
                          user={this.props.user}
                        />
                      )}
            </div>
        );
    }

}
export default CarsonLines;