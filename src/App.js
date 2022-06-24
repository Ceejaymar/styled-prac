import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBGColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = React.useState(LightTheme);

  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(t => t.id === 'light' ? DarkTheme : LightTheme);
      }
    }}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;