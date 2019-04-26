import React from 'react'
import {
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { fetchItems } from './Actions'
import { Card, SearchBar } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons'

import styles from './style.js';
import { ScrollView } from 'react-native-gesture-handler';



class BrowseScreen extends React.Component {

  componentDidMount() {
    this.props.fetchItems();
    console.log(this.props)
  }
  _handleCardPressed = () => {
    console.log('Card pressed on Listing Screen!');
  }
  render() {
    console.log('Listing Screen items:');
    console.log(this.props.items[0]);

    if (this.props.items.length == 0)
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={styles.header}>Browse</Text>
          <ActivityIndicator />
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <View>
            <SearchBar
              round={true}
              lightTheme={true} />
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.toolbarOpacity}>
                  <Image
                    source={require("../../../resources/categories.png")}
                    style={{ width: 30, height: 30, tintColor: 'black' }}>
                  </Image>
                  <Text style = {styles.subHeading} >Categories</Text>
                </TouchableOpacity>

              <TouchableOpacity style={styles.toolbarOpacity}>
                <Image
                  source={require("../../../resources/location.png")}
                  style={{ width: 30, height: 30, tintColor: 'black' }}>
                </Image>
                <Text style = {styles.subHeading}>Location</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.toolbarOpacity}>
                <Image
                  source={require("../../../resources/refine.png")}
                  style={{ width: 30, height: 30, tintColor: 'black' }}>
                </Image>
                <Text style = {styles.subHeading}>Refine</Text>
              </TouchableOpacity>
            </View>

          </View>

          <ScrollView style={styles.contentContainer}>
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
            <TouchableOpacity style={styles.newListing} onPress={() => console.log(this.props)}>
              <Text style={styles.newListingText}> New Listing</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>
      );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

const mapStateToProps = state => {
  return {
    items: state.browse.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseScreen);