import React, { useEffect, useState } from 'react';
import { View, Text,ScrollView, Image,StyleSheet,TouchableOpacity } from 'react-native';
import { withNavigation, useRoute } from 'react-navigation';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import { detailsProduct, listProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../components/loading';


function DetailsScreen({ props, navigation }) {


  const pid = useNavigationParam('id');
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(pid));
    return () => {
    };
  }, []);

  const submitHandler = (e) => {
    // e.preventDefault();
    navigation.navigate('Signin')
 
   }
  return (
  <View  style={styles.container_login}>
    
          <ScrollView>
        <View style={styles.section}>
          <Image
            source={{ uri:loading?'https://flevix.com/wp-content/uploads/2019/07/Ring-Loading-feature.gif': product.image } }
            style={styles.image}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text type="header">{loading?'hello':product.name}</Text>
            <Text type="subheader" style={{ marginTop: 5 }}>
              {loading?<Loading />:product.price}
            </Text>
          </View>
        </View>

        <View style={[styles.section, { flexDirection: 'column' }]}>
          <Text type="header">Description</Text>
          {loading ? <Loading /> : <Text>{loading?'hello':product.description}</Text>}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.loginBtn}  onPress={() => submitHandler()} >
                <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>
  
  </View>
  );
}
const styles = StyleSheet.create({
  section: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 15,
    flexDirection: 'row',
    borderRadius:2,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c6c6c6',
  },
   container_login: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
  image: {
    width: 150,
    borderRadius:20,
    height: 150,
    marginRight: 15,
  },loginBtn: {
    width: "80%",
    backgroundColor: "#F1DE0E",
    borderRadius: 25,
    height: 50,
    color: 'black',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
},
forgot: {
    color: "#000",
    backgroundColor: "#F1DE0E",
    borderRadius: 25,
    width: "80%",
    fontSize: 14,
    height: 50,
    color: 'black',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10

},
loginText: {
    color: "black"
},
});
export default DetailsScreen;