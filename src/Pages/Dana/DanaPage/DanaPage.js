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
                    <div className="original-text">
                        <div className="poem-div">
                            <p className="poem-header">
                                <strong>Don't Let Me Be Wistful</strong><em>Dana Ward</em>
                            </p>
                            The heat out there this evening
                                <br /><br />
                            is contained heat like things keep applicable boxes
                                <br /><br />
                            at the ready then subsume their diverging constituent parts
                                <br /><br />
                            long ambivalent talks into midnight, all those
                                <br /><br />
                            glowy Sophia Coppola movies, Prosecco
                                <br /><br />
                            the sexiest records I know. I don’t feel
                                <br /><br />
                            how I know anymore to be more than something seeking
                                <br /><br />
                            my appalling lack of cinematic knowledge, fictive innocence
                                <br /><br />
                            & something like the break-down of those little boxes
                                <br /><br />
                            little tombs put their hands up in front of my mouth
                                <br /><br />
                            there’s a tacitly humiliating eulogy to drown out couldn’t feel
                                <br /><br />
                            much more stupid about feeling stupid over feeling
                                <br /><br />
                            stupid, living. Let me go & watch something
                                <br /><br />
                            moving several images some of them symbolize humility broken
                                <br /><br />
                            postures bloodshot eyes, intimately talking through this
                                <br /><br />
                            publicly I am not developing at all but just the same.
                                <a
                                className="poem-link"
                                href="https://www.poetryfoundation.org/poems/55982/dont-let-me-be-wistful"
                                target="_blank"
                                rel="noopener noreferrer"
                                >...
                                </a>
                            <div>
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
