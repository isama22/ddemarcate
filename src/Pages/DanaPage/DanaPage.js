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
                    <div className="original-text">
                        <p className="poem-header">
                            <strong>Don't Let Me Be Wistful</strong><em>Dana Ward</em>
                        </p>
                            <pre>{`
                                The heat out there this evening

                                is contained heat like things keep applicable boxes

                                at the ready then subsume their diverging constituent parts

                                long ambivalent talks into midnight, all those

                                glowy Sophia Coppola movies, Prosecco

                                the sexiest records I know. I don’t feel

                                how I know anymore to be more than something seeking

                                my appalling lack of cinematic knowledge, fictive innocence

                                & something like the break-down of those little boxes

                                little tombs put their hands up in front of my mouth

                                there’s a tacitly humiliating eulogy to drown out couldn’t feel

                                much more stupid about feeling stupid over feeling

                                stupid, living. Let me go & watch something

                                moving several images some of them symbolize humility broken

                                postures bloodshot eyes, intimately talking through this

                                publicly I am not developing at all but just the same.
                                 `}
                                <a
                                    className="poem-link"
                                    href="https://www.poetryfoundation.org/poems/55982/dont-let-me-be-wistful"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >...
                                </a>
                            </pre>
                        <DanaLines
                            className="dana-lines"
                            danaLines={this.state.danaLines}
                            handleGetAllDanaLines={this.props.handleGetAllDanaLines} 
                        />
                    </div>

                </div>
            </>
        );
    }
}

export default DanaPage;
