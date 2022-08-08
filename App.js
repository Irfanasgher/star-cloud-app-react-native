import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {InitialNavigators} from './src/navigation/AppNavigator';
import Splash from './src/screens/Splash/Splash';
import {AppContext, AppContextProvider} from './src/context/AppContext';
import Helpers from './src/utils/Helpers';
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
      token: null,
    };
  }
  componentDidMount() {
    Helpers.getData('token').then(token => {
      this.setState({token});
    });
    setTimeout(() => {
      this.setState({splash: false});
    }, 1300);
  }
  render() {
    return (
      <AppContextProvider>
        <SafeAreaView style={{flex: 1}}>
          {this.state.splash ? (
            <Splash />
          ) : (
            <NavigationContainer>
              {InitialNavigators(this.state.token)}
            </NavigationContainer>
          )}
        </SafeAreaView>
      </AppContextProvider>
    );
  }
}
export default App;
