import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from 'react';



const CarbotButton = (props) => {
    console.log('-> TOP of CarbotButton()')
    console.log('title is ' + props.title);
    return (
        <>
            <TouchableOpacity onPress={() => props.moveCarbot(props.title)} style={styles.carbotButtonContainer}>
                <Text style={styles.carbotButtonText}>{props.title}</Text>
            </TouchableOpacity>
        </>);
};

const styles = StyleSheet.create({
    // ...
    carbotButtonContainer: {
        // elevation: 8,
        // backgroundColor: "#009688",
        // borderRadius: 10,
        // // paddingVertical: 10,
        // // paddingHorizontal: 20,
        // marginTop: '10%',  // Spacing above the button.
        // width: '50%',  // Setting all buttons to be the same width (versus using padding).
        // height: 40
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 12,
        width: '50%',
        marginTop: '10%',
    },
    carbotButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    carbotButtonSpacing: {  // Not using - another way to put space between buttons (instead of marginTop in carbotButtonContainer)
        height: 10,
    }
});

export default CarbotButton;