import { Route, Switch } from 'react-router-dom'
import Home from '~/components/Pages/Home'
import Page1 from '~/components/Pages/Page1'
import Page2 from '~/components/Pages/Page2'
import NotFound from '~/components/Pages/NotFound'
export default function PageRouter() {
    return (<Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
        <Route component={NotFound}></Route>
    </Switch>
    );
};