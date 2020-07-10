import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen } from './HomeScreen';
import { Icon } from 'native-base';
export default class Screen extends React.Component {
	render() {
		return (
			<View>
				<SafeAreaView style={{ flex: 1 }}>
					<TouchableOpacity style={{ alignItems: 'flex-end', margin: 16 }} onPress={this.props.navigation.openDrawer}>
						{/*<FontAwesome5 name='home' size={24} color={'black'} />*/}
						<Icon name="home" />
					</TouchableOpacity>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<HomeScreen name={this.props.name} />
					</View>

				</SafeAreaView>
			</View>
		)
	}
}