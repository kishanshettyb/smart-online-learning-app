import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import {
	getFocusedRouteNameFromRoute,
	NavigationContainer,
} from "@react-navigation/native";
import { AuthContext } from "../screens/utils";
import { MyTabBar } from "../components";
import { DrawerContent } from "../screens/DrawerContent";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import {
	AboutUs,
	LoadingScreen,
	SignIn,
	Home,
	SignUp,
	ForgotPassword,
	Profile,
	EditProfile,
	Categories,
	Cart,
	ContactUs,
	RateUs,
	Search,
	Courses,
	CourseDetails,
	CourseMoreDetails,
	PrivacyPolicy,
	Subscribe,
	MyCourses,
	Faq,
	Notifications,
	Settings,
	VideoPlayer,
	GetInTouch,
	AuthorProfile,
	OrderComplete,
	CoursesTabScreen,
	CategoriesTabScreen,
	SearchTabScreen,
} from "../screens";
import categories from "../constants/categories";
const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
	return (
		<AuthStack.Navigator headerMode="none">
			<AuthStack.Screen
				name="SignIn"
				component={SignIn}
				options={{ title: "Sign In" }}
			/>
			<AuthStack.Screen
				name="SignUp"
				component={SignUp}
				options={{ title: "Sign Up" }}
			/>
			<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
		</AuthStack.Navigator>
	);
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
	return (
		<ProfileStack.Navigator headerMode="none">
			<ProfileStack.Screen name="Profile" component={Profile} />
			<ProfileStack.Screen name="EditProfile" component={EditProfile} />
		</ProfileStack.Navigator>
	);
};

const CoursesStack = createStackNavigator();
const CoursesStackScreen = () => {
	return (
		<CoursesStack.Navigator headerMode="none">
			<CoursesStack.Screen
				name="CoursesTabScreen"
				component={CoursesTabScreen}
			/>
			<CoursesStack.Screen name="CourseDetails" component={CourseDetails} />
			<CoursesStack.Screen name="VideoPlayer" component={VideoPlayer} />
			<CoursesStack.Screen name="AuthorProfile" component={AuthorProfile} />
			<CoursesStack.Screen name="Cart" component={Cart} />
			<CoursesStack.Screen
				name="CourseMoreDetails"
				component={CourseMoreDetails}
			/>
		</CoursesStack.Navigator>
	);
};

const CategoriesStack = createStackNavigator();
const CategoriesStackScreen = () => {
	return (
		<CategoriesStack.Navigator headerMode="none">
			<CategoriesStack.Screen
				name="CategoriesTabScreen"
				component={CategoriesTabScreen}
			/>
			<CategoriesStack.Screen name="VideoPlayer" component={VideoPlayer} />
			<CategoriesStack.Screen name="AuthorProfile" component={AuthorProfile} />
			<CategoriesStack.Screen name="Cart" component={Cart} />
			<CategoriesStack.Screen name="CourseDetails" component={CourseDetails} />
			<CategoriesStack.Screen
				name="CourseMoreDetails"
				component={CourseMoreDetails}
			/>
		</CategoriesStack.Navigator>
	);
};

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
	return (
		<SearchStack.Navigator headerMode="none">
			<SearchStack.Screen name="SearchTabScreen" component={SearchTabScreen} />
			<SearchStack.Screen name="VideoPlayer" component={VideoPlayer} />
			<SearchStack.Screen name="AuthorProfile" component={AuthorProfile} />
			<SearchStack.Screen name="Cart" component={Cart} />
			<SearchStack.Screen name="CourseDetails" component={CourseDetails} />
			<SearchStack.Screen
				name="CourseMoreDetails"
				component={CourseMoreDetails}
			/>
		</SearchStack.Navigator>
	);
};
const CartStack = createStackNavigator();
const CartStackScreen = () => {
	return (
		<CartStack.Navigator headerMode="none">
			<CartStack.Screen name="Cart" component={Cart} />
			<CartStack.Screen name="OrderComplete" component={OrderComplete} />
		</CartStack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
	return (
		<Tabs.Navigator
			tabBar={(props) => <MyTabBar {...props} />}
			screenOptions={{
				showIcon: true,
				showLabel: false,
				lazyLoad: true,
				style: {
					backgroundColor: "transparent",
					borderTopWidth: 0,
					position: "absolute",
					left: 50,
					right: 50,
					bottom: 20,
					height: 100,
				},
			}}
		>
			<Tabs.Screen
				options={({ route }) => ({
					tabBarVisible: showBottomNavigation(
						getFocusedRouteNameFromRoute(route)
					),
				})}
				name="home"
				component={HomeStackScreen}
			/>
			<Tabs.Screen
				options={({ route }) => ({
					tabBarVisible: showBottomNavigation(
						getFocusedRouteNameFromRoute(route)
					),
				})}
				name="grid"
				component={CategoriesStackScreen}
			/>
			<Tabs.Screen
				options={({ route }) => ({
					tabBarVisible: showBottomNavigation(
						getFocusedRouteNameFromRoute(route)
					),
				})}
				name="play-circle"
				component={CoursesStackScreen}
			/>
			<Tabs.Screen
				options={({ route }) => ({
					tabBarVisible: showBottomNavigation(
						getFocusedRouteNameFromRoute(route)
					),
				})}
				name="search"
				component={SearchStackScreen}
			/>
			<Tabs.Screen
				options={({ route }) => ({
					tabBarVisible: showBottomNavigation(
						getFocusedRouteNameFromRoute(route)
					),
				})}
				name="shopping-cart"
				component={CartStackScreen}
			/>
		</Tabs.Navigator>
	);
};

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation, route }) => {
	return (
		<HomeStack.Navigator headerMode="none">
			<HomeStack.Screen name="Home" component={Home} />
			<HomeStack.Screen name="Search" component={Search} />
			<HomeStack.Screen name="Categories" component={Categories} />
			<HomeStack.Screen name="VideoPlayer" component={VideoPlayer} />
			<HomeStack.Screen name="Courses" component={Courses} />
			<HomeStack.Screen name="CourseDetails" component={CourseDetails} />
			<HomeStack.Screen name="Cart" component={Cart} />
			<HomeStack.Screen name="AuthorProfile" component={AuthorProfile} />
			<HomeStack.Screen
				name="CourseMoreDetails"
				component={CourseMoreDetails}
			/>
		</HomeStack.Navigator>
	);
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
	return (
		<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name="Home" component={TabsScreen} />
			<Drawer.Screen name="Profile" component={ProfileStackScreen} />
			<Drawer.Screen name="Settings" component={Settings} />
			<Drawer.Screen name="Categories" component={Categories} />
			<Drawer.Screen name="MyCourses" component={MyCourses} />
			<Drawer.Screen name="Notification" component={Notifications} />
			<Drawer.Screen name="Subscribe" component={Subscribe} />
			<Drawer.Screen name="AboutUs" component={AboutUs} />
			<Drawer.Screen name="RateUs" component={RateUs} />
			<Drawer.Screen name="Faq" component={Faq} />
			<Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
			<Drawer.Screen name="ContactUs" component={ContactUs} />
			<Drawer.Screen name="GetInTouch" component={GetInTouch} />
			<Drawer.Screen name="OrderComplete" component={OrderComplete} />
		</Drawer.Navigator>
	);
};
export function showBottomNavigation(route) {
	const routeName = route;
	switch (routeName) {
		case "Categories":
			return false;
		case "Search":
			return false;
		case "Courses":
			return false;
		case "CourseDetails":
			return false;
		case "CourseMoreDetails":
			return false;
		case "VideoPlayer":
			return false;
		case "AuthorProfile":
			return false;
		case "Cart":
			return false;
		case "OrderComplete":
			return false;
		default:
			return true;
	}
}

export default function App({ navigation }) {
	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case "RESTORE_TOKEN":
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case "SIGN_IN":
					if (action.token) {
						AsyncStorage.setItem("userToken", action.token);
					}
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case "SIGN_OUT":
					AsyncStorage.removeItem("userToken");
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		}
	);

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;

			try {
				userToken = await AsyncStorage.getItem("userToken");
			} catch (e) {
				// Restoring token failed
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: "RESTORE_TOKEN", token: userToken });
		};

		bootstrapAsync();
	}, []);

	const authContext = React.useMemo(
		() => ({
			signIn: async (data) => {
				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token

				dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
			},
			signOut: () => dispatch({ type: "SIGN_OUT" }),
			signUp: async (data) => {
				// In a production app, we need to send user data to server and get a token
				// We will also need to handle errors if sign up failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token

				dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
			},
		}),
		[]
	);

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					{state.isLoading ? (
						// We haven't finished checking for the token yet
						<Stack.Screen name="Splash" component={LoadingScreen} />
					) : state.userToken == null ? (
						// No token found, user isn't signed in
						<Stack.Screen
							name="SignIn"
							component={AuthStackScreen}
							options={{
								title: "Sign in",
								// When logging out, a pop animation feels intuitive
								animationTypeForReplace: state.isSignout ? "pop" : "push",
							}}
						/>
					) : (
						// User is signed in
						<Stack.Screen name="Home" component={DrawerScreen} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
