import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Space, Button, Card, Switch } from 'antd'
// import { Card } from 'primereact/card';
import SecuredImage from './securedImage';
import { connect } from 'react-redux'
import { IMAGE_SERVER_URL } from '../../constants/ServerAPI';
import { CheckOutlined, EditOutlined, EllipsisOutlined, CloseOutlined, ThunderboltFilled } from '@ant-design/icons';
import PhysiologicalComponent from '../interactiveDataVisualizer/physiologicalComponent';


function GalleriaCard(props) {


    return (
        <Card
            size="small"
            hoverable
            cover={
                <SecuredImage src={`${IMAGE_SERVER_URL}/${props.images[0]}`} />
            }
            style={{ fontSize: 12 }}
            actions={[
                <Switch key="stress"
                    checkedChildren="Stress"
                    unCheckedChildren="Neutral"
                    size="small" />,
                <Switch key="stress"
                    checkedChildren="Lifelog"
                    unCheckedChildren="Screenshot"
                    size="small" />
            ]}
        >
            <Card.Meta
                description="Thu, 2019-01-01 18:03:01"
            />
            <div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                    Dublin City University - Neutral
                </div>
                <PhysiologicalComponent />
            </div>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})


export default connect(mapStateToProps)(GalleriaCard);