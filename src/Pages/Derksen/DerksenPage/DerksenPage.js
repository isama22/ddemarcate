import React, { Component } from 'react';
import './DerksenPage.css';
// import DanaLines from '../../../components/DanaLines/DanaLines'
import * as derksenLinesAPI from '../../../services/derksenLines-api'
import { Link } from 'react-router-dom'

class DerksenPage extends Component {
    state = {
        derksenLines: []

    }

    async componentDidMount() {
        const derksenLines = await derksenLinesAPI.getAll()
        this.setState({ derksenLines })
    }
    render() {
        return (
            <>
                <div className="dana-page">
                    <div className="dana-original-text">
                        <div className="dana-poem-div">
                            <p className="poem-header">
                                <strong>In Memory of My Heavy Metal Years</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Jeff Derksen</em>
                            </p>
                            There goes the
                            <br /><br />
                            aluminum, the antimony, the arsenic
                            <br /><br />
                            the barium, the cadmium,
                            <br /><br />
                            the cesium, the gadolinium
                            <br /><br />
                            the lead
                            <br /><br />
                            the mercury
                            <br /><br />
                            the nickel, the thalium, and
                            <br /><br />
                            the tin.
                            <br /><br /> 
                            <br /><br />
                            There goes that job spraying lawns
                            <br /><br />
                            with chemicals, driving the Merc
                            <br /><br />
                            three-quarter ton
                            <br /><br />
                            with a tank on the back
                            <br /><br />
                            and no brakes
                            <br /><br />
                            through West Vancouver, bouncing
                            <br /><br />
                            the wheels against the curb
                            to stop
                            <br /><br />
                            and on the steep
                            <br /><br />
                            majesterial streets
                            <br /><br />
                            that afford such views
                            <br /><br />
                                <a
                                className="poem-link"
                                href="https://www.poetryfoundation.org/poems/146552/in-memory-of-my-heavy-metal-years"
                                target="_blank"
                                rel="noopener noreferrer"
                            >...
                                </a>
                            <div>
                                {/* <DanaLines
                                    danaLines={this.state.danaLines}
                                    handleGetAllDanaLines={this.props.handleGetAllDanaLines}
                                    handleDeleteDanaLine={this.props.handleDeleteDanaLine}
                                    user={this.props.user}
                                /> */}
                            </div>
                        </div>
                        <div className="start-over-link">
                            <Link to="/adddanaline" >add another line</Link>
                            <Link to="/enter" >try another poem</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DerksenPage;
