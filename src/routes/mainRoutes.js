import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import NotFound from 'containers/NotFound';
import Consultancy from 'containers/Consultancy';

const mainRoutes = [
  {
    exact: true,
    path: '/',
    key: 'home',
    name: 'Home',
    icon: 'home',
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/consultancy',
    name: 'Consultorias',
    icon: 'form',
    component: Consultancy,
    key: 'consultancy'
  },
  {
    path: '/signin',
    name: 'Sign In',
    icon: 'login',
    component: SignIn,
    key: 'signin'
  },
  {
    path: '',
    name: 'Not Found',
    icon: 'close-circle',
    component: NotFound,
    key: 'notfound'
  },
];

export default mainRoutes;
