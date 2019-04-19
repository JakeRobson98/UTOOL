import React from 'react'
import { 
  Button, 
  Text,
  Card, 
  View,
  TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { getUseritems } from './Actions'
import styles from './style.js';

class ListingScreen extends React.Component {
  
  componentDidMount() {

  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Listing</Text>
            <TouchableOpacity style={styles.touchableAdd} onPress={() => this.props.navigation.navigate('NewListing')}><Text style={styles.addListingIcon}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <Button title = 'new listing' onPress={() => this.props.navigation.navigate('NewListing')}></Button>
          </View>
        </View>
     );
   }
}

const mapDispatchToProps = dispatch => {
  return {
    items: state.listing.mylistings
  }
}

const mapStateToProps = state => {
  return {
    getUseritems: (ownerid) => dispatch(getUseritems(ownerid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);