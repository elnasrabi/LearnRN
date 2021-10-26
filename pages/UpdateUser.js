/*Screen to register the user*/
import React from 'react';
import {useState,useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './componenets/Mytextinput';
import Mybutton from './componenets/Mybutton';
import Realm from 'realm';
let realm;



 const UpdateUser  = ({navigation}) => {
  const [input_user_id, setinput_user_id] = useState('');
    const [user_name, setUserName] = useState('');
    const [user_contact, setusercontact] = useState('');
    const [user_address, setUserAddress] = useState('');

    realm = new Realm({ path: 'UserDatabase.realm' });

    // useEffect(() => {
    //   if (consignmentStore.isConsignmentSaved) {
    //     showAlert("", "common.successUpdated", "common.ok", onOkayPress);
    //   }
    // }, [consignmentStore.isConsignmentSaved]);

    const searchUser = (idd) => {
      try {
       var user_details = realm
       .objects('user_details')
       .filtered('user_id =' + idd);
   
     if (user_details.length>0) {
      console.log('users Test Details' ,user_details[0]);
       setUserName(user_details[0].user_name);
       setUserAddress(user_details[0].user_address);
       setusercontact(user_details[0].user_contact);
     } else {
       alert('No user found');
       SetUserName('Not a Valid User');
       setUserName('');
       setUserAddress('');
       setusercontact('');
     }
        
      } catch (error) {
        
      }
  
  };

    const updateUser = () => {
    
      if (input_user_id) {
        if (user_name) {
          if (user_contact) {
            if (user_address) {

              realm.write(() => {
               
              
                var obj = realm
                  .objects('user_details')
                  .filtered('user_id =' + input_user_id);

                if (obj.length > 0) {
                  obj[0].user_name = user_name;
                  obj[0].user_contact = user_contact;
                  obj[0].user_address = user_address; //JohnSmith@yahoo.com

               
                  Alert.alert(
                    'Success',
                    'User updated successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('User Updation Failed');
                }
              });
            } else {
              alert('Please fill Address');
            }
          } else {
            alert('Please fill Contact Number');
          }
        } else {
          alert('Please fill Name');
        }
      } else {
        alert('Please fill User Id');
      }
    };
return (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
  <ScrollView keyboardShouldPersistTaps="handled">
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, justifyContent: 'space-between' }}>
         <Mytextinput
          placeholder="Enter User Id"
          onChangeText={id => {setinput_user_id( id) }}
        />
   <Mybutton
          title="Search User"
          customClick={() => searchUser(input_user_id)}
        />
    <Mytextinput
              placeholder="Enter Name"
              value={user_name}
              onChangeText={user_name => setUserName(user_name)}
            />
            <Mytextinput
              placeholder="Enter Contact No"
              value={'' +user_contact}
              onChangeText={user_contact => setusercontact(user_contact)}
              maxLength={10}
              keyboardType="numeric"
            />
            <Mytextinput
              value={user_address}
              placeholder="Enter Address"
              onChangeText={user_address => setUserAddress( user_address)}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
      <Mybutton
        title="Submit"
        customClick={updateUser}
      />
    </KeyboardAvoidingView>
  </ScrollView>
</View>
  );
  };


  export default UpdateUser;




