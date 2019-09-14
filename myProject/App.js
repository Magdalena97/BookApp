/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet,View} from 'react-native'; 
import Header from "./android/components/Header.js";
import InputBar from "./android/components/InputBar.js";

class App extends React.Component{ 

  render(){
    return (  
      <View style={styles.container}>
       <Header title ="BookApp"/>  
       <InputBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff", 
  }, 
});

export default App;
