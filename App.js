// import React, { Component } from 'react';
// import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
// import HomeScreen from './components/HomeScreen';
// import AboutScreen from './components/About';
// import { Image, Text } from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import { Ionicons } from '@expo/vector-icons'
// import { DrawerNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { Father } from '@expo/vector-icons'
// //import { OrangeScreen, MtnScreen, AboutScreen, ContactScreen } from './components/index';
// import { Sidebar } from './components/sidebar';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//     };
//   }
//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require('native-base/Fonts/Roboto.ttf'),
//       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//       ...Ionicons.font,
//     });
//     this.setState({ isReady: true });
//   }
//   render() {
//     if (!this.state.isReady) {
//       return <AppLoading />;
//     }
//     return (
//       // <Container>
//       //   <Header hasTabs style={{ height: 30 }} />
//       //   <Tabs >
//       //     <Tab heading={<TabHeading><Image style={{ width: 15, height: 15 }} source={require('./assets/orange-money.jpg')} /><Text> ORANGE</Text></TabHeading>}>
//       //       <HomeScreen name='ORANGE' />
//       //     </Tab>
//       //     <Tab heading={<TabHeading><Image style={{ width: 15, height: 15 }} source={require('./assets/MTN-money.jpg')} /><Text> MTN</Text></TabHeading>}>
//       //       <HomeScreen name='MTN' />
//       //     </Tab>
//       //     <Tab heading={<TabHeading><Icon name="home" /><Text> A PROPOS</Text></TabHeading>}>
//       //       <AboutScreen />
//       //     </Tab>
//       //   </Tabs>
//       // </Container>
//       <Text style={{ flex: 1 }}> A PROPOS</Text>
//     );
//   }
// }
// const myApp = DrawerNavigator({
//   Orange: {
//     screen: <HomeScreen name='ORANGE' />
//   },
//   Mtn: {
//     screen: <HomeScreen name='MTN.' />
//   },
//   About: {
//     screen: AboutScreen
//   },
//   Contact: {
//     screen: HomeScreen
//   }
// })

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'


//custom files 
//import AppStackNavigator from './AppStackNavigator'
import SettingsScreen from './components/About'
import HomeScreen from "./components/HomeScreen";


export default class App extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/orange-money.jpg')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = createDrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: <HomeScreen name='ORANGE' navigator={} />,
  },
  Settings: {
    screen: <HomeScreen name='ORANGE' navigator={} />
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})