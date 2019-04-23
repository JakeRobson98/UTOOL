import React from 'react'
import { Button, Text, View } from 'react-native';
import { Card} from 'react-native-elements';
//var styles = require('../../resources/style');
import styles from '../../resources/style'

export default class Entry extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <Card containerStyle = {styles.cardContainer}>
        <Text style={styles.titleText} >Welcome to UHire </Text>
        <Button
          title="login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        </Card>
       </View>
     );
   }
}
