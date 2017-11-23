import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Button } from 'react-native'
import styles from './Styles/LoginFormStyle'

export default class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onPressSubmit () {
    this.props.onFormSubmit(this.state.username, this.state.password);
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Your username"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          placeholder="Your password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          onPress={this.onPressSubmit}
          title="Sign in to Taleship"
        />
      </View>
    )
  }
}
