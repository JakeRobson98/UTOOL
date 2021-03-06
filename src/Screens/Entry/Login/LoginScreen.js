import React from 'react'
import {  ActivityIndicator, Button, TextInput, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { getUser, loginUser } from './Actions';
import { connect } from 'react-redux';

var styles = require('../../../resources/style');
class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
        isLoading: true,
        titleText: 'Welcome to UTOOL!',
        bodyText: 'Please sign in.'
    }
    handleLogin = () => {
        const { email, password } = this.state
        this.props.getUser({ username: email, password: password });
        this.props.navigation.navigate('Dashboard')
        
    }
    componentDidMount() {
        this.setState({ isLoading: false });
    }
    render() {
        if (this.props.isFetching) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Card containerStyle={styles.cardContainer}>
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
                        <Button style={styles.button} color={'#26547C'} title="Login!" onPress={this.handleLogin} />
                    </Card>
                </View>
            );
        }

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (user) => dispatch(getUser(user))
    }
}

const mapStateToProps = state => {
    const { isFetching, user } = state;
    return { isFetching, user }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);