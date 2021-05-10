import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '~/components/Menu';
import PageRouter from './PageRouter';
import {BrowserRouter} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    base: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        marginTop: '64px',
        alignSelf: "flex-start"
    }
}));
export default function App() {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
            type: 'dark'
        }
    })

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className={classes.base}>
                    <CssBaseline />
                    <Menu></Menu>
                    <div className={classes.content}>
                        <PageRouter></PageRouter>
                    </div>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}
