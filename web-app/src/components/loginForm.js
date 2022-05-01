import React from 'react'
import { Modal, Input, Form, notification } from 'antd'
import './css/loginForm.css'
import { connect } from 'react-redux'
import { fetchData } from '../actions/fetchData'
import { setAuthToken } from '../actions/actionAuthToken'
import { AUTH_USER_API } from '../constants/ServerAPI'
import { NOTIFICATION_DURATION, NOTIFICATION_PLACEMENT } from '../constants/NotificationDuration'


function LoginForm(props) {
    const [form] = Form.useForm()

    const onSubmitLoginInfo = ({ username, password }) => {
        console.log(username, password)
        const params = {
            'username': username,
            'password': password,
        }
        props.dispatch(fetchData(AUTH_USER_API, 'POST', params))
            .then(res => {
                const { access, refresh } = res
                props.dispatch(setAuthToken(username, access, refresh))
                notification.success({
                    message: 'Login Success',
                    description: 'Welcome to the Lifelog Stress Detection System',
                    placement: NOTIFICATION_PLACEMENT,
                    duration: NOTIFICATION_DURATION,
                })
                props.onCreate();
            })
            .catch(err => {
                notification.error({
                    message: 'Login Error',
                    description: 'Username or Password is incorrect',
                    placement: NOTIFICATION_PLACEMENT,
                    duration: NOTIFICATION_DURATION,
                })
            })
    }

    return (
        <Modal
            centered
            visible={props.visible}
            title="Login"
            okText="Sign in"
            cancelText="Cancel"
            onCancel={props.onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onSubmitLoginInfo(values)
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >


            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                autoComplete='on'
            >
                <Form.Item
                    className="field"
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Username',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Password',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>

        </Modal>
    )
}


const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(LoginForm);