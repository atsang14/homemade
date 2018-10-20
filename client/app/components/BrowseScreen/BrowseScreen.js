import * as React from "react";
import {
	Text,
	TextInput,
	Image,
	NavigatorIOS,
	TouchableOpacity,
	Button,
	Alert,
	StyleSheet,
	View,
	ScrollView
} from "react-native";
import Map from "../Map/Map";
// import LogoTitle from "../ModalStack/LogoTitle";

export default class BrowseScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		// const params = navigation.state.params || {};

		return {
			// headerTitle: <LogoTitle />,
			// title: 'homemade'
			// headerLeft: (
			// 	<Button
			// 		onPress={() => navigation.navigate("MyModal")}
			// 		// onPress={() => Alert.alert("this is a button!")}
			// 		title="search"
			// 		// title="dropdown"
			// 		color="#fff"
			// 	/>
			// ),
			// headerRight: (
			// 	<Button
			// 		onPress={() =>
			// 			navigation.navigate("Cart", {
			// 				_id: 1,
			// 				name: "Taylor",
			// 				age: 25,
			// 				sex: "Male",
			// 				foodPreference: "Vegan"
			// 			})
			// 		}
			// 		// onPress={() => Alert.alert("this is a button!")}
			// 		title="cart"
			// 		// title="+1"
			// 		color="#fff"
			// 	/>
			// )
		};
	};

	// componentDidMount() {
	// 	this.props.navigation.setParams({ increaseCount: this._increaseCount });
	// }

	// state = {
	// 	count: 0
	// };

	// constructor(props) {
	// 	super(props);
	// 	this.state = { count: 0 };
	// }

	// _increaseCount = () => {
	// 	this.setState({ count: this.state.count + 1 });
	// 	console.log(this.state.count);
	// };

	// _updateCount = () => {
	// 	this.setState({ count: this.state.count });
	// 	console.log(this.state.count);
	// };

	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				{/* <Text>Home Screen</Text>
				<Button
					title="Go to Settings"
					onPress={() =>
						this.props.navigation.navigate("Settings", {
							_id: 1,
							name: "Taylor",
							age: 25,
							sex: "Male",
							foodPreference: "Vegan"
						})
					}
				/>
				<Button
					title="Go to Cart"
					onPress={() =>
						this.props.navigation.navigate("Cart", {
							_id: 1,
							name: "Taylor",
							age: 25,
							sex: "Male",
							foodPreference: "Vegan"
						})
					}
				/> */}
				{/* <Text onPress={this._updateCount}>{this.state.count}</Text> */}

				{/* <View style={styles.search}>
					<TextInput
						type="text"
						placeholder=" search for food or chef.."
						style={styles.foodSearch}
					/>
				</View>
				<View style={styles.location}>
					<TextInput
						type="text"
						placeholder=" input your location"
						style={styles.inputLocation}
					/>
				</View> */}

				{/* <ScrollView style={{ flex: 1 }}> */}
				{/* <View style={{ flex: 1 }}> */}
				<Map style={StyleSheet.absoluteFillObject} />
				{/* </View> */}
				{/* </ScrollView> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	// container: {
	// flex: 1,
	// flexDirection: "row",
	// backgroundColor: "#fff",
	// alignItems: "center"
	// justifyContent: "center"
	// },
	// nav: {
	// 	flex: 0.1,
	// 	flexDirection: "row",
	// 	backgroundColor: "#ffa500",
	// 	// alignItems: "center",
	// 	justifyContent: "space-between"
	// 	// height: 200
	// },
	// dropdown: {
	// 	// flex: 1,
	// 	// height: undefined,
	// 	// width: undefined,
	// 	// resizeMode: 'contain',

	// 	// flexDirection: 'column',
	// 	// alignSelf: 'center',
	// 	// position: 'absolute',
	// 	// justifyContent: "flex-start",
	// 	height: 40,
	// 	width: 40,
	// 	// borderRadius: 50,
	// 	marginTop: 20,
	// 	marginLeft: 10
	// },
	// header: {
	// 	// flex: 1,
	// 	fontSize: 35,
	// 	marginTop: 15,
	// 	marginLeft: 15,
	// 	// marginRight: 40,
	// 	// alignItems: "center",
	// 	// alignSelf: "center",
	// 	// justifyContent: "center"
	// },
	// cart: {
	// 	// flex: 0.3,
	// 	// height: undefined,
	// 	// width: undefined,
	// 	// resizeMode: 'contain',

	// 	// flexDirection: "column",
	// 	// alignSelf: "center",
	// 	// position: 'absolute',
	// 	// justifyContent: "flex-end",
	// 	height: 50,
	// 	width: 50,
	// 	// borderRadius: 50,
	// 	marginTop: 15,
	// 	marginRight: 5
	// },
	search: {
		flex: 0.1,
		flexDirection: "row",
		backgroundColor: "#ffa500"
	},
	foodSearch: {
		flex: 1,
		// flexDirection: 'row',
		borderWidth: 2,
		// width: 100,
		height: 40,
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5
	},
	location: {
		flex: 0.07,
		flexDirection: "row",
		backgroundColor: "#ffa500"
	},
	inputLocation: {
		flex: 1,
		// flexDirection: 'row',
		borderWidth: 2,
		// width: 100,
		height: 40,
		marginTop: -7,
		marginLeft: 5,
		marginRight: 5
	}
});
