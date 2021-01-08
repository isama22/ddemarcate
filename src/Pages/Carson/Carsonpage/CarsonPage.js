import React, { Component } from 'react';
import './CarsonPage.css';
import CarsonLines from '../../../components/CarsonLines/CarsonLines'
import * as carsonLinesAPI from '../../../services/carsonLines-api'
import { Link } from 'react-router-dom'

class CarsonPage extends Component {
    state = {
        carsonLines: []

    }

    async componentDidMount() {
        const carsonLines = await carsonLinesAPI.getAll()
        this.setState({ carsonLines })
    }
    render() {
        return (
            <>
                <div className="carson-page">
                    <div className="original-text">
                        <div className="poem-div">
                            <p className="poem-header">
                                <strong>The Glass Essay</strong><em>Anne Carson</em>
                            </p>
                            <pre>{`
            I
            
            I can hear little clicks inside my dream.
            Night drips its silver tap
            down the back.
            At 4 A.M. I wake. Thinking

            of the man who
            left in September.
            His name was Law.

            My face in the bathroom mirror
            has white streaks down it.
            I rinse the face and return to bed.
            Tomorrow I am going to visit my mother.


            SHE

            She lives on a moor in the north.
            She lives alone.
            Spring opens like a blade there.`}
                                <a href="https://www.poetryfoundation.org/poems/48636/the-glass-essay" target="_blank" rel="noopener noreferrer" id="link">...</a>
                            </pre>

                            <div>
                                <CarsonLines
                                    carsonLines={this.state.carsonLines}
                                    handleGetAllCarsonLines={this.props.handleGetAllCarsonLines}
                                    handleDeleteCarsonLine={this.props.handleDeleteCarsonLine}
                                    user={this.props.user}
                                />
                            </div>
                        </div>
                        <div className="start-over-link">
                            <Link to="/addcarsonline" >add another line</Link>
                            <Link to="/enter" >try another poem</Link>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default CarsonPage;
