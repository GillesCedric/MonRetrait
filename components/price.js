import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Text, Content } from 'native-base'
export class Price extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(text) {
		this.props.onTemperatureChange(text);
	}

	render() {
		return (
			<View>
				<TextInput
					style={styles.input}
					value={this.props.value}
					onChangeText={this.handleChange}
				/>
			</View>

		)
	}

}
const styles = StyleSheet.create({
	input: {
		width: 280,
		height: 45,
		borderColor: 'gray',
		borderWidth: 1,
		color: 'white',
		borderRadius: 10,
		marginBottom: '8%',
	},
	// button: {
	// 	width: 130,
	// 	alignItems: "center",
	// 	paddingLeft: 20,
	// 	marginLeft: '25%'
	// }
})
