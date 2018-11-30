import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


class Inputs extends Component {
  state = {
    comment: '',
    photo: '',
  }
  handleSubmit = () => {
    //Api.submitForm(this.state.location);
    this.props.handleSubmit(this.state.comment, this.state.photo)

  }

  handleComment = (text) => {
    this.setState({ comment: text })
    console.log(text, "hereee")
  }

  success = (comment) => {
    alert('commets: ' + comment)
  }
  render() {
    return (
      <View style={styles.container}>
       

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="description"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleComment} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleSubmit
            //() => this.login(this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
})