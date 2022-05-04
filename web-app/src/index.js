import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reducers/store';
import 'antd/dist/antd.css'
import 'leaflet/dist/leaflet.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<meta
				// Provide metadata of the web-app including name and the description
				name="description"
				content="Lifelog Stress Detection System"
			/>

			{/* <!-- ReactBootstrap --> */}
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
				integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
				crossorigin="anonymous"
			/>

			{/* <!-- Leaflet --> */}
			<link rel="stylesheet"
				href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
				integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
				crossorigin="" />

			<script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
				integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
				crossorigin=""></script>

			{/* <!-- Chart.js --> */}
			<script src="https://unpkg.com/primereact/core/core.min.js"></script>
			<script src="https://unpkg.com/primereact/chart/chart.min.js"></script>

			{/* <!-- PrimeReact --> */}
			<link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
			<link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
			<link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
			<link rel="stylesheet" href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css" />
			<script src="https://unpkg.com/primereact/core/core.min.js"></script>
			<script src="https://unpkg.com/primereact/card/card.min.js"></script>


			{/* <!-- Dependencies --> */}
			<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
			<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
			<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
			<script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>
			<script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>

			{/* <!-- Rechart.js --> */}
			{/* <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
			<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
			<script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
			<script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
 */}
			{/* <!-- Demo --> */}
			<script src="https://unpkg.com/primereact/core/core.min.js"></script>
			<script src="https://unpkg.com/primereact/slider/slider.min.js"></script>

			{/* // Plots */}
			<script type="text/javascript" src="https://unpkg.com/@ant-design/plots@latest/dist/plots.min.js"></script>
			{/* // Flowchart */}
			<script type="text/javascript" src="https://unpkg.com/@ant-design/flowchart@latest/dist/flowchart.min.js"></script>
			{/* // Maps */}
			<script type="text/javascript" src="https://unpkg.com/@ant-design/maps@latest/dist/maps.min.js"></script>
			{/* // Graphs */}
			<script type="text/javascript" src="https://unpkg.com/@ant-design/graphs@latest/dist/graphs.min.js"></script>

			<App />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
