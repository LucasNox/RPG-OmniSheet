import * as FS from "expo-file-system";

class ConfigController {
	private static configPath = FS.documentDirectory + 'config_files/'

	static async create(fileName: String) {
		//Cria a pasta de arquivos de configuração, se a pasta ja existe, ignora reject
		await FS.makeDirectoryAsync(this.configPath).catch(()=>{})
		//Verifica se um arquivo com mesmo nome já não existe, se não, cria-o
		await FS.getInfoAsync(this.configPath + fileName + '.rpgs').then(res => {
			if(!res.exists) {
				FS.writeAsStringAsync(this.configPath + fileName + '.rpgs', '')
			}
		})
	}

	static async delete(fileName: string) {
		FS.deleteAsync(this.configPath + fileName + '.rpgs', {idempotent: true})
			.then(()=>{})
	}

	static list() {
		return FS.readDirectoryAsync(this.configPath)
	}

	static read(fileName: string) {
		return FS.readAsStringAsync(this.configPath + fileName + '.rpgs')
	}

	static write(fileName: string, content: string) {
		return FS.writeAsStringAsync(this.configPath + fileName + '.rpgs', content)
	}
}

export default ConfigController;