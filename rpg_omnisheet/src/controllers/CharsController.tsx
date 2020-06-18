import React from 'react'
import { AsyncStorage } from 'react-native'
import * as Random from 'expo-random'
import { Buffer } from 'buffer'

class CharsController {
	static async create(name: String) {
		const randBytes = await Random.getRandomBytesAsync(3)
		const randString = Buffer.from(randBytes).toString('hex')
		return randString
	}
}

export default CharsController;