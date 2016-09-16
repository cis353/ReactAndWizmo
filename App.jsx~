import React from 'react';

import {Router,Route,Link,IndexRoute,hashHistory,Redirect} from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div className="main">
           <ul>
               <li><Link to='/home'>Home</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/grid'>Grid</Link></li>
            </ul>
             {this.props.children}
         </div>
      );
   }
}

export default App;
