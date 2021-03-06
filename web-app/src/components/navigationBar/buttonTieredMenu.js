import React, { useRef } from 'react'
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';
import { COLOR_HEADER } from '../../constants/ColorConstant';

export function ButtonTieredMenu(props) {
    const menu = useRef(null);
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',

                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            separator:true
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off',
            command: () => {

            }
        }
    ];

    return (
        <div style={props.style} >
            <TieredMenu 
                model={items}
                style={{ fontSize: "15px"}} 
                popup ref={menu} 
                id="overlay_tmenu" />
            <Button 
                className="p-button-sm"
                icon="pi pi-bars"
                style={{ 
                    backgroundColor: COLOR_HEADER, 
                    border: "0px", 
                    margin: "5px" 
                }}
                label="Menu"
                onClick={(event) => menu.current.toggle(event)} 
                aria-haspopup 
                aria-controls="overlay_tmenu"
            />
        </div>
    )
}