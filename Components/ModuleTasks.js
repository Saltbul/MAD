import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RoundedRectangles = ({ rectangles }) => {
    return (
        <View style={styles.container}>
            {rectangles.map((rectangle, index) => (
                <View key={index} style={[styles.rectangle, { borderRadius: rectangle.radius, width: screenWidth * 0.9, height: screenWidth * 0.2 }]}>
                    <Text style={styles.text}>{rectangle.text}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        marginTop: 15,
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
});

export default RoundedRectangles;