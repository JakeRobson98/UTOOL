var React = require('react-native');

var {
 StyleSheet
} = React;

module.exports = StyleSheet.create({
 container: {
  flex: 1,
  marginLeft: 10,
  marginTop: 80,
  marginRight: 10
 },
 containerNewListing: {
  flex: 1,
  marginLeft: 10,
  marginTop: 0,
  marginRight: 10
 },
 headerContainer: {
  flex: 1.5,
  marginTop: -70,
  flexDirection: 'column',
  justifyContent: 'space-between'
 },
 toolbarOpacity:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
 },
 buttonGroup: {
  flex: 1,
  flexDirection: 'row',
  marginTop: 25,
  marginBottom: 80,
  justifyContent: 'space-evenly',
 },
 contentContainer: {
  flex: 5,
 },
 addListingIcon: {
  fontSize: 30,
  color: 'black'
 },
 itemCard: {
  marginLeft: 2,
  marginRight: 2
 },
 thumbnailImg: {  
  width: 130,
  height: 100,
  padding: 10,
  marginRight: 20
 },
 cardContent: {

 },
 cardContainer: {
   flexDirection: 'row'
 },
 touchableAdd: {
  color: 'pink'
 },
 textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8,
    color: '#26547C',
  },
  textArea: {
    height: 80,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
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
 },
 newListing: {
  alignItems: 'center',
  backgroundColor:'blue',
  borderWidth:1,
  borderColor: "white",
  borderTopWidth: 1,
  marginTop:10,
  borderRadius: 20
 },
 newListingText:{
  fontSize: 25,
  color: 'white'
 }
});