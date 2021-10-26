// src/views/Home.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity,ActivityIndicator  } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { ProductCard } from '../components/Productlist';
import { listProducts } from '../actions/productActions';
import analytics from '@react-native-firebase/analytics';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../components/data';
import AsyncStorage from '@react-native-community/async-storage';



function HomeScreen({ navigation }) {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error, data } = productList;
  const toDetail =async (r) => {
    await analytics().logEvent('select_item',{'name':r.name});
    
    navigation.navigate('Details',{id:r._id})
    
  };

  

  
  const Item = ({ title }) => (
    
    <TouchableOpacity style={styles.card}  onPress={() =>{ toDetail(title)  ; }} >
      <View style={styles.cardFooter}></View>
  
      <View style={styles.cardHeader}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.title} >{title.name}</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.title}    >{title.price}</Text>
        </View>
      </View>
    </TouchableOpacity>

  
  )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    
    return () => {
    };
  }, []);
  
  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  const [productss, setProductss] = useState([]);
  const [Flag, setFlag] = useState(true);
  useEffect(() => {
    setProductss(getProducts());
    setFlag(false);
  }, [Flag]);
  return (
    <View>
{/* <Text>Home</Text>
            <Button
               
                title="Open details page"
            /> */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />  

    </View>
  );
}


const styles = StyleSheet.create({

  row: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

  },

  col: {

    flex: 1,

  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: 'center'
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: "white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#696969"
  },
});


export default HomeScreen;