import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
console.log(results)
    const filteredResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            
            <Text>Search Screen</Text>
            { errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
            <ResultsList results={filteredResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filteredResultsByPrice('$$')} title="Bit Pricer" />
            <ResultsList results={filteredResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;