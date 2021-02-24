import App from './App';
import HomePage from './pages/Home';
import UserPage from './pages/User';

const Routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: HomePage,
        exact: true
      },
      {
        path: '/users',
        component: UserPage
      }
    ]
  }
]

export default Routes;