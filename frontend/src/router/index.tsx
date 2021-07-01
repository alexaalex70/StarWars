import { Switch, Route } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { 
  Home, 
  NotFound, 
  People, 
  Species, 
  SpeciesPage 
} from '../pages';

const Router = () => (
    <Switch>
      <Route exact path={["/", "/people", "/planets", "/films", "/species", "/vehicles", "/starships", "/species/:name"]}>
        <MainLayout>
          <Route exact path='/' component={Home} />
          <Route exact path='/people' component={People} />
          <Route exact path='/species' component={Species} />
          <Route exact path='/species/:name' component={SpeciesPage} />
        </MainLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
)

export default Router;