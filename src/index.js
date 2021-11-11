import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from './history'
import { store } from './store/store'

import 'rsuite/dist/rsuite.min.css'

import Layout from './layouts/layout'
import Home from './pages/home'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Layout>
                    <Route path="/" exact component={Home} />
                </Layout>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
