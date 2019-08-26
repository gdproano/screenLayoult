import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

export default class App extends Component {
  state = {
    modalVisible: true
  };

  setModalVisible (visible)  {
    this.setState({ modalVisible: visible });
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.modalVisible && <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        }
        <View style={styles.navigation}>
          <Text style={styles.navigationText}>Navigation</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Escanea el código de tu vecino a quien quieres paggar.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.mainText}>Pago.</Text>
        </View>
        <View style={styles.footer}>
        <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Open Modal</Text>
              </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    padding: 24
  },
  headerText: {
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19.2,
    letterSpacing: 0,
    color: "rgba(0, 0, 0, 0.54)"
  },
  main: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  modal: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

  },
  navigation: {
    height: 76
  },
  footer: {
    padding: 40
  },
  footerText: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 19.2,
    letterSpacing: 0,
    textAlign: "center",
    color: "#0f265c"
  }
});
