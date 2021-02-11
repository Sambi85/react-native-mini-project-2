import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp'; 

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        response.data;
        setResult(response.data);
    };

    return (
        <View>
            <Text> 
                Results Show 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;