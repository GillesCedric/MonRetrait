import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'native-base';

export class BestResult extends React.Component {
	render() {
		return (
			<ListItem ListItem style={styles.liste} key={this.props.index} >
				{this.props.visibility ?
					<Text style={styles.label}>-{">"} Retrait {this.props.index + 1} : {this.props.bestResult}</Text>
					: <Text style={styles.label}>Ce montant est déja le plus optimal</Text>
				}
			</ListItem >

		)
	}
}
const styles = StyleSheet.create({
	label: {
		color: 'white',
	},
	container: {
		marginTop: 10,
		marginLeft: -210
	},
	liste: {
		backgroundColor: '#0275d8',
		marginLeft: -150,
		marginBottom: 5,
		borderRadius: 5,

	}
})
