import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "leaflet/dist/leaflet.css";
import "semantic-ui-css/semantic.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";

import "leaflet-control-geocoder/dist/Control.Geocoder.js";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
