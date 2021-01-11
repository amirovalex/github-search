import './app.css';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import { AppContainer, HtmlStyle } from './app.styles.js';
import Navbar from './components/navbar/navbar.component.jsx';
import WithSpinner from './components/withspinner/withspinner.component.jsx';
import ResultsPage from './pages/resultspage/resultspage.component.jsx';

const mapStateToProps = (state) => {
  return{
    users:state.searchUser.users,
    isFetching:state.searchUser.isFetching,
    isFetchingError:state.searchUser.isFetchingError
  }
}
const ResultsPageWithSpinner = WithSpinner(ResultsPage)

const App = (props) => {
  return (
    <AppContainer>
      <HtmlStyle/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/results' render={(otherProps) => { return props.users && !props.isFetchingError ? 
          (props.users === "fetching initial" ? 
            <ResultsPageWithSpinner isFetching={props.isFetching} {...otherProps} />
            :
            <ResultsPage isFetching={props.isFetching} {...otherProps}/>
          )
          : 
          (<Redirect to="/" />)
        }}/>
        <Redirect to="/" />
      </Switch>
    </AppContainer>
  );
}

export default connect(mapStateToProps)(App);
