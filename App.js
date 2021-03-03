import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./Reducer"

import CamKG from "./CameraComponent/camera"

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#556B2F",
    accent: "#32CD32",
  },
};


export default function App() {
	const state = createStore(reducer, {}, applyMiddleware(thunk));
  return (
  
  <Provider store={state}>
      <PaperProvider theme={theme}>
       <CamKG/>
      </PaperProvider>
    </Provider>
  
  
  
    
  );
}

// <View style={styles.mapContainer}> <CamKG/> </View>

/*
<View style={styles.container}>
        <Text>Trash Data App!</Text>
        <StatusBar style="auto" />
		
		
        </View>

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    width: "90%", //Dimensions.get("window").width,
    height: "70%", //Dimensions.get("window").height,
    borderWidth: 2,
    borderColor: "#556B2F",
  },
});
