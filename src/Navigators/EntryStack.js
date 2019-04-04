import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Entry from "../Screens/Entry/EntryScreen";
import Login from "../Screens/Entry/LoginScreen";
import Signup from "../Screens/Entry/SignupScreen";
import Dashboard from "../Screens/Dashboard";
import ListingScreen from "../Screens/Tabs/Listing/ListingScreen";
import MessagingScreen from "../Screens/Tabs/Messaging/MessagingScreen";
import BrowseScreen from "../Screens/Tabs/Browse/BrowseScreen";
import ProfileScreen from "../Screens/Tabs/Profile/ProfileScreen";

export const BrowseStack = createStackNavigator({
	Browse: {
		screen: BrowseScreen,
	},
});

export const ProfileScreenStack = createStackNavigator({
	Profile: {
		screen: ProfileScreen,
	},
});

export const ListingScreenStack = createStackNavigator({
	Listing: {
		screen: ListingScreen,
	},

});
export const MessagingScreenStack = createStackNavigator({
	Messaging:{
		screen: MessagingScreen,
	},
});

export const bottomNavBar = createBottomTabNavigator({
	Browse: { screen: BrowseStack},
	Profile: { screen: ProfileScreenStack },
	Listing: { screen: ListingScreenStack },
	Messaging: { screen: MessagingScreenStack }
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