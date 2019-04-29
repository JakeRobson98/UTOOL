import React from 'react';
import { 
 View, 
 Button, 
 Text,
 FlatList,
 TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getUser }  from './Actions';

import styles from './style.js';

class Profile extends React.Component {

 _handlePress() {

 }

 componentDidMount(){
  console.log(this.props)
  jwt = this.props.login.user.token;
  console.log(jwt.token)
  this.props.getUser(jwt.token);
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
const mapDispatchToProps = dispatch => {
  return {
    getUser: (jwt) => dispatch(getUser(jwt))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

