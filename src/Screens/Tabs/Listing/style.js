var React = require('react-native');

var {
 StyleSheet
} = React;

module.exports = StyleSheet.create({
 container: {
  flex: 1,
  marginLeft: 30,
  marginTop: 80,
  marginRight: 30,
 },
 headerContainer: {
  flex: 1.5,
  marginTop: -70,
  flexDirection: 'row',
  justifyContent: 'space-between'
 },
 contentContainer: {
  flex: 5,
  backgroundColor: 'red'
 },
 addListingIcon: {
  fontSize: 30,
  color: 'black'
 },
 touchableAdd: {
  color: 'pink'
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
  paddingBottom: 20,
  marginTop: 70
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