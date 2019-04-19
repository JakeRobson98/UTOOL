
import React from 'react'
import { StyleSheet, ActivityIndicator, Button, TouchableOpacity, Text, View } from 'react-native';
var styles = require('../../../resources/style');
import { register } from './Actions';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextInput } from 'react-native-gesture-handler';

class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        dateOfBirth: "01-01-1930",
        email:'',
        password:'',
        errorMessage: null,
        isLoading: true,
        titleText: 'Congratulations',
        bodyText: 'We just some need personal information...'
    }
    handleSignup = () => {
        const { email, password } = this.state
        console.log('Date of birth');
        console.log(this.state.dateOfBirth)
        // this.state.dateOfBirth = this.state.dateOfBirth.split("-").reverse().join("-");
        this.props.register({
            username: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfBirth: this.state.dateOfBirth
        });
        this.props.navigation.navigate('Dashboard')
    }
    componentDidMount() {
        this.setState({ isLoading: false });
        this.state.email = this.props.navigation.getParam('email');
        this.state.password = this.props.navigation.getParam('password');
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({ dateOfBirth: date })
        this._hideDateTimePicker();
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    selectionColor={'#26547C'}
                    placeholderTextColor={'#26547C'}
                    placeholder="First name"
                    onChangeText={firstName => this.setState({ firstName })}
                    value={this.state.firstName}>
                </TextInput>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    selectionColor={'#26547C'}
                    placeholderTextColor={'#26547C'}
                    placeholder="Last name"
                    onChangeText={lastName => this.setState({ lastName })}
                    value={this.state.lastName}>
                </TextInput>
                <Button onPress={this._showDateTimePicker} title = "choose date of birth">
                </Button>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                <Button style={styles.button} color={'#26547C'} title="continue" onPress={this.handleSignup} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (user) => dispatch(register(user))
    }
}

const mapStateToProps = state => {
    const { isFetching } = state;
    return { isFetching }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);