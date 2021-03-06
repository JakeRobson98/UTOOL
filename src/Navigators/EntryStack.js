import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Entry from "../Screens/Entry/EntryScreen";
import Login from "../Screens/Entry/Login/LoginScreen";
import Signup from "../Screens/Entry/Resgister/SignupScreen";
import Dashboard from "../Screens/Dashboard";

import ListingScreen from "../Screens/Tabs/Listing/ListingScreen";
import NewListingScreen from "../Screens/Tabs/Listing/NewListingScreen";

import MessagingScreen from "../Screens/Tabs/Messaging/MessagingScreen";
import BrowseScreen from "../Screens/Tabs/Browse/BrowseScreen";
import ProfileScreen from "../Screens/Profile/profile";
import Details from '../Screens/Profile/details';
import Register from "../Screens/Entry/Resgister/RegisterFormScreen";

export const BrowseStack = createStackNavigator({
	Browse: {
		screen: BrowseScreen,
		navigationOptions: {
			header: null
		}
	},
});

export const ProfileScreenStack = createStackNavigator({
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			header: null
		}
	},
	Details: {
		screen: Details,
		navigationOptions: {
		}
	}
	,
});

export const ListingScreenStack = createStackNavigator({
	Listing: {
		screen: ListingScreen,
		navigationOptions: {
			header: null
		}
	},
	NewListing:{
		screen: NewListingScreen,
		navigationOptions: {
		}
	}

});
export const MessagingScreenStack = createStackNavigator({
	Messaging:{
		screen: MessagingScreen,
	},
});

export const bottomNavBar = createBottomTabNavigator({
	Messaging: { screen: MessagingScreenStack },
	Browse: { screen: BrowseStack},
	Listing: { screen: ListingScreenStack },
	Profile: { screen: ProfileScreenStack },

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
	SignupPart2: {
		screen: Register,
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