/*Screen to register the user*/
import React from 'react';
import {useState,useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './componenets/Mytextinput';
import Mybutton from './componenets/Mybutton';
import Realm from 'realm';
let realm;



 const RegisterUser  = ({navigation}) => {
    const [user_name, setUserName] = useState('');
    const [user_contact, setusercontact] = useState('');
    const [user_address, setUserAddress] = useState('');

    realm = new Realm({ path: 'UserDatabase.realm' });

   const register_user = () => {
      var that = this;
      // const { user_name } = this.state;
      // const { user_contact } = this.state;
      // const { user_address } = this.state;
      if (user_name) {
        if (user_contact) {
          if (user_address) {
            realm.write(() => {
              var ID =
                realm.objects('user_details').sorted('user_id', true).length > 0
                  ? realm.objects('user_details').sorted('user_id', true)[0]
                      .user_id + 1
                  : 1;
              realm.create('user_details', {
                user_id: ID,
                user_name: user_name,
                user_contact: user_contact,
                user_address: user_address,
              });
              Alert.alert(
                'Success',
                'You are registered successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('HomeScreen'),
                  },
                ],
                { cancelable: false }
              );
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
    };

return (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
  <ScrollView keyboardShouldPersistTaps="handled">
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, justifyContent: 'space-between' }}>
      <Mytextinput
        placeholder="Enter Name"
        onChangeText={user_name => setUserName( user_name )}
      />
      <Mytextinput
        placeholder="Enter Contact No"
        onChangeText={user_contact => setusercontact( user_contact )}
        maxLength={10}
        keyboardType="numeric"
      />
      <Mytextinput
        placeholder="Enter Address"
        onChangeText={user_address => setUserAddress(user_address )}
        maxLength={225}
        numberOfLines={5}
        multiline={true}
        style={{ textAlignVertical: 'top' }}
      />
      <Mybutton
        title="Submit"
        customClick={register_user}
      />
    </KeyboardAvoidingView>
  </ScrollView>
</View>
  );
  };


  export default RegisterUser;




