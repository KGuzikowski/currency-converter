import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'
import MainPage from './pages/MainPage/MainPage'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c1f4a'
        },
        secondary: {
            main: '#3eefd8'
        }
    }
})

const App = () => {
    return (
        <React.StrictMode>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={MainPage} />
                            <Redirect to='/'/>
                        </Switch>
                    </Router>
                </PersistGate>
                </Provider>
            </ThemeProvider>
        </React.StrictMode>
    )
}

export default App
