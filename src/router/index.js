import Home from '../views/Home'
import Login from '../views/Login'

export default {
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login
		}
	]	
}