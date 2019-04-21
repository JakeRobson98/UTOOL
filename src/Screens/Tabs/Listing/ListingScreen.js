import React from 'react'
import { 
  Button, 
  Text,
  View,
  Image,
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

  _handleCardPressed = () => {
    console.log('Card pressed on Listing Screen!');
  }

  render() {

    console.log('Listing Screen items:');
    console.log(this.props.items[0]);

    if(this.props.items.length == 0)
      return(
        <View>
          <Text>Loading Data...</Text>
          <Button title = 'new listing' onPress={() => this.props.navigation.navigate('NewListing')}></Button>

        </View>
      );
    else
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Listing</Text>
            <TouchableOpacity style={styles.touchableAdd} onPress={() => this.props.navigation.navigate('NewListing')}><Icon name="plus" size={30} color="black"/></TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            {
              this.props.items[0].map((u,i) => {
                console.log('ITEM');
                console.log(u.Title);
                return (
                  <TouchableOpacity key={i} onPress={this._handleCardPressed}>
                    <Card containerStyle={styles.itemCard}>
                      <View style={styles.cardContainer}>
                        <Image style={styles.thumbnailImg}source={{uri: 'https://images.lowes.ca/img/p400/13248/654102630094.jpg'}}/>
                        <View style={styles.cardContent}>
                          <Text>{u.Title}</Text>
                          <Text>{u.address}, Auckland</Text>
                          <Text>From ${u.price} per day</Text>
                        </View>
                      </View>
                    </Card>
                  </TouchableOpacity>
                );
              })
            } 
            <TouchableOpacity style ={styles.newListing} onPress={() => this.props.navigation.navigate('NewListing')}>
            <Text style = {styles.newListingText}> New Listing</Text>
            </TouchableOpacity>
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