import React from 'react'
import { Button, Text, View } from 'react-native';
export default class Tab3 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>tab 3 screen </Text>
        <Button
        title="go to 4"
          onPress={() => this.props.navigation.push('Tab4')}
          
        />
       </View>
     );
   }
}