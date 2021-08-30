import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route,Switch} from 'react-router-dom'
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Quiz from './containers/Quiz/Quiz'



function App() {
  return (    
      <Layout>
        <Switch>         
          <Route path="/auth"  component={Auth} />
          <Route path="/quiz-creator"  component={QuizCreator} />
          <Route path="/quiz/:id"  component={Quiz} />
          <Route path="/" exact component={QuizList} />
          <Route render={()=><h1 style={{textAlign:'center',color:'red'}}>404 not found</h1>} />
        </Switch>         
      </Layout> 
  );
}

export default App;
