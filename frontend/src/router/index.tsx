import { Switch, Route } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { Home, NotFound } from '../pages';

const Router = () => (
    <Switch>
      <Route exact path={["/"]}>
        <MainLayout>
          <Route exact path='/' component={Home} />
        </MainLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
)

export default Router;