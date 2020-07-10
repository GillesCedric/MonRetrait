import React from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Price } from './price';
import { Button, List, Text, Drawer } from 'native-base'
import { Result } from './result';
import { BestResult } from './bestresult';
import { FadeInAnimation } from './FadeInAnimation';
import { Sidebar } from './sidebar';

export default class HomeScreen extends React.Component {
	closeDrawer() {
		return this.drawer._root.close()
	}
	openDrawer() {
		return this.drawer._root.open()
	}
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			screen: this.props.name,
			result: 0,
			bestResult: [],
			fraisTotal: 0,
			flag: false
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(value) {
		this.setState({ value: value })
	}
	alert = (value) => {
		this.setState({ flag: false })
		Alert.alert(
			'Erreur',
			value,
			[
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
			],
			{ cancelable: false },
		);

	}
	calculMTNPrice = () => {
		const price = parseInt(this.state.value)
		let frais = 0
		if (price > 0 && price <= 5000) {
			frais = 100
		} else if (price > 0 && price <= 10000) {
			frais = 150
		}
		else if (price > 0 && price <= 25000) {
			frais = 400
		}
		else if (price > 0 && price <= 30000) {
			frais = 650
		}
		else if (price > 0 && price <= 50000) {
			frais = 700
		}
		else if (price > 0 && price <= 75000) {
			frais = 1200
		}
		else if (price > 0 && price <= 100000) {
			frais = 1700
		}
		else if (price > 0 && price <= 200000) {
			frais = 2150
		}
		else if (price > 0 && price <= 300000) {
			frais = 2300
		}
		else if (price > 0 && price <= 400000) {
			frais = 2400
		}
		else if (price > 0 && price <= 500000) {
			frais = 2500
		}
		else if (price > 0 && price > 500000) {
			this.alert('Le montant maximal d\'un retrait est de 500.000 FCFA')
		} else {
			this.alert('Veuillez enter un montant valide')
		}
		this.setState({ result: frais })
		this.calculBestMTNMethod()
	}
	calculOrangePrice = () => {
		const price = parseInt(this.state.value)
		let frais = 0
		if (price > 0 && price <= 6500) {
			frais = (price * 3) / 100
		} else if (price > 0 && price <= 10000) {
			frais = 180
		}
		else if (price > 0 && price <= 13500) {
			frais = 300
		}
		else if (price > 0 && price <= 25000) {
			frais = 350
		}
		else if (price > 0 && price <= 50000) {
			frais = 700
		}
		else if (price > 0 && price <= 80000) {
			frais = 1350
		}
		else if (price > 0 && price <= 100000) {
			frais = 1800
		}
		else if (price > 0 && price <= 200000) {
			frais = 2150
		}
		else if (price > 0 && price <= 300000) {
			frais = 2600
		}
		else if (price > 0 && price <= 400000) {
			frais = 3100
		}
		else if (price > 0 && price <= 500000) {
			frais = 3600
		}
		else if (price > 0 && price > 500000) {
			this.alert('Le montant maximal d\'un retrait est de 500.000 FCFA')
		} else {
			this.alert('Veuillez enter un montant valide')
		}
		this.setState({ result: frais })
		this.calculBestOrangeMethod()
	}
	calculBestOrangeMethod = () => {
		const price = parseInt(this.state.value)
		let frais = [], total
		if (price > 10000 && price <= 15000) {
			frais.push(10000, price - 10000)
			total = 180 + (((price - 10000) * 3) / 100)
		} else if (price > 25000 && price <= 30000) {
			frais.push(25000, price - 25000)
			total = 350 + (((price - 25000) * 3) / 100)
		} else if (price > 30000 && price <= 35000) {
			frais.push(25000, price - 25000)
			total = 350 + 180
		} else if (price > 35000 && price <= 38000) {
			frais.push(25000, price - 25000)
			total = 350 + 300
		} else if (price > 50000 && price <= 56000) {
			frais.push(50000, price - 50000)
			total = 700 + (((price - 50000) * 3) / 100)
		} else if (price > 56000 && price <= 60000) {
			frais.push(50000, price - 50000)
			total = 700 + 180
		} else if (price > 60000 && price <= 63000) {
			frais.push(50000, price - 50000)
			total = 700 + 300
		} else if (price > 63000 && price <= 75000) {
			frais.push(50000, price - 50000)
			total = 700 + 350
		} else if (price > 75000 && price <= 81500) {
			frais.push(25000, 50000, price - 25000 - 50000)
			total = 350 + 700 + (((price - 25000 - 50000) * 3) / 100)
		} else if (price > 81500 && price <= 85000) {
			frais.push(50000, 25000, price - 25000 - 50000)
			total = 700 + 350 + 180
		} else if (price > 85000 && price <= 91500) {
			frais.push(50000, 25000, 10000, price - 25000 - 50000 - 10000)
			total = 700 + 350 + 180 + (((price - 25000 - 50000 - 10000) * 3) / 100)
		} else if (price > 91500 && price <= 100000) {
			frais.push(50000, price - 50000)
			total = 700 + 700
		} else if (price > 100000 && price <= 105500) {
			frais.push(100000, price - 100000)
			total = 1800 + (((price - 100000) * 3) / 100)
		} else if (price > 105500 && price <= 115000) {
			frais.push(100000, 10000, price - 100000 - 10000)
			total = 1800 + 180 + (((price - 100000 - 10000) * 3) / 100)
		} else if (price > 200000 && price <= 205500) {
			frais.push(200000, price - 200000)
			total = 2150 + (((price - 200000) * 3) / 100)
		} else if (price > 205500 && price <= 215000) {
			frais.push(200000, 10000, price - 200000 - 10000)
			total = 2150 + 180 + (((price - 200000 - 10000) * 3) / 100)
		} else if (price > 215000 && price <= 225000) {
			frais.push(200000, price - 200000)
			total = 2150 + 350
		} else if (price > 305500 && price <= 315000) {
			frais.push(300000, 10000, price - 300000 - 10000)
			total = 2600 + 180 + (((price - 300000 - 10000) * 3) / 100)
		} else if (price > 315000 && price <= 325000) {
			frais.push(300000, price - 300000)
			total = 2600 + 350
		} else if (price > 400000 && price <= 405500) {
			frais.push(400000, price - 400000)
			total = 3100 + (((price - 400000) * 3) / 100)
		} else if (price > 405500 && price <= 415000) {
			frais.push(400000, 10000, price - 400000 - 10000)
			total = 3100 + 180 + (((price - 400000 - 10000) * 3) / 100)
		} else if (price > 415000 && price <= 425000) {
			frais.push(300000, price - 300000)
			total = 3100 + 350
		}
		if (this.state.bestResult.length > 0) {
			this.setState({ bestResult: frais, fraisTotal: total, flag: true })
		}
		this.setState({ bestResult: frais, fraisTotal: total })
	}
	calculBestMTNMethod = () => {
		const price = parseInt(this.state.value)
		let frais = [], total
		if (price > 10000 && price <= 15000) {
			frais.push(10000, price - 10000)
			total = 150 + 100
		} else if (price > 10000 && price <= 20000) {
			frais.push(10000, price - 10000)
			total = 150 + 150
		} else if (price > 25000 && price <= 30000) {
			frais.push(10000, 10000, price - 10000 - 10000)
			total = 150 + 150 + 150
		} else if (price > 30000 && price <= 35000) {
			frais.push(10000, 10000, 10000, price - 30000)
			total = 150 + 150 + 150 + 100
		} else if (price > 35000 && price <= 40000) {
			frais.push(10000, 10000, 10000, price - 30000)
			total = 150 + 150 + 150 + 150
		} else if (price > 50000 && price <= 55000) {
			frais.push(50000, price - 50000)
			total = 700 + 100
		} else if (price > 55000 && price <= 60000) {
			frais.push(50000, price - 50000)
			total = 700 + 150
		} else if (price > 60000 && price <= 65000) {
			frais.push(50000, 10000, price - 60000)
			total = 700 + 150 + 100
		} else if (price > 65000 && price <= 70000) {
			frais.push(50000, 10000, price - 60000)
			total = 700 + 150 + 150
		} else if (price > 70000 && price <= 75000) {
			frais.push(50000, price - 50000)
			total = 700 + 400
		} else if (price > 75000 && price <= 80000) {
			frais.push(50000, 10000, 10000, price - 70000)
			total = 700 + 150 + 150 + 150
		} else if (price > 80000 && price <= 85000) {
			frais.push(50000, 25000, price - 75000)
			total = 700 + 400 + 150
		} else if (price > 85000 && price <= 90000) {
			frais.push(50000, 25000, 10000, price - 85000)
			total = 700 + 400 + 150 + 100
		} else if (price > 90000 && price <= 95000) {
			frais.push(50000, 25000, 10000, price - 85000)
			total = 700 + 400 + 150 + 150
		} else if (price > 95000 && price < 100000) {
			frais.push(50000, 10000, 10000, 10000, 10000, price - 90000)
			total = 700 + 150 + 150 + 150 + 150 + 150
		} else if (price == 100000) {
			frais.push(50000, 50000)
			total = 700 + 700
		} else if (price > 100000 && price <= 105000) {
			frais.push(50000, 50000, price - 100000)
			total = 700 + 700 + 100
		} else if (price > 105000 && price <= 110000) {
			frais.push(50000, 50000, price - 100000)
			total = 700 + 700 + 150
		} else if (price > 110000 && price <= 115000) {
			frais.push(50000, 50000, 10000, price - 110000)
			total = 700 + 700 + 150 + 100
		} else if (price > 115000 && price <= 120000) {
			frais.push(50000, 50000, 10000, price - 110000)
			total = 700 + 700 + 150 + 150
		} else if (price > 120000 && price <= 125000) {
			frais.push(50000, 50000, 10000, 10000, price - 120000)
			total = 700 + 700 + 150 + 150 + 100
		} else if (price > 125000 && price <= 130000) {
			frais.push(50000, 50000, 10000, 10000, price - 120000)
			total = 700 + 700 + 150 + 150 + 150
		} else if (price > 130000 && price <= 135000) {
			frais.push(50000, 50000, 10000, 10000, 10000, price - 130000)
			total = 700 + 700 + 150 + 150 + 150 + 100
		} else if (price > 135000 && price <= 140000) {
			frais.push(50000, 50000, 10000, 10000, 10000, price - 130000)
			total = 700 + 700 + 150 + 150 + 150 + 150
		} else if (price > 140000 && price <= 145000) {
			frais.push(50000, 50000, 10000, 10000, 10000, 10000, price - 140000)
			total = 700 + 700 + 150 + 150 + 150 + 150 + 100
		} else if (price == 150000) {
			frais.push(50000, 50000, 50000)
			total = 700 + 700 + 700
		} else if (price > 200000 && price <= 205000) {
			frais.push(200000, price - 200000)
			total = 2150 + 100
		}
		if (this.state.bestResult.length > 0) {
			this.setState({ bestResult: frais, fraisTotal: total, flag: true })
		}
		this.setState({ bestResult: frais, fraisTotal: total })
	}
	render() {
		const bestResult = this.state.bestResult
		return (
			<ScrollView style={{ backgroundColor: 'black' }}>
				<Drawer ref={(ref) => {
					this.drawer = ref
				}}
					content={<Sidebar navigator={this.navigator} />}
					onClose={() => this.closeDrawer()} ></Drawer>
				<View style={styles.container}>
					<Text style={styles.title}>Mon Retrait</Text>
					<Text style={styles.label}>Calculer les frais de vos retraits {this.state.screen}</Text>
					<Price onTemperatureChange={this.handleClick} />
					<Button style={styles.button} onPress={this.state.screen === 'ORANGE' ? this.calculOrangePrice : this.calculMTNPrice}>
						<Text >Calculer</Text>
					</Button>
					{this.state.result > 0 ? <Result result={this.state.result} /> : null}
					{bestResult.length > 0 ? <Text style={styles.method}>Méthode de retrait optimale :</Text> : null}
					<List>
						{bestResult.length > 0 ?
							bestResult.map((value, index) => (
								<FadeInAnimation delay={index * 100} key={index}>
									<BestResult bestResult={value} key={index} index={index} visibility={true} />
								</FadeInAnimation>
							)) : this.state.flag ?
								<FadeInAnimation delay={200}>
									<BestResult visibility={false} />
								</FadeInAnimation> : null
						}
					</List>
					{bestResult.length > 0 ? <Text style={styles.total}>Frais Totaux : {this.state.fraisTotal} FCFA</Text> : null}
				</View>
			</ScrollView >
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
		marginBottom: '8%',
	},
	button: {
		width: 130,
		alignItems: "center",
		paddingLeft: 15,
		marginLeft: '2%'
	},
	method: {
		color: 'white',
		fontWeight: 'bold',
		marginTop: '8%',
		fontSize: 15,
		marginBottom: '3%',
		marginLeft: -155
	},
	total: {
		color: 'white',
		fontWeight: 'bold',
		marginTop: '8%',
		fontSize: 15,
		marginBottom: '3%',
		marginLeft: 45,
		width: '100%'
	}
})