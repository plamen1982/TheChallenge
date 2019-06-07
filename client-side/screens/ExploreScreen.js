import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

import UserService  from '../services/user-service'
export default class ExploreScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
      };
    }

    static userService = new UserService();

    _keyExtractor = (item) => item.id.toString();

    render(){
      if(this.state.loading){
       return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
     )}

     return(
      <View style={styles.container}>
        <Text>Fun Section</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={this._keyExtractor}
        />
     </View>
     )}

    async componentDidMount() {
      try {
        const dataSource = await ExploreScreen.userService.getAllUsers();
        console.log(dataSource)
        this.setState({
          dataSource,
          loading: false
        });
      } catch(error) {
        console.log(error);
      }
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
