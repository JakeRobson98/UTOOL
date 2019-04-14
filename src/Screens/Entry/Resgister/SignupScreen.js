
import React from 'react'
import { StyleSheet,ActivityIndicator, Button, TextInput, Text, View } from 'react-native';
var styles = require('../../../resources/style');
import { register } from './Actions';
import { connect } from 'react-redux';

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
        isLoading: true,
        titleText: 'Welcome to UTOOL!',
        bodyText: 'We just some need personal information...'
    }
    handleSignup = () => {
        const { email, password } = this.state
        console.log(email + password)
        this.props.register(email, password);
        this.props.navigation.navigate('Dashboard')
    }
    componentDidMount(){
        this.setState({isLoading : false});
        console.log(this.state)

    }
    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {this.state.titleText}
                </Text>
                <Text style={styles.bodyText}>
                    {this.state.bodyText}{'\n'}
                </Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    selectionColor={'#26547C'}
                    placeholderTextColor={'#26547C'}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    selectionColor={'#26547C'}
                    placeholderTextColor={'#26547C'}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button style={styles.button} color={'#26547C'} title="Signup!" onPress={this.handleSignup}/>

            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (email, password) => dispatch(register(email, password))
    }
}

const mapStateToProps = state => {
    const { isFetching } = state;
    return { isFetching }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);