import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title, results }) => {
    return <View>
        <Text>{title}</Text>
        <Text>Results: {results.length}</Text>
    </View>
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;