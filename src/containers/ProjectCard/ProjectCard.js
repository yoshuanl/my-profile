import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button } from 'react-bootstrap';

import './ProjectCard.css';

class ProjectCard extends Component {
    state = {
        isFlipped: false,
    }

    flipHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => (
            { isFlipped: !prevState.isFlipped }
        ));
    }

    render() {
        var sourceButton = null;
        if (this.props.sourceCode) {
            sourceButton = <Button variant="outline-info" href={this.props.sourceCode} target="_blank">Source Code</Button>
        }

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div className="Card">
                    <img src={this.props.image} width="600" height="330" />
                    <div className="Description">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p> <br />
                        <div className="SeeMoreBtn">
                            <Button variant="outline-info" onClick={(event) => this.flipHandler(event)}>See More</Button>
                        </div>
                    </div>
                </div>
                <div className="Card" onMouseLeave={(event) => this.flipHandler(event)}>
                    <div className="Description" >
                        <p>{this.props.details}</p> <br />
                        <Button variant="outline-info" href={this.props.demo} target="_blank" margin="5px">Demo</Button>{' '}
                        {sourceButton}
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}

export default ProjectCard;