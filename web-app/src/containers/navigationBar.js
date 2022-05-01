import React, { useState } from "react"
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

    const onCreate = () => {
        setVisible(!visible); // Hide the login form    
        setLogined(!logined); // Set the login status to true
    };    

    const onLogout = () => {
        setLogined(!logined); // Set the login status to false
        const params = {
            'username': '',
            'access': '',
            'refresh': '',
        }
        props.dispatch(setAuthToken(params.access, params.refresh))
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


const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(NavigationBar)