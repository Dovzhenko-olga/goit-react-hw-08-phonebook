import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const HomePage = lazy(() => import ('./components/HomePage'));
const RegisterView = lazy(() => import ('components/authViews/RegisterView'));
const LoginForm = lazy(() => import ('./components/authViews/LoginView'));
const ContactsView = lazy(() => import ('./components/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const classes = useStyles();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? (
        <h1>Preparing information.</h1>
      ) : (
          <>
          <AppBar />
          <Switch>
            <Suspense fallback={
              <div className={classes.root}>
                <LinearProgress />
              </div>
              }>
              {/* <Route exact path="/" component={HomePage} /> */}
              {/* <Route path="/register" component={RegisterView} /> */}
              {/* <Route path="/login" component={LoginForm} /> */}
              {/* <Route path="/contacts" component={ContactsView} /> */}

              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/register" restricted redirectTo = "/">
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginForm />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
            </>
      )}
    </Container>
  );
}

