import React, { Component } from 'react';
import './DanaPage.css';
import DanaLines from '../../../components/DanaLines/DanaLines'
import * as danaLinesAPI from '../../../services/danaLines-api'
import { Link } from 'react-router-dom'

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
                    <div className="dana-original-text">
                        <div className="dana-poem-div">
                            <p className="poem-header">
                                <strong>Between Here & There</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Dana Ward</em>
                            </p>
                                Let me speak with expressive
                                <br /><br />
                                hesitation & a feeling for
                                <br /><br />
                                interment why even
                                <br /><br />
                                lineate what isn’t broken by
                                <br /><br />
                                music let me speak with
                                <br /><br />
                                inextricable reluctance.
                                <br /><br />
                                I want to tear the heart
                                <br /><br />
                                from refused convalescence
                                <br /><br />
                                & feed it those long fronds
                                <br /><br />
                                of river bed grass. I want to
                                <br /><br />
                                tear the heart out of style
                                <br /><br />
                                & put it between
                                <br /><br />
                                utter thrall & the infancy
                                <br /><br />
                                of all things impure.
                                <br /><br />
                                Torn out, a flame thickens
                                <br /><br />
                                between us
                                <a
                                className="poem-link"
                                href="https://www.poetryfoundation.org/poems/55983/between-here-there"
                                target="_blank"
                                rel="noopener noreferrer"
                                >...
                                </a>
                            <div className="lines-component">
                                <DanaLines
                                    danaLines={this.state.danaLines}
                                    handleGetAllDanaLines={this.props.handleGetAllDanaLines}
                                    handleDeleteDanaLine={this.props.handleDeleteDanaLine}
                                    user={this.props.user}
                                />
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

export default DanaPage;
