import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { DatePicker, Space, TimePicker, Radio, Button, Divider, Tooltip } from 'antd'
import { SearchOutlined, FilterOutlined, CloseOutlined } from '@ant-design/icons'



function FilterPanelContainer(props) {

    const onDateRangePickerChange = (value, dateString) => {
        console.log('Selected Time: ', value)
        console.log('Formatted Selected Time: ', dateString)
    }

    const onDateRangePickerOk = (value) => {
        console.log('onOk: ', value)
    }

    const onSearchButtonClick = () => {

    }

    const onFilterButtonClick = () => {

    }

    const onCancelButtonClick = () => {

    }

    return (
        <div style={props.style}>
            <Space direction="vertical" size={8}>
                <Divider 
                    style={{ marginBottom: "1px", marginTop: "1px"}}
                    plain>Time</Divider>
                <DatePicker.RangePicker
                    style={{ width: "100%" }}
                    onChange={onDateRangePickerChange}
                    onOk={onDateRangePickerOk}
                />
                <TimePicker.RangePicker
                    style={{ width: "100%" }}
                />
                <Divider 
                    style={{ marginBottom: "1px", marginTop: "1px"}}
                    plain>Stress</Divider>
                <Radio.Group 
                    style={{ width: "100%" }}
                    defaultValue="all" buttonStyle="solid">
                    <Radio.Button value="stress">Stress</Radio.Button>
                    <Radio.Button value="neutral">Neutral</Radio.Button>
                    <Radio.Button value="all">All</Radio.Button>
                </Radio.Group>
                <Divider 
                    style={{ marginBottom: "3px", marginTop: "3px"}}
                    plain/>
                <Space direction="horizontal" size={4}>
                    <Button shape="round"
                        onClick={onSearchButtonClick} 
                    >
                        <SearchOutlined style={{ verticalAlign: "0.125em" }}/>
                        Search
                    </Button>
                    <Button shape="round"
                        onClick={onFilterButtonClick}
                    >
                        <FilterOutlined style={{ verticalAlign: "0.125em" }}/>
                        Filter
                    </Button>
                    <Button shape="round"
                        onClick={onCancelButtonClick}
                    >
                        <CloseOutlined style={{ verticalAlign: "0.125em" }}/>
                        Cancel
                    </Button>
                </Space>
            </Space>
        </div>
    )
}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(FilterPanelContainer)
