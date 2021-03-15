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

        var detailArray = [];
        for (let id in this.props.details) {
            detailArray.push(
                {
                    idx: id,
                    content: this.props.details[id]
                }
            )
        }

        const detailOutput = detailArray.map(x => {
            return <li key={x.id}>{x.content}</li>
        })

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div className="Card">
                    <img src={this.props.image} width="600" height="330" />
                    <div className="Description">
                        <h2><strong>{this.props.title}</strong></h2>
                        <p>{this.props.description}</p> <br />
                        <div className="SeeMoreBtn">
                            <Button variant="outline-info" onClick={(event) => this.flipHandler(event)}>See More</Button>
                        </div>
                    </div>
                </div>
                <div className="Card" onMouseLeave={(event) => this.flipHandler(event)}>
                    <div className="Description" >
                        <ul>{detailOutput}</ul> <br />
                        <Button variant="outline-info" href={this.props.demo} target="_blank">Demo</Button>{' '}
                        {sourceButton}
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}

export default ProjectCard;