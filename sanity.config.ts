import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { RobotIcon, RocketIcon } from '@sanity/icons'
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
	title: 'project-octopus',
	projectId: 'f2ttt5xy',
	dataset: 'production',
	basePath: '/default',
	icon: RobotIcon,

	plugins: [dashboardTool({
		widgets: [
			projectInfoWidget(),
			projectUsersWidget({ layout: 'medium' }),
		]
	}),
	deskTool(),
	visionTool(), ...(isDev ? devOnlyPlugins : [])
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
	dataset: 'staging',
	name: 'staging-workspace',
	basePath: '/staging',
	title: 'Another Workspace!',
	icon: RocketIcon,
	plugins: [deskTool()],
	schema: {
		types: schemaTypes,
	},
}])

