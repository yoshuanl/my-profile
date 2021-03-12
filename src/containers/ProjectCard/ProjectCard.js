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
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div className="Card">
                    <img src={this.props.image} width="600" height="330" />
                    <div className="Description">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                        <Button variant="outline-info" onClick={(event) => this.flipHandler(event)}>See More</Button>
                    </div>
                </div>
                <div className="Card" onMouseLeave={(event) => this.flipHandler(event)}>
                    <div className="Description" >
                        <p>{this.props.details}</p> <br />
                        <Button variant="outline-info" href={this.props.demo} target="_blank">Demo</Button>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}

export default ProjectCard;