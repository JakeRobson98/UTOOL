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
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        color: '#26547C'
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