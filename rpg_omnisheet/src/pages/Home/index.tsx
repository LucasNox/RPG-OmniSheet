import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select';

import ConfigController from '../../controllers/ConfigController'
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
	//Lista das configurações
	const [listConfigs, setListConfigs] = useState<string[]>([])
	//Nome dado a uma nova configuração a ser criada
	const [nameNewConfig, setNameNewConfig] = useState('')
	//Configuração escolhida
	const [selectedConfig, setSelectedConfig] = useState('')

	//Adiciona a opção de criar nova config na lista de configs
	useEffect(()=>{
		ConfigController.list()
			.then(res => setListConfigs(['Criar nova configuração', ...res]))
	}, [])

	//
	function handleCreateNewConfig() {
		ConfigController.create(nameNewConfig)
			.then(()  => ConfigController.list())
			.then(res => console.log(res))
	}

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>RPG OmniSheet</Text>
			</View>
			<View style={styles.footer}>
				<View style={styles.input}>
					{
						selectedConfig === 'Criar nova configuração'
						?	<TextInput
								style={{ height: 40}}
								onChangeText={text => {setNameNewConfig(text)}}
								value={nameNewConfig}
								placeholder="Nomeie nova configuração..."
							/>
						:	<RNPickerSelect
								style={styles}
								onValueChange={(value)=>{setSelectedConfig(value)}}
								items={[] = listConfigs.map(config => ({label: config, value: config}))}
								placeholder = {{
									label: 'Selecione uma configuração...',
									value: null,
									color: '#9EA0A4',
								}}
								useNativeAndroidPickerStyle={false}
							/>
					}
				</View>
				<View style={styles.iconBox}>
					<RectButton style={styles.button} onPress={handleCreateNewConfig}>
						<Feather name='log-in' color='#34CB79' size={24} />
					</RectButton>
				</View>
				
				<View style={styles.input}>
					{
						selectedConfig === 'Criar nova configuração'
						?	<TextInput
								style={{ height: 40}}
								onChangeText={text => {setNameNewConfig(text)}}
								value={nameNewConfig}
								placeholder="Nomeie nova configuração..."
							/>
						:	<RNPickerSelect
								style={styles}
								onValueChange={(value)=>{setSelectedConfig(value)}}
								items={[] = listConfigs.map(config => ({label: config, value: config}))}
								placeholder = {{
									label: 'Selecione uma configuração...',
									value: null,
									color: '#9EA0A4',
								}}
								useNativeAndroidPickerStyle={false}
							/>
					}
				</View>
				<View style={styles.iconBox}>
					<RectButton style={styles.button} onPress={handleCreateNewConfig}>
						<Feather name='log-in' color='#34CB79' size={24} />
					</RectButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2288BB',
		padding: 32
	},

	main: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center"
	},
	
	footer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},

	title: {
		color: '#444',
		fontSize: 24,
	},

	input: {
		flex: 3,
		height: 60,
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 18,
		fontSize: 16,
		justifyContent: 'center',
	},
	
	iconBox: {
		flex: 1,
		height: 60,
		width: 60,
		backgroundColor: '#FF00FF',
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},

	button: {
		height: 60,
		width: 65,
		justifyContent: "center",
		alignItems: "center",
	},
	
	inputIOS: {
		fontSize: 14,
		paddingHorizontal: 2,
		paddingVertical: 8,
	},
	
	inputAndroid: {
		fontSize: 14,
		paddingHorizontal: 2,
		paddingVertical: 8,
	},
})

export default Home;