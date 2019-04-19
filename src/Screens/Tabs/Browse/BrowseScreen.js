import React from 'react'
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

export default class BrowseScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>BrowseScreen</Text>
       </View>
     );
   }
}

// const mapStateToProps = state => {
//   const { isFetching, item } = state.item;
//   return { isFetching, item }
// };

// export default connect(mapStateToProps)(BrowseScreen);