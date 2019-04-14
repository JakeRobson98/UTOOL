import React, { Component } from "react";
import AppStackNav from "./src/Navigators/EntryStack";

import { Provider } from 'react-redux'
import store from './src/store/index';

export default class App extends Component {
	render() {
		return (
		<Provider store={store}>
			<AppStackNav />
		</Provider>);
	}
}