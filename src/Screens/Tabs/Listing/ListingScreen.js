import React from 'react'
import { Button, Text, View } from 'react-native';
export default class ListingScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Listing Screen</Text>
        <Button title = 'new listing' onPress={() => this.props.navigation.navigate('NewListing')}></Button>
        </View>
     );
   }
}