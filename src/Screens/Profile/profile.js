import React from 'react';
import { 
 View, 
 Button, 
 Text,
 FlatList,
 ActivityIndicator,
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
  this.props.getUser(jwt.token);
 }

 _handleButtonPress() {
 }

 render(){
   if(this.props.user == undefined){
     return (
     <View>
       <Text style={styles.header}>Profile</Text>
       <Button onPress={() => console.log(this.props)} title="Signup or sign in"></Button>
          <ActivityIndicator />
       </View>);
   }
   else{
    return (
      <View style={styles.container}>
       <Text style={styles.header}>{this.props.user.firstName}</Text>
       <Text style={styles.subHeading}>View and edit profile</Text>
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
}
const mapDispatchToProps = dispatch => {
  return {
    getUser: (jwt) => dispatch(getUser(jwt))
  }
}

const mapStateToProps = state => {
  console.log('Map state to props profile page');
  console.log(state.user);
  return {
    user: state.user.user.user,
    login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

