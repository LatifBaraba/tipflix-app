import { Link } from 'react-router-dom'
import { Grid, Row, Col, Panel, PanelGroup } from 'rsuite'

const TvSeries = () => {
    return (
        <div className="topTv">
            <div className="top-title">
                <h4>List Tv Series</h4>
                <Link>See More</Link>
            </div>
            <div className="listTv">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={6}>
                            <Panel shaded bordered bodyFill>
                                <img src="https://via.placeholder.com/240x240" height="240" />
                                <Panel header="RSUITE">
                                    <p>
                                        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                                    </p>
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={6}>
                            <Panel shaded bordered bodyFill>
                                <img src="https://via.placeholder.com/240x240" height="240" />
                                <Panel header="RSUITE">
                                    <p>
                                        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                                    </p>
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={6}>
                            <Panel shaded bordered bodyFill>
                                <img src="https://via.placeholder.com/240x240" height="240" />
                                <Panel header="RSUITE">
                                    <p>
                                        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                                    </p>
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={6}>
                            <Panel shaded bordered bodyFill>
                                <img src="https://via.placeholder.com/240x240" height="240" />
                                <Panel header="RSUITE">
                                    <p>
                                        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                                    </p>
                                </Panel>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default TvSeries
