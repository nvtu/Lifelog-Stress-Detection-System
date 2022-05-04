import React, { useState, useEffect } from 'react'
import GalleriaCard from '../components/galleria/galleriaCard'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'antd'


function GalleriaContainer(props) {    

    return (
        <Row gutter={[16, 24]} style={{ margin: "0 auto", padding: "5px" }}>
            {
                props.galleria.images.length > 0 ? 
                props.galleria.images.map((images, id) => {
                    return (
                        <Col className="gutter-row" span={6}>
                            <GalleriaCard key={id} images={images} />
                        </Col>
                    )
                })
                : <div>No images to display</div>
            }
        </Row>
    )
}


const mapStateToProps = (state) => ({
    galleria: state.galleria,
})

export default connect(mapStateToProps)(GalleriaContainer)