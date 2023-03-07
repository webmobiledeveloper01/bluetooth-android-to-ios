//----------- imports 

// react
import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView } from 'react-native'

// style and image
import { Evolussem_logo } from "./Assets/image";

//---------- main component

function SplashScreen({ navigation }) {

    //---------- context and state

    const [isSetupDone, setIssetupDone] = useState(false)


    useEffect(() => {

        // for stay at least 3 sec
        setTimeout(() => {
            setIssetupDone(true)
        }, 3000);

        return () => {
            // this now gets called when the component unmounts
        };
    }, []);

    useEffect(() => {

        // check both update
        if (isSetupDone) {

            navigation.replace('Home')
        }
    }, [ isSetupDone])




    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000'
            }}
        >
            <SafeAreaView />

            <View
                style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                }}
            >
                <Image
                    source={Evolussem_logo}
                    resizeMode='center'
                />
            </View>
            <SafeAreaView />
        </View>
    )
}

export default SplashScreen;