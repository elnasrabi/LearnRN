/*Screen to delete the user*/
import {useState,useEffect} from 'react';
import React from 'react';
import { Button, Text, View, Alert } from 'react-native';
import Mytextinput from './componenets/Mytextinput';
import Mybutton from './componenets/Mybutton';
import Realm from 'realm';
let realm;



 const DeleteUser  = ({navigation}) => {
    const [input_user_id, setinput_user_id] = useState('');
    const [UserName, SetUserName] = useState('');
    

    realm = new Realm({ path: 'UserDatabase.realm' });

    const  deleteUser = () => {
    
      
      realm.write(() => { // Transaction in Realm
        
        if (
          realm.objects('user_details').filtered('user_id =' + input_user_id)
            .length > 0
        ) {
          realm.delete(
            realm.objects('user_details').filtered('user_id =' + input_user_id) // delete from user_details where user_id=input_user_id
          );
          Alert.alert(
            'Success',
            'User deleted successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false }
          );
        } else {
          alert('Please insert a valid User Id');
        }
      });
    };

    const searchUser = (id) => {
     try {
      var user_details = realm
      .objects('user_details')
      .filtered('user_id =' + id);
    
    if (user_details.length > 0) {
      SetUserName(user_details[0].user_name+'     Contact:'+user_details[0].user_contact);
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
          onChangeText={input_user_id => {setinput_user_id( input_user_id); searchUser(input_user_id) }}
        />
   
        <Text  style={{ marginTop:10}}>User Name: {UserName}</Text>
        <Mybutton
          title="Delete User"
          customClick={deleteUser}
        />
      </View>
  );
  };


  export default DeleteUser;




