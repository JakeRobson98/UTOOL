var React = require('react-native');

var {
 StyleSheet
} = React;

module.exports = StyleSheet.create({
 container: {
  flex: 1,
  marginLeft: 30,
  marginTop: 50,
  marginRight: 30,
 },
 textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    color: '#26547C',
  },
  textArea: {
    height: 80,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    color: '#26547C',
  },
 header: {
  fontSize: 30,
  color: '#000000',
  paddingBottom: 20

 },
 subHeading: {
  fontSize: 18,
  color: '#7f8c8d',
  paddingBottom: 10

 },
 touchable_item: {
  flex: 1,
 },
 selections: {
  flex: 1,
  fontSize: 20,
  color: '#4d4d4d',
  marginTop: 30,
  paddingTop: 30,
  borderTopColor: '#e8e8e8',
  borderTopWidth: 1,
 }
});