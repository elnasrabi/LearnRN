/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {useState,useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './componenets/Mytextinput';
import Mybutton from './componenets/Mybutton';
import { FlatList, Text } from 'react-native';
import Realm from 'realm';
let realm;



 const ViewAllUser  = () => {
    const [user_name, setUserName] = useState('');
    const [user_contact, setusercontact] = useState('');
    

    realm = new Realm({ path: 'UserDatabase.realm' });

    var user_details = realm.objects('user_details');

    const [FlatListItems, setFlatListItems] = useState([]);

    const ListViewItemSeparator = () => {
      return (
        <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
      );
    };

    const searchUser = (username) => {
   
      try {

       var user_details_query = realm
       .objects('user_details')
       .filtered('user_name CONTAINS '+'\''+username+'\'');

     if (user_details_query.length > 0) {
      setFlatListItems(user_details_query);
       //setUserDetails(user_details_query[0]);
      
       
     } else {

      setFlatListItems(user_details);
     }
        
      } catch (error) {
        
      }
  
  };

return (
  <View>
      <Mytextinput
          placeholder="Filter by User name"
          onChangeText={name => {setUserName( name); searchUser(name)} }
        />
        {/* <Mybutton
          title="Search User"
          customClick={() => searchUser(user_name)}
        /> */}

        <FlatList
          data={FlatListItems}
          ItemSeparatorComponent={ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.user_id}</Text>
              <Text>Name: {item.user_name}</Text>
              <Text>Contact: {item.user_contact}</Text>
              <Text>Address: {item.user_address}</Text>
            </View>
          )}
        />
      </View>
  );
  };


  export default ViewAllUser;




