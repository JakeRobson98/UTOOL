
import React from 'react'
import { Button, Text, View } from 'react-native';
export default class Login extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Login Page </Text>
                <Button
                    title="go to dash"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>);
    }
}