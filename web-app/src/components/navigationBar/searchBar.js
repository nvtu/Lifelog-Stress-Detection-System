import React from 'react';
import { InputText } from 'primereact/inputtext'


export function SearchBar(props) {
    return (
        <div className="p-input-icon-left" 
            style={ props.style } >
            <i className='pi pi-search' 
                style={{ marginLeft: "5px" }} />
            <InputText placeholder="Search" 
                style={{ height: "40px", width: "450px", margin: "5px" }}/>
        </div>
    )
}