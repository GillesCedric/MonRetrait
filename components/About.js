import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class AboutScreen extends React.Component {

	render() {
		return (
			<ScrollView style={{ backgroundColor: 'black' }}>
				<View style={styles.container}>
					<Text style={styles.title}>A Propos</Text>
					<Text style={styles.label}>Mon Retrait est une application mobile développée par ANOUMEDEM Cédric, étudiant de deuxième année a l'IUC vous permettant de calculer le montant de vos frais de retrait ORANGE et MTN, et vous permet aussi d'obtenir la méthode de retrait la plus optimale, minimisant les frais de retrait.</Text>
					<View style={styles.footer}>
						<Text style={styles.footer_text}>Email: nguefackgilles@gmail.com / Tél: 698158192</Text>
						<Text style={styles.footer_text}>{'\u00A9'}Copyright GillesCedric.dev 2020</Text>
						<Text style={styles.footer_text}>Version 1.0.2</Text>
					</View>

				</View>
			</ScrollView>

		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'black'
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 35,
		marginTop: '12%'
	},
	label: {
		color: 'white',
		fontWeight: 'bold',
		marginTop: '8%',
		fontSize: 15,
		marginBottom: '75%',
		lineHeight: 20,
		textAlign: "justify",
		margin: 10
	},
	footer: {
		alignItems: "center"
	},
	footer_text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 12,
		marginBottom: '2%',
		lineHeight: 20,
	}
})