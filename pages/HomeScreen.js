/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {useState,useEffect} from 'react';
import { View } from 'react-native';
import Mybutton from './componenets/Mybutton';
import Mytext from './componenets/Mytext';
import Realm from 'realm';
let realm;



export const HomeScreen = ({ navigation,route }) => {
   

    var Realm = require('realm');





    const Userschema = {
        name: 'user_details',
        properties: {
          user_id: { type: 'int', default: 0 },
          user_name: 'string',
          user_contact: 'string',
          user_address: 'string',
        }
    };
  
    
    // Initialize a Realm with User and Cat models
     realm = new Realm({ path: 'UserDatabase.realm',schema: [Userschema]});


    //  const CarSchema = {
    //    name: 'Car',
    //    properties: {
    //      make:  'string',
    //      model: 'string',
    //      miles: {type: 'int', default: 0},
    //    }
    //  };
    //  const PersonSchema = {
    //    name: 'Person',
    //    properties: {
    //      name:     'string',
    //      birthday: 'date',
    //      cars:     {type: 'list', objectType: 'Car'},
    //      picture:  {type: 'data', optional: true}, // optional property
    //    }
    //  };
     
    //  // Initialize a Realm with Car and Person models
    //  let realm = new Realm({schema: [CarSchema, PersonSchema]});
     

return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <Mytext text="Offline DB Solution Using Realm" /> 
      <Mybutton
        title="Register"
        customClick={() => navigation.navigate('Register')}
      />
      <Mybutton
        title="Update"
        customClick={() => navigation.navigate('UpdateUser')}
      />
      <Mybutton
        title="View"
        customClick={() => navigation.navigate('ViewUser')}
      />
      <Mybutton
        title="View All"
        customClick={() => navigation.navigate('ViewALL')}
      />
      <Mybutton
        title="Delete"
        customClick={() => navigation.navigate('DeleteUser')}
      />
    </View>
  );
  };

  export default HomeScreen;
  




