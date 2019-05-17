import React, {Component, Suspense} from 'react';
import './App.css';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


const Home = React.lazy(()=>import("./Home/Home"));

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
