import React, { useState, useEffect } from 'react'
import { fetchBlobImage } from "../../actions/fetchData";
import { connect } from 'react-redux'
import { Image } from 'antd'


function SecuredImage(props) {
    const DEFAULT_IMAGE_URL = 'assets/blank.png'
    const [imageURL, setImageURL] = useState(DEFAULT_IMAGE_URL)

    useEffect(() => {
        if (props.src !== undefined) {
            if (props.src !== DEFAULT_IMAGE_URL) {
                props.dispatch(fetchBlobImage('GET', `${props.src}`, props.auth.accessToken)).then(
                    blobImageURL => setImageURL(blobImageURL)
                )
            }
            else setImageURL(DEFAULT_IMAGE_URL)
        }
    }, [props.src])

    return (
        <Image style = { props.style } src = { imageURL } />
    );
}


const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps)(SecuredImage);