import React, { Component }    from 'react';
import { 
 View, 
 Button, 
 Text,
 FlatList,
 TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './style.js';

export default class Profile extends Component {

 _handlePress() {

 }

 _handleButtonPress() {
 }

 render(){
  return (
   <View style={styles.container}>
    <Text style={styles.header}>Taylor</Text>
    <Text style={styles.subHeading}>View and edit profile</Text>
    {/* <Button onPress={() => this.props.navigation.navigate('Profile2')} title="Signup!"></Button> */}
    <FlatList
     style={styles.list} 
     data={[
      {key: 'Details', affiliate: 'My' }, 
      {key: 'Settings'},
      {key: 'Contact Us'},
      {key: 'Help'},
      {key: 'Log out'}]}
     renderItem={({item}) => <TouchableOpacity onPress={() => this.props.navigation.navigate(item.key)}><Text style={styles.selections}>{item.affiliate} {item.key}</Text></TouchableOpacity>}/>
   </View>
  );
 }

}

