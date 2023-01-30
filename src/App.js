import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import reduxActions from './redux/actions';
import { useTranslation } from 'react-i18next';

const Landing = React.lazy(() => import(`Pages/landing`));

const PageNotFound = () => {
  const { t } = useTranslation();
  return <div>{t('Page-Not-Found')}</div>;
};

export default function App() {
  const dispatch = useDispatch();
  // const storage = localStorage.getItem('nightMode');
  //const [isNightMode, setNightMode] = React.useState(storage === null ? false : JSON.parse(storage));
  // eslint-disable-next-line no-unused-vars
  const [isNightMode, setNightMode] = React.useState(false);
  const theme = createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        dark: '#1B203A',
        default: '#232743',
        paper: isNightMode ? '#272B4A' : '#FFFFFF',
        light: '#F8F3EC',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            maxWidth: '100%',
            overflowX: 'hidden',
            backgroundColor: isNightMode ? '#d9ecf2' : '#d9ecf2',
          },
        },
      },
    },
    typography: {
      fontFamily: ['Proxima Nova', 'sans-serif'].join(','),
    },
  });

  React.useEffect(() => {
    const initiate = async () => {
      await dispatch(reduxActions.prices.fetchPrices());
    };
    return initiate();
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('nightMode', JSON.stringify(isNightMode));
  }, [isNightMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <React.Suspense fallback={<div className="loader" />}>
          <Switch>
            <Route exact path="/" key={Date.now()}>
              <Landing />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}
