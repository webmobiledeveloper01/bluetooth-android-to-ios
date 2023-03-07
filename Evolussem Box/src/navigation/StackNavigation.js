import React from "react";
import { ImageBackground, SafeAreaView, TouchableOpacity, View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from 'react-native-webview';

import Home from "../component/Home";
import { button3 } from "../Assets/image";
import SplashScreen from "../SplashScreen";

// global stack veriable
const Stack = createStackNavigator();

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">

            <Stack.Screen
                    options={{ headerShown: false }}
                    name="SplashScreen"
                    component={SplashScreen} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="WebViewScreen"
                    component={WebViewScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const WebViewScreen = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                paddingTop: 50,
                paddingBottom: 20,
                backgroundColor: '#000',

            }}
        >
            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor: '#000'
                }}
            >

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: '20%',
                    }}
                >
                    <ImageBackground
                        source={button3}
                        style={{
                            height: 50,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        resizeMode="contain"
                    >

                        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: '600' }}>Ok</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <WebView
                // source={require('../Assets/third.pdf')}
                originWhitelist={['*']} 
                source={{uri:'https://drive.google.com/file/d/15NNiAZDy-uobYaxgTp875MDX4q1L0AnF/view?usp=share_link'}}
            // source={{ uri: 'https://drive.google.com/file/d/108UKKlGnPBUrBExnYo5BZYQH79u3jKl1/view?usp=share_link' }}
            />

            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 10,
                    backgroundColor: '#000'
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: '20%'
                    }}
                >
                    <ImageBackground
                        source={button3}
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        resizeMode="contain"
                    >

                        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: '600' }}>Ok</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default StackNavigation;