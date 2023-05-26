// actions.js

export function FreigabeText(props) {
	return {
		label: 'FreigabeText',
		onHandle: () => {
			// Here you can perform your actions
			window.alert('👋 Hello from custom action')
		}
	}
}