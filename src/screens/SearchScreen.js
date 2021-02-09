import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
console.log(results)
    const filteredResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <View style={{ flex: 1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            
            { errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList 
                results={filteredResultsByPrice('$')} 
                title="Cost Effective"
                navigation={navigation}
                />
            <ResultsList 
                results={filteredResultsByPrice('$$')} 
                title="Bit Pricer" 
                navigation={navigation}
                />
            <ResultsList 
                results={filteredResultsByPrice('$$$')} 
                title="Big Spender"
                navigation={navigation}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;