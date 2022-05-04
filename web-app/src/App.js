import './App.css';
import React, { useEffect } from 'react' 
import { setAuthToken } from './actions/actionAuthToken';
import NavigationBar from './containers/navigationBar';
import FilterPanelContainer from './containers/filterPanelContainer';
import InteractiveDataVisualizerContainer from './containers/interactiveDataVisContainer';
import GalleriaContainer from './containers/galleriaContainer';
import { COLOR_HEADER } from './constants/ColorConstant';
import { PropertySafetyFilled } from '@ant-design/icons';
import { connect } from 'react-redux'

function App(props) {

	useEffect(() => {
		if ('accessToken' in sessionStorage) {
			const access = sessionStorage.getItem('accessToken');
			const refresh = sessionStorage.getItem('refreshToken');
			const username = sessionStorage.getItem('username');
			props.dispatch(setAuthToken(username, access, refresh));
		}
	}, []);


	return (
		<div className="App">

			<div style={{ display: "flex" }}>
				<NavigationBar
					style={{
						backgroundColor: COLOR_HEADER,
						height: "50px",
						width: "80%",
						position: "fixed",
						zIndex: "2"
					}}
				/>
				<div
					style={{
						width: "80%",
						height: "100%",
						position: "relative",
						marginTop: "50px",
						zIndex: 0
					}}
				>
					<GalleriaContainer />
				</div>
				<div
					style={{
						width: "20%",
						height: "100%",
						right: 0,
						position: "fixed",
						borderLeft: "1px solid black"
					}}>
					{/* <Map style={{ height: "350px" }} /> */}
					<FilterPanelContainer style={{
						margin: "0 auto",
						marginBottom: "10px"
					}} />

					<InteractiveDataVisualizerContainer
						style={{ height: "100%", borderTop: "1px solid black", alignItems: "center" }}
					/>
				</div>
			</div>
		</div>
	);
}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(App);
