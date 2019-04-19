import React from 'react'
import { 
  Button, 
  Text,
  View,
  TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

import { getUseritems } from './Actions'
import styles from './style.js';

class ListingScreen extends React.Component {
  
  componentDidMount() {
    this.props.getUseritems(1);
  }

  render() {

    console.log('Listing Screen items:');
    console.log(this.props.items[0]);

    if(this.props.items.length == 0)
      return(
        <View>
          <Text>Loading Data...</Text>
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Listing</Text>
            <TouchableOpacity style={styles.touchableAdd} onPress={() => this.props.navigation.navigate('NewListing')}><Icon name="plus" size={30} color="black"/></TouchableOpacity>
          </View>
            {
              this.props.items[0].map((u,i) => {
                console.log('ITEM');
                console.log(u.Title);
                return (
                  <Card key={i}>
                    <View>
                      <Text>{u.Title}</Text>
                      <Text>{u.Description}</Text>
                      <Text>{u.price}</Text>
                    </View>
                  </Card>
                );
              })
            }  
          <View style={styles.contentContainer}>
            <Button title = 'new listing' onPress={() => this.props.navigation.navigate('NewListing')}></Button>
          </View>
        </View>
     );
   }
}

const mapDispatchToProps = dispatch => {
  return {
    getUseritems: (ownerid) => dispatch(getUseritems(ownerid))
  }
}

const mapStateToProps = state => {
  return {
    items: state.listing.mylistings
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);