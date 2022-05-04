import React, { useState } from 'react'
import { Chart } from 'primereact/chart'
import { Menu, Space } from 'antd'
import { COLOR_HEADER } from '../constants/ColorConstant';
import { connect } from 'react-redux'
import Map from '../components/interactiveDataVisualizer/mapComponent'
import ActivityRadar from '../components/interactiveDataVisualizer/activityComponent';
import StressBarChart from '../components/interactiveDataVisualizer/stressComponent';


function InteractiveDataVisualizerContainer(props) {

    const [pageIndex, setPageIndex] = useState('activity');

    const onNavigationClick = (e) => {
        console.log('onNavigationClick', e)
        setPageIndex(e.key)
    }

    const items = [
        {
            label: 'Activity',
            key: 'activity',
            // icon: <MailOutlined />,
        },
        {
            label: 'Stress',
            key: 'stress',
            // icon: <AppstoreOutlined />,
            // disabled: true,
        },
        {
            label: 'Location',
            key: 'map', 
        },
    ];


    const getSubPage = () => {
        if (pageIndex === 'map') {
            return <Map
                style = {{ height: "100%" }}
            />
        }
        else if (pageIndex === 'activity') {
            return (
                <div>
                    <ActivityRadar />
                </div>
            )
        }
        else if (pageIndex === 'stress') {
            return <StressBarChart />
        }
        return <div></div>
    }

    return (
        <div style={props.style}>
            <Menu
                style={{ width: "100%", margin: "0 auto", marginBottom: "5px" }}
                onClick={onNavigationClick}
                selectedKeys={[pageIndex.toString()]}
                mode="horizontal"
                items={items}
            />
            { getSubPage() }
        </div>
    )
}


const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(InteractiveDataVisualizerContainer);