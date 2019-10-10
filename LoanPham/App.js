import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,Image } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={danhsachlop:[
        {key:'1',Monhoc:'Android', Nganhhoc:'CNTT'},
        {key:'2',Monhoc:'Web', Nganhhoc:'CNTT'},
        {key:'3',Monhoc:'Android', Nganhhoc:'CNTT'},
        {key:'4',Monhoc:'Web', Nganhhoc:'CNTT'},
        {key:'5',Monhoc:'Android', Nganhhoc:'CNTT'},
        {key:'6',Monhoc:'Web', Nganhhoc:'CNTT'},
        {key:'7',Monhoc:'Android', Nganhhoc:'CNTT'},
        {key:'8',Monhoc:'Web', Nganhhoc:'CNTT'},
        {key:'9',Monhoc:'Android', Nganhhoc:'CNTT'}
      ]}}
  render() {
    return (

      <View style={styles.container}>
      <Image
         style={{width: 50, height: 50}}
         source={{uri: ''}}
       />
        <FlatList
          data={this.state.danhsachlop}
          renderItem={({item}) =>(
            <View style={styles.duongvien}>
              <Text style={styles.item}>{item.key}</Text>
              <Text style={styles.item}>{item.Monhoc}</Text>
              <Text style={styles.item}>{item.Nganhhoc}</Text>
            </View>
            )}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'blue',

  },
  item: {

    padding: 10,
    fontSize: 18,
    height: 44,
  },
  duongvien:{
    borderBottomWidth:1,
    borderBottomColor:'white',
  }
})
