import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import {useSelector} from "react-redux";
import NavigationScroll from './layout/NavigationScroll';
// import { Routes, Route } from 'react-router-dom';

// import Login from './views/pages/authentication/auth-forms/AuthLogin';
import Routes from './routes';
import themes from './themes';


const App = () =>  {

    const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
