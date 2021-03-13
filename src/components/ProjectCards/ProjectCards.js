import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProjectCard from '../../containers/ProjectCard/ProjectCard';
import beeImage from '../../assets/images/bee-your-bookkeeper.png';
import sqlImage from '../../assets/images/sql-search-engine.png';


const ProjectCards = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ProjectCard
                        image={beeImage}
                        title="Bee Your Bookkeeper"
                        description="A web-based family budget app utilizing React and AWS Lambda, API Gateway, DynamoDB."
                        details="To Be Add"
                        demo="https://master.da8crtrtwkv7x.amplifyapp.com/yourbee/"
                    />
                </Col>
                <Col>
                    <ProjectCard
                        image={sqlImage}
                        title="Structure Data Search Engine"
                        description="A search engine for structure data, utilizing reverse indexing and lazy data fetching."
                        details="To Be Add"
                        demo="https://yoshuanl.github.io/searchEngine.github.io/"
                        sourceCode="https://github.com/yoshuanl/searchEngine.github.io" />
                </Col>
            </Row>
        </Container>
    )
};

export default ProjectCards;
