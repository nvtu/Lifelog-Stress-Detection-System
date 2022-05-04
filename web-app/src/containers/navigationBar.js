import React, { useState, useEffect } from "react"
import { ButtonTieredMenu } from "../components/navigationBar/buttonTieredMenu"
import { SearchBar } from '../components/navigationBar/searchBar'
import { COLOR_HEADER } from "../constants/ColorConstant"
import LoginForm from "../components/loginForm"
import { Button } from "primereact/button"
import { connect } from 'react-redux'
import { setAuthToken } from '../actions/actionAuthToken'


function NavigationBar(props) {
    const [logined, setLogined] = useState(false);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        if (props.auth.accessToken !== '') {
            setLogined(true);
        }
        else setLogined(false);
    }, [props.auth.accessToken])

    const onCreate = () => {
        setVisible(!visible); // Hide the login form    
    };    

    const onLogout = () => {
        const params = {
            'username': '',
            'access': '',
            'refresh': '',
        }
        props.dispatch(setAuthToken(params.access, params.refresh))
        // Remove the token from localStorage
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
    }


    return (
        <div style={props.style}>
            <ButtonTieredMenu style={{ position: "absolute" }}/>
            <SearchBar style={{ margin: "0 auto", paddingBottom: "5px", position: "relative" }}/>
            {
                !logined ? 
                <Button 
                    className="p-button-sm"
                    style = {{ backgroundColor: COLOR_HEADER, 
                        border: "0px", 
                        margin: "5px",
                        marginRight: "10px",
                        position: "absolute",
                        right: "0px"
                    }}
                    icon="pi pi-sign-in"
                    label="Login"
                    onClick={() => {
                        setVisible(true);
                    }}
                /> :
                <Button 
                    className="p-button-sm"
                    style = {{ backgroundColor: COLOR_HEADER, 
                        border: "0px", 
                        margin: "5px",
                        marginRight: "10px",
                        position: "absolute",
                        right: "0px"
                    }}    
                    icon="pi pi-sign-out"
                    label="Logout | User: nvtu"
                    onClick={ onLogout }
                />
            }
            <LoginForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            /> 
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(NavigationBar)