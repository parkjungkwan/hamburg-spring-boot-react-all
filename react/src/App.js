import Home from 'common/component/Home'
import { ArticleList, ArticleWrite, ArticleDetail, ArticleUpdate } from 'article/index'

import { Login, SignUp, UserDetail, UserList, UserUpdate } from 'user/index'
import 'App.css';
import { Route } from 'react-router-dom'
import { SeoulCCTV, News  } from 'board/index'
import {  Counter, CounterContainer,CounterSliceContainer  } from 'counter/index'
import {  TodoApp  } from 'todos/index'
 
const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={ Home } />
      
      <Route exact path='/article/article-list' component={ ArticleList } />
      <Route exact path='/article/article-write' component={ ArticleWrite } />
      <Route exact path='/article/article-detail' component={ ArticleDetail } />
      <Route exact path='/article/article-update' component={ ArticleUpdate } />
      <Route exact path='/board/news' component={ News } />
      <Route exact path='/board/seoul-cctv' component={ SeoulCCTV } />
      <Route exact path='/counter/redux-counter' component={ Counter } />
      <Route exact path='/counter/counter' component={ Counter } />
      <Route exact path='/counter/counter-slice' component={ CounterSliceContainer } />
      <Route exact path='/user/login' component={ Login} />
      <Route exact path='/todos/app' component={ TodoApp } />
      <Route exact path='/user/signup' component={SignUp} />
      <Route exact path='/user/detail' component={UserDetail} />
      <Route exact path='/user/update' component={UserUpdate} />
      <Route exact path='/user/login' component={Login} />
      <Route exact path='/user/users' component={UserList} />
  </div>
  );
}

export default App;
