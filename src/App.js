import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route,Switch} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz';
import Page01 from './components/Pages/Page01/Page01'
import Page02 from './components/Pages/Page02/Page02'



function App() {
  return (    
      <Layout>
        <Switch>         
          <Route path="/auth"  component={Page01} />
          <Route path="/quiz-creator"  component={Page02} />
          <Route path="/" exact component={Quiz} />
          <Route render={()=><h1 style={{textAlign:'center',color:'red'}}>404 not found</h1>} />
        </Switch>         
      </Layout> 
  );
}

export default App;
