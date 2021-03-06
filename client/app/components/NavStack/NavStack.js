import * as React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import BrowseScreen from "../BrowseScreen/BrowseScreen";
import Post from "../Post/Post";
import PostInfo from "../Post/PostInfo";
import AddPost from "../Post/AddPost";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import CartScreen from "../CartScreen/CartScreen";
import LogoTitle from "./LogoTitle";

const header = {
  headerTitle: <LogoTitle />,
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const BrowseStack = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen
    }
  },
  {
    navigationOptions: header
  }
);

const PostStack = createStackNavigator(
	{
		Search: {
			screen: Post
		},
		PostInfo: {
			screen: PostInfo
		},
		AddPost: {
			screen: AddPost
		}
	},
	{
		navigationOptions: header
	}
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  },
  {
    navigationOptions: header
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: header
  }
);

const CartStack = createStackNavigator(
  {
    Cart: {
      screen: CartScreen
    }
  },
  {
    navigationOptions: header
  }
);

export default createBottomTabNavigator(
  {
    Browse: BrowseStack,
    Search: PostStack,
    Profile: ProfileStack,
    Settings: SettingsStack,
    Cart: CartStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Browse") {
          iconName = `ios-planet${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `ios-person${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-settings${focused ? "" : "-outline"}`;
        } else if (routeName === "Cart") {
          iconName = `ios-cart${focused ? "" : "-outline"}`;
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
