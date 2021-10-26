import 'react-native-gesture-handler'
import {useState,useEffect} from 'react';
import * as React from 'react';
import { Text,View ,Button,TextInput,Image,ScrollView ,StyleSheet,FlatList,Platform,TouchableOpacity,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import ViewAllUser from './pages/ViewAllUser';
import RegisterUser from './pages/RegisterUser';
import DeleteUser from './pages/DeleteUser';
import ViewUser from './pages/ViewUser';
import UpdateUser from './pages/UpdateUser';





const Cat = ({ navigation,route }) => {
    const [forSale,setForSale]=useState(true)
    const [catName,setCatName]=useState('')
    

  const Appstyle=  StyleSheet.create({

        height:Platform.OS==='ios'?200:100,
        padding:Platform.OS==='ios'?20:25
    })

    const styles=StyleSheet.create({
        container:{ flex: 1 },
        item: {padding:5 ,fontSize:15 , height:40}
    })

    const CatStyle=StyleSheet.create({
        ButtonView:{ flex:1,paddingTop:10, flexDirection:"row",justifyContent:"space-evenly"}
       
    })
    
    const touchableButton=StyleSheet.create({
container :{
    alignItems:'center',
    padding:10,
    flexDirection:"row",
    justifyContent:"space-evenly"
  
},
touchButtonView:{
    alignItems:'center',
    padding:10,
  
    backgroundColor:'#D2691E'
},
touchButtonText:{
    textAlign:'center',
    padding:10,
    color:'white'
},
labels:{
  textAlign:'center',
  padding:10,
  fontWeight:'bold',
  color:'blue'
}


    })


  

    
    const Textstyles=StyleSheet.create({
       
        Texts: {color:"blue" ,fontWeight:"bold" ,fontSize:15 , height:40},
        lbls: {color:"red" ,fontWeight:"bold" ,fontSize:15 , height:40},
    })
   

const catImage = {
    uri: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    width: 64,
    height: 64
  };


  return (

<View style={{flex:1}}>
<Image source={require('./assets/ReactNativeLogo.png')}/>
        <TextInput
        placeholder="Name Me"
        style={{height:40}}
        onChangeText={text=>setCatName(text)}
        defaultValue={catName}
        />
    <Text style={Textstyles.lbls}>Hello, I am your cat , My Name is {catName?catName:route.params.DefaultName}!</Text>
    <Image source={catImage} />
    <View style={styles.container}>
  <FlatList nestedScrollEnabled 
  data={[
      {key:'1',CatName:'Nana',Origin : 'Australia'},
      {key:'2',CatName:'Kaka',Origin : 'Barazil'},
      {key:'3',CatName:'Catie',Origin : 'Sudan'},
      {key:'4',CatName:'Lala',Origin : 'Qatar'},
  ]}

  renderItem={({item})=> <Text style={styles.item} > {'Cat No '+ item.key+' '+  item.CatName + ' Originally from '+ item.Origin} </Text>}
  />
  </View>

<View style={CatStyle.ButtonView}>


  <View>
    <Button onPress={()=> 
    {
        setForSale(false)
    }}
    disabled={!forSale}
    title={forSale?"For Sale":"Sold"}/>
</View>
<View >
<Button onPress={()=> 
    {
      alert(Platform.OS)
    }}
   
    title={"Check OS"}/>
</View>

<View >
<Button onPress={()=> 
    {
      alert("Ok")
    }}
   
    title={"OK"}/>
    </View>

    </View>
    <View style={touchableButton.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Dog',{DefaultName:catName})} onLongPress={()=>alert('Long Touch')} >
<View style={touchableButton.touchButtonView}>
  <Text style={touchableButton.touchButtonText}>Dog Screen</Text>
</View>
</TouchableOpacity>
</View>

  <View style={touchableButton.container}>


  <TouchableOpacity onPress={() => navigation.navigate('BMI')} onLongPress={()=>alert('Long Touch')} >
  <View style={touchableButton.touchButtonView}>
    <Text style={touchableButton.touchButtonText}>Health</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('GetFact')} onLongPress={()=>alert('Long Touch')} >
  <View style={touchableButton.touchButtonView}>
    <Text style={touchableButton.touchButtonText}>Cat Facts</Text>
  </View>
  </TouchableOpacity>


  <TouchableOpacity onPress={() => navigation.navigate('UniList')} onLongPress={()=>alert('Long Touch')} >
  <View style={touchableButton.touchButtonView}>
    <Text style={touchableButton.touchButtonText}>Uni List</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} onLongPress={()=>alert('Long Touch')} >
  <View style={touchableButton.touchButtonView}>
    <Text style={touchableButton.touchButtonText}>Users</Text>
  </View>
  </TouchableOpacity>
  </View>

  </View>

  );
}

export const Dog = ({navigation, route}) => {
    const [forSale,setForSale]=useState(true)
    const myStyle=StyleSheet.create({
      ButtonView:{  flexDirection:"row",justifyContent:"space-evenly"}
  })

    const dogImage = {
        uri: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        width: 64,
        height: 64
      };
    return (
 
      <View>
      <Text >Hello, I am your Dog, My Name is {route.params.DefaultName}!</Text>
      <Image source={dogImage} />
      <View style={myStyle.ButtonView}>
      <Button onPress={()=> 
    {
        setForSale(false)
    }}
    disabled={!forSale}
    title={forSale?"For Sale":"Sold"}/>    

   <Button title="Go back" onPress={() => navigation.goBack()} />
   </View>
      </View>
     
    );
  }

  export const Movies = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  };


  export const GetFact = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState('');
  
    const factstyle=StyleSheet.create({
      container :{
          alignItems:'center',
          padding:10,
          flexDirection:"row",
          justifyContent:"space-evenly"},
   
      labels:{
        textAlign:'auto',
        padding:10,
        fontWeight:'bold',
        color:'blue'
      }
      
      
          })
      

    useEffect(() => {
      fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((json) => setData(json.fact))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
        <View>
       <View >
       <Text style={factstyle.labels}>Today's fact: </Text>
       </View>
       <Text>{data}</Text>
       </View>
        )}
      </View>
    );
  };


  export const UniList = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setUniData] = useState([]);
    const [countryName, setcountryName] = useState('');
  
    const touchableButton=StyleSheet.create({
      container :{
          alignItems:'center',
          padding:10,
          flexDirection:"row",
          justifyContent:"space-evenly"
        
      },
      touchButtonView:{
          alignItems:'center',
          padding:10,
        
          backgroundColor:'#D2691E'
      },
      touchButtonText:{
          textAlign:'center',
          padding:10,
          color:'white'
      },
      labels:{
        textAlign:'center',
        padding:10,
        fontWeight:'bold',
        color:'blue'
      }
      
      
          })
      

 
   
const getunidata=()=>
{
  fetch('http://universities.hipolabs.com/search?country='+countryName)
  
  .then((response) => response.json() )
  .then((json) => setUniData(json) )
  .catch((error) => console.error(error))
  .finally(() => setLoading(false)
  );
}
 
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
       <TextInput
        placeholder="Country Name"
        style={{height:40}}
        onChangeText={text=>setcountryName(text)}
        defaultValue={"Sudan"}
        />

<TouchableOpacity onPress={() =>getunidata() } onLongPress={()=>alert('Long Touch')} >
<View style={touchableButton.touchButtonView}>
  <Text style={touchableButton.touchButtonText}>Uni List</Text>
</View>
</TouchableOpacity>

        {isLoading ? <ActivityIndicator/> : (
          <FlatList style={{marginTop:10}}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
              <Text>Name : {item.name}</Text>
              <Text>Email: {item.web_pages}</Text>
              <Text>Country: {item.country}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  };



  

  export const BMI = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setUniData] = useState([]);
     const [Age, SetAge] = useState('');
  const [Weight, SetWeight] = useState('');
  const [Height, SetHeight] = useState('');
    const [countryName, setcountryName] = useState('');
  
    const touchableButton=StyleSheet.create({
      container :{
          alignItems:'center',
          padding:10,
          flexDirection:"row",
          justifyContent:"space-evenly"
        
      },
      touchButtonView:{
          alignItems:'center',
          padding:10,
        
          backgroundColor:'#D2691E'
      },
      touchButtonText:{
          textAlign:'center',
          padding:10,
          color:'white'
      },
      labels:{
        textAlign:'center',
        padding:10,
        fontWeight:'bold',
        color:'blue'
      }
      
      
          })
      
  const getBMI=()=>
  {
    fetch("https://bmi.p.rapidapi.com/", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-rapidapi-key": "c3fd3a8f9bmsh6393760ea3ff7f6p190e29jsn4f6cc4b45a6e",
        "x-rapidapi-host": "bmi.p.rapidapi.com"
      },
      "body": {
        "weight": {
          "value": "85.00",
          "unit": "kg"
        },
        "height": {
          "value": "170.00",
          "unit": "cm"
        },
        "sex": "m",
        "age": "24",
        "waist": "34.00",
        "hip": "40.00"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  }
  return (
    
    <View style={{ flex: 1, padding: 24 }}>
     <TextInput
        placeholder="FROM"
        style={{height:40}}
        onChangeText={text=>SetAge(text)}
        defaultValue={"25"}
        />
         <TextInput
        placeholder="TO"
        style={{height:40}}
        onChangeText={text=>SetWeight(text)}
        defaultValue={"75"}
        />
         {/* <TextInput
        placeholder="Height"
        style={{height:40}}
        onChangeText={text=>SetHeight(text)}
        defaultValue={"172"}
        /> */}
        <TouchableOpacity onPress={() =>getBMI() } >
<View style={touchableButton.touchButtonView}>
  <Text style={touchableButton.touchButtonText}>BMI Detail</Text>
</View>
</TouchableOpacity>

{isLoading ? <ActivityIndicator/> : (
          <FlatList style={{marginTop:10}}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
              <Text>BMI : {item.bmi}</Text>
              <Text>Your Weight is: {item.health}</Text>
              <Text>Healthy Range: {item.healthy_bmi_range}</Text>
              </View>
            )}
          />
        )}
        </View>
         );
};


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Cat"
          component={Cat}
          initialParams={{DefaultName: 'Katttty' }}
        
        />

        <Stack.Screen name="Dog" component={Dog} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="GetFact" component={GetFact} />
        <Stack.Screen name="UniList" component={UniList} />
        <Stack.Screen name="BMI" component={BMI} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="Register" component={RegisterUser} />
         <Stack.Screen name="ViewALL" component={ViewAllUser} />
         <Stack.Screen name="DeleteUser" component={DeleteUser} />
         <Stack.Screen name="ViewUser" component={ViewUser} />
         <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;