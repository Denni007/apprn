import { Platform } from 'react-native';

export const API_URL = Platform.OS === 'android' ?
    'https://dartcom.herokuapp.com'
: 
'http://localhost:5000/';
