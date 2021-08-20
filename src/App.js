import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz';
import Page01 from './components/Pages/Page01/Page01'
import Page02 from './components/Pages/Page02/Page02'
import Page03 from './components/Pages/Page03/Page03'


function App() {
  return (    
      <Layout>
          <Route path="/" exact component={Quiz} />
          <Route path="/Home"  component={Quiz} />
          <Route path="/Page01"  component={Page01} />
          <Route path="/Page02"  component={Page02} />
          <Route path="/Page03"  component={Page03} />
      </Layout> 
  );
}

export default App;
