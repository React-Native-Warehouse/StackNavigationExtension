import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { fetchData } from '../../actions'
import Colors from '../../constants/Colors';
import { Card } from '../../components/Card';


class LinksScreen extends React.Component {
    static navigationOptions = ({ router, navigation }) => {

        return {
          header: (
              <View
                  style={{ backgroundColor: Colors.tintColor, flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack(null)}
                    style={{ marginTop: 24, height: 40, marginLeft: 5, flexDirection: 'row'}} >
                     <MaterialCommunityIcons name="arrow-left" size={24} style={{ color: 'white', }} />
                     <Text
                        style={{marginLeft: 15, fontSize: 18, color: 'white', fontWeight: 'bold' }}
                     >Load Data</Text>
                  </TouchableOpacity>
                  <View>
                  </View>
              </View>
          )
       }
    };


    constructor(props){
        super(props)
    }

    onPressMe = () => {
        console.log(this.props.default_value);
        this.props.toggleProfileState(this.props.default_value)
    }

    pressedRender = () => {
        if (this.props.default_value === true){
            return (
               <Text>
                  (Load Data: True)
               </Text>
            )
        }
        return (
           <Text>
              (Load Data: False)
           </Text>
        )
    }

  render() {
    return (
        <View style={styles.container}>
          <Card
              style={styles.TestContainerStyle}
          >
              <TouchableOpacity
                  style={styles.TestTouchableStyle}
                  onPress={this.props.fetchData()}
              >
                <Text
                  style={{ color: 'white' }}
                >
                  {this.pressedRender()}
                </Text>
              </TouchableOpacity>
                <View style={{margin: 10}}>
                    {
                      this.props.LinksReducer.isFetching && <Text>Loading</Text>
                    }
                    {
                      this.props.LinksReducer.data.length ? (
                        this.props.LinksReducer.data.map((person, i) => {
                          return <View key={i} >
                            <Text>Name: {person.name}</Text>
                            <Text>Age: {person.age}</Text>
                          </View>
                        })
                      ) : null
                    }
                </View>

          </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TestTouchableStyle: {
      height: 100,
      width: 100,
      backgroundColor: Colors.tintColor,
      alignItems: 'center',
      justifyContent: 'center',
  },
  TestContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
  },
});

function mapStateToProps (state) {
  return {
    LinksReducer: state.LinksReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);
