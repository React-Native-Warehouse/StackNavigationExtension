import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: "Home",
        headerTintColor: "rgba(189, 74, 43, 1)"
    };

  constructor(props){
      super(props)
  }

  OpenProfile = () => {
      this.props.navigation.navigate("Profile")
  }

  OpenLinks = () => {
      this.props.navigation.navigate("Links")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={this.OpenProfile}
            >
              <Text style={styles.tabBarInfoText}>
                Tap to Open Profile.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={this.OpenLinks}
            >
              <Text style={styles.tabBarInfoText}>
                Tap to Open Links.
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
