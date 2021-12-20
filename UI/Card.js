import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
|--------------------------------------------------
| This came from the react-native Udemy course 
| "React Native - The Practical Guide (2022 Edition)"
|--------------------------------------------------
*/
const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10
    }
});

export default Card;
