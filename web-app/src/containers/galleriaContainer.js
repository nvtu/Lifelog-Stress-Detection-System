import React, { useState, useEffect } from 'react'
import { GalleriaCard } from '../components/galleria/galleriaCard'
import { connect } from 'react-redux'


function GalleriaContainer(props) {    

    useEffect(() => {
        console.log(props.auth)
    }, [props.auth.access])

    return (
        <div>
            <GalleriaCard />
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(GalleriaContainer)