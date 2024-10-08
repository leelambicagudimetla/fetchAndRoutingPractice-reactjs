import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import About from './components/About'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'
import BlogItemDetails from './components/BlogItemDetails'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
