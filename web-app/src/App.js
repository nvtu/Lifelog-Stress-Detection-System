import './App.css';
import NavigationBar from './containers/navigationBar';
import { Map } from './containers/mapContainer'
import { DataSummaryContainer } from './containers/dataSummaryContainer';
import GalleriaContainer from './containers/galleriaContainer';
import { COLOR_HEADER } from './constants/ColorConstant';

function App() {
	return (
		<div className="App">

			<div style={{ display: "flex" }}>
				<NavigationBar
					style={{
						backgroundColor: COLOR_HEADER,
						height: "50px",
						width: "80%",
						position: "fixed",
						zIndex: "9999"
					}}
				/>
				<div
					style={{
						backgroundColor: "#E7E7E7",
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
					<Map style={{ height: "350px" }} />
					<DataSummaryContainer 
						style={{ height: "100%", borderTop: "1px solid black" }} 
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
