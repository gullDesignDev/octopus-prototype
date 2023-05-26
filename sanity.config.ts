import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { EarthAmericasIcon, JoystickIcon } from '@sanity/icons'
import {
	dashboardTool,
	projectUsersWidget,
	projectInfoWidget
} from "@sanity/dashboard";
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { FreigabeText } from './actions'
import { HelloWorldBadge } from './badges'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig([{
	name: 'default',
	title: 'Production',
	projectId: 'f2ttt5xy',
	dataset: 'production',
	basePath: '/default',
	icon: EarthAmericasIcon,

	plugins: [
		deskTool(),
		visionTool(), ...(isDev ? devOnlyPlugins : []),
		dashboardTool({
			widgets: [
				projectInfoWidget(),
				projectUsersWidget({ layout: 'medium' }),
			]
		}),
	],

	document: {
		actions: [FreigabeText],
		badges: (prev, context) => context.schemaType === 'size' ? [HelloWorldBadge, ...prev] : prev,
	},

	schema: {
		types: schemaTypes,
	},
},
{
	projectId: 'f2ttt5xy',
	dataset: 'dev',
	name: 'dev-workspace',
	basePath: '/dev',
	title: 'Playground',
	icon: JoystickIcon,
	plugins: [
		deskTool(),
		visionTool(), ...(isDev ? devOnlyPlugins : []),
	],
	schema: {
		types: schemaTypes,
	},
}])

