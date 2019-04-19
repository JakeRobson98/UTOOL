var React = require('react-native');

var {
 StyleSheet
} = React;

module.exports = StyleSheet.create({
 container: {
  flex: 1,
  marginLeft: 30,
  marginTop: 70,
  marginRight: 30
 },
 header: {
  fontSize: 30,
  color: '#000000'
 },
 subHeading: {
  fontSize: 18,
  color: '#7f8c8d'
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