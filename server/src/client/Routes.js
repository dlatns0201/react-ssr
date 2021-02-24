import App from './App';
import AdminsPage from './pages/Admins';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import UsersPage from './pages/Users';

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
        component: UsersPage
      },
      {
        path: '/admins',
        component: AdminsPage
      },
      {
        component: NotFoundPage
      }
    ]
  }
]

export default Routes;