'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;
//backgroundColor='#26547C'
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD166'
      },
      textInput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 8,
        marginBottom: 10,
        color: '#26547C',
      },
      cardContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        width: "93%"
      },
      button: {
        paddingTop: 10
      },
      titleText: {
        fontSize: 26,
        color: '#26547C'
      },
      bodyText: {
        fontSize: 18,
        color: '#26547C'
      }
      
});