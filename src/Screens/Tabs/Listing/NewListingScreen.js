import React from 'react'
import { Button, Card, Text, TextInput, View, StyleSheet } from 'react-native';

import styles from './style.js';
import { postItem } from './Actions';
import { connect } from 'react-redux';



class NewListingScreen extends React.Component {
  state = {
    Title: "",
    Description: "",
    address: "",
    price: 0,
    isLoading: true,
    errorMessage: null,
  }
  componentDidMount(){
    this.setState({isLoading : false});
 }
  submitNewItem = () => {
    console.log(this.state)
    this.props.postItem({
      Title: this.state.Title,
      Description: this.state.Description,
      address: this.state.address,
      price: this.state.price
    });
    alert("Added item!");
  }
  onChanged (text) {
    this.setState({
        price: text.replace(/[^0-9]/g, ''),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>New Listing</Text>

        <View style={{ flex: 1, flexDirection: 'column', alignItems: "flex-start" }}>
          <Text style={styles.subHeading}>TItle:</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            selectionColor={'#26547C'}
            placeholderTextColor={'#26547C'}
            placeholder="e.g Box trailer"
            onChangeText={Title => this.setState({ Title })}
            value={this.state.Title}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: "flex-start" }}>
          <Text style={styles.subHeading}>Description:</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            autoCapitalize="none"
            selectionColor={'#26547C'}
            placeholderTextColor={'#26547C'}
            placeholder="e.g I have used this triler for 10 years and it has never given mes issues..."
            onChangeText={Description => this.setState({ Description })}
            value={this.state.Description}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: "flex-start" }}>
          <Text style={styles.subHeading}>Price:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={'numeric'} // This prop help to open numeric keyboard
            selectionColor={'#26547C'}
            placeholderTextColor={'#26547C'}
            placeholder="e.g $20"
            onChangeText={price => this.onChanged(price)}
            value={this.state.price}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: "flex-start" }}>
          <Text style={styles.subHeading}>Adress:</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            selectionColor={'#26547C'}
            placeholderTextColor={'#26547C'}
            placeholder="e.g Box trailer"
            onChangeText={address => this.setState({ address })}
            value={this.state.address}
          />
        </View>
        <Button title = "submit" style = {styles.textInput} onPress = {this.submitNewItem} >

        </Button>

      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      postItem: (item) => dispatch(postItem(item))
  }
}

const mapStateToProps = state => {
  const { isFetching, item } = state;
  return { isFetching, item }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewListingScreen);