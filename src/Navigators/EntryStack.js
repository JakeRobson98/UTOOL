import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Entry from "../Screens/Entry/EntryScreen";
import Login from "../Screens/Entry/LoginScreen";
import Signup from "../Screens/Entry/SignupScreen";
import Dashboard from "../Screens/Dashboard";
import Tab1 from "../Screens/Tabs/Tab1";
import Tab2 from "../Screens/Tabs/Tab2";
import Tab3 from "../Screens/Tabs/Tab3";
import Tab4 from "../Screens/Tabs/Tab4";

export const Tab1Nav = createStackNavigator({
	Tab1: {
		screen: Tab1,

	},
});

export const Tab2Nav = createStackNavigator({
	Tab2: {
		screen: Tab2,

	},
});

export const Tab3Nav = createStackNavigator({
	Tab3: {
		screen: Tab3,

	},
	Tab4:{
		screen: Tab4
	}
});

export const bottomNavBar = createBottomTabNavigator({
	Tab1: { screen: Tab1Nav},
	Tab2: { screen: Tab2Nav },
	Tab3: { screen: Tab3Nav }
});


export const AppStackNav = createStackNavigator({
	Entry: {
		screen: Entry,

	},
	Login: {
		screen: Login,
	},
	Signup: {
		screen: Signup,
	},

	Dashboard: {
		screen: bottomNavBar,
		navigationOptions: {
			header: null
		}
	}
});




const AppContainer = createAppContainer(AppStackNav);

export default AppContainer;