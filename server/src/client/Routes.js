import App from './App';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
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
      },
      {
        component: NotFoundPage
      }
    ]
  }
]

export default Routes;