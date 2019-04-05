import React from 'react'
import { Button, Text, View } from 'react-native';
export default class Entry extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Entry Screen </Text>
        <Button
          title="login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
       </View>
     );
   }
}
