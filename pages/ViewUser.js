/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {useState,useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './componenets/Mytextinput';
import Mybutton from './componenets/Mybutton';
import { FlatList, Text } from 'react-native';
import Realm from 'realm';
let realm;


//test
 const ViewUser  = () => {
    const [input_user_id, setinput_user_id] = useState('');
    const [userdetails, setUserDetails] = useState([]);
    

    realm = new Realm({ path: 'UserDatabase.realm' });
    
// Select Single Record
    const searchUser = (idd) => {
      try {
       var user_details = realm
       .objects('user_details')
       .filtered('user_id =' + idd);
        
     //  Select * from user_details where user_id =idd
     
     if (user_details.length > 0) {
       setUserDetails(user_details[0]);
     } else {
       alert('No user found');
       SetUserName('Not a Valid User');
  
     }
        
      } catch (error) {
        
      }
  
  };


return (
  <View style={{ backgroundColor: 'white', flex: 1 ,alignContent:"space-around" }}>
        <Mytextinput
          placeholder="Enter User Id"
          onChangeText={id => setinput_user_id( id) }
        />
        <Mybutton
          title="Search User"
          customClick={() => searchUser(input_user_id)}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>User Id: {userdetails.user_id}</Text>
          <Text>User Name: {userdetails.user_name}</Text>
          <Text>User Contact: {userdetails.user_contact}</Text>
          <Text>User Address: {userdetails.user_address}</Text>
        </View>
      </View>
  );
  };


  export default ViewUser;




