import { v4 as uuidv4 } from 'uuid';
const mock = [
	{
		id: uuidv4(),
		title: 'Wash my squid tentacles',
		description: 'Its like washing your hands, but you have tentacles',
		isDone: false,
  	},
  	{
		id: uuidv4(),
		title: 'Replace ink',
		description: 'Everyone knows ink gets old',
		isDone: false,
	},
	{
		id: uuidv4(),
		title: 'Jokes',
		description: 'Tell some jokes',
		isDone: true,
	}
];

export default mock;