import React from 'react'
import { Button, Text, View } from 'react-native';
export default class Entry extends React.Component {

  state = {
      dbmessage: "here we do",
  }

 

componentDidMount(){

    this.state.dbmessage = fetch('/').then(res => res.json())
    .then(mes => this.setState({ dbmessage }));
}

  
render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Entry Screen {this.state.dbmessage}</Text>
        <Button
          title="login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="signup"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
       </View>
     );
   }
}
