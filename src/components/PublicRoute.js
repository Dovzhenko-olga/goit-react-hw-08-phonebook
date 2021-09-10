import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  children,
  redirectTo = '/goit-react-hw-08-phonebook/contacts',
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>
    {shouldRedirect ? <Redirect to={redirectTo} /> : children}
  </Route>
}