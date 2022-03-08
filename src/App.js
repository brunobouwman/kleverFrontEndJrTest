import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import AddTokenPage from './pages/add/addToken';
import EditTokenPage from './pages/edit/editToken';
import HomePage from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/edit-token">
            <EditTokenPage />
          </Route>
          <Route path="/add-token">
            <AddTokenPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
