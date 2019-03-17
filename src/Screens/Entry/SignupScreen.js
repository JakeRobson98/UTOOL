import React from 'react'

export default class Signup extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Signup Page </Text>
                <Button
                    title="go to dash"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        )
    }
}