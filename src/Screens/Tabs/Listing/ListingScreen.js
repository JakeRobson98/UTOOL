import React from 'react'
import {
  Button,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { getUseritems } from './Actions'
import styles from './style.js';

class ListingScreen extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.getUseritems(this.props.user.id);

  }

  _handleCardPressed = () => {
    console.log('Card pressed on Listing Screen!');
  }

  render() {

    console.log('Listing Screen items:');

    if (this.props.items.length == 0)
      return (
       
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
          <TouchableOpacity style={styles.newListing} onPress={() => this.props.navigation.navigate('NewListing')}>
            <Text style={styles.newListingText}> New Listing</Text>
          </TouchableOpacity>
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.header}>Listing</Text>
            {
              this.props.items[0].map((u, i) => {
                console.log('ITEM');
                console.log(u.Title);
                return (
                  <TouchableOpacity key={i} onPress={this._handleCardPressed}>
                    <Card containerStyle={styles.itemCard}>
                      <View style={styles.cardContainer}>
                        <Image style={styles.thumbnailImg} source={{ uri: 'https://images.lowes.ca/img/p400/13248/654102630094.jpg' }} />
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
            <TouchableOpacity style={styles.newListing} onPress={() => this.props.navigation.navigate('NewListing', {ownerId: this.props.user.id})}>
              <Text style={styles.newListingText}> New Listing</Text>
            </TouchableOpacity>
          </ScrollView>
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
    items: state.listing.mylistings,
    user: state.user.user.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);