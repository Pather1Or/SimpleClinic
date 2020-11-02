import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col } from 'react-bootstrap';
import convertToDate from '../../helpers/convertToDate'

const PatientPrescription = ({
    prescription: {
        drug,
        units,
        directions,
        notes,
        startDate,
        endDate,
    },
    index
}) => {
    const start = convertToDate(startDate);
    const end = convertToDate(endDate);

    return (
        <Card className="elevationSmall" style={{ marginBottom: "0.5rem" }}>
            <Card.Body>
                <Card.Title className="card-description row-text-space">Prescription {index+1}</Card.Title>
                <Container>
                    <Row className="row-text-space">
                        <Col className="font-weight-bold">Drug</Col>
                        <Col sm={8}>{drug}</Col>
                    </Row>
                    <Row className="row-text-space">
                        <Col className="font-weight-bold">Units</Col>
                        <Col sm={8}>{units}</Col>
                    </Row>
                    <Row className="row-text-space">
                        <Col className="font-weight-bold">Directions</Col>
                        <Col sm={8}>{directions}</Col>
                    </Row>
                    <Row className="row-text-space">
                        <Col className="font-weight-bold">Notes</Col>
                        <Col sm={8}>{notes}</Col>
                    </Row>
                    <Row className="row-text-space">
                        <Col className="font-weight-bold">Start Date</Col>
                        <Col sm={8}>{start}</Col>
                    </Row>
                    <Row className="row-text-space">
                        <Col className="font-weight-bold">End Date</Col>
                        <Col sm={8}>{end}</Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

PatientPrescription.propTypes = {
    prescription: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default PatientPrescription;
