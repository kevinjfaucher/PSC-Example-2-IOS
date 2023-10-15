import React, { Component } from 'react'; // This imports the React and Component libraries from React Native.
import { View, Text, StyleSheet } from 'react-native'; // This imports the View, Text, and StyleSheet components from React Native.
import { NavigationBar, NavigationItem } from 'react-native-navigation-bar'; // This imports the NavigationBar and NavigationItem components from react-native-navigation-bar.

/**
 * This is a simple navigation bar example.
 */
class NavBarExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        /**
         * This is the navigation bar component. It displays a title and two items, a left item and a right item.
         */
        <NavigationBar title="Navigation Bar Example">
          /**
           * This is the left item component. It displays a title and has an onPress event handler.
           */
          <NavigationItem
            title="Left Item"
            onPress={() => {
              // Do something when the left item is pressed.
            }}
          />
          /**
           * This is the right item component. It displays a title and has an onPress event handler.
           */
          <NavigationItem
            title="Right Item"
            onPress={() => {
              // Do something when the right item is pressed.
            }}
          />
        </NavigationBar>
        <Text>This is the content of the screen.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavBarExample;
