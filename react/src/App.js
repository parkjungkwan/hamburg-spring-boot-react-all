import Home from 'common/component/Home'
import ArticleList from 'article/component/ArticleList'
import ArticleWrite from 'article/component/ArticleWrite'
import ArticleDetail from 'article/component/ArticleDetail'
import ArticleUpdate from 'article/component/ArticleUpdate'
import Login from 'user/component/Login'
import SignUp from 'user/component/SignUp'
import UserDetail from 'user/component/UserDetail'
import News from 'board/component/News'
import 'App.css';
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={ Home } />
      <Route exact path='/article/article-list' component={ ArticleList } />
      <Route exact path='/article/article-write' component={ ArticleWrite } />
      <Route exact path='/article/article-detail' component={ ArticleDetail } />
      <Route exact path='/article/article-update' component={ ArticleUpdate } />
      <Route exact path='/board/news' component={ News } />
      <Route exact path='/user/login' component={Login} />
      <Route exact path='/user/signUp' component={SignUp} />
      <Route exact path='/user/user-detail' component={UserDetail} />
  </div>
  );
}

export default App;
