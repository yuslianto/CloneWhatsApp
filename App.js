import React, { Component } from "react";
import { YellowBox } from 'react-native';
import { 
  Provider,
  connect,
} from "react-redux";

import AppWithNavigationState from './src/navigations';

class App extends Component {
  constructor(props) {
  
    super(props);
  
    YellowBox.ignoreWarnings(
  
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
        
    ]);
  
  }

  render() {
    return (
      <AppWithNavigationState />
    );
  }
}
export default App;