import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class Result extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		result: null
	// 	}
	// 	setTimeout(() => {
	// 		this.setState({ result: this.props.result })
	// 	}, 2000);
	// }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.label}>Montant des frais : {this.props.result ? this.props.result : 0} FCFA</Text>
			</View>
		)

	}

}
const styles = StyleSheet.create({
	label: {
		color: 'white',
	},
	container: {
		marginTop: 50,
		marginLeft: -180
	}
})
