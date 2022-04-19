/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import type {Node} from 'react';

import RadioGroup from 'react-native-radio-buttons-group';
import axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DropDownPicker from 'react-native-dropdown-picker';
const radioButtonsData = [{
  id: '1', 
  label: 'Student',
  value: 'student'
}, {
  id: '2',
  label: 'Professional',
  value: 'professional'
}]
const App=() => {
  
const [selectedGender,setSelectedGender]=useState("male")
const [firstname,setFirstname]=useState("")
const [lastname,setLastname]=useState("")
const [checked, setChecked] = React.useState('married');

const [open, setOpen] = useState(false);
const [radioButtons, setRadioButtons] = useState(radioButtonsData)

function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

const [value, setValue] = useState(null);
const [items, setItems] = useState([
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
  {label: 'Prefer not to say', value: 'prefer not to say'}

]);

  return (
    <SafeAreaView>
      <StatusBar />
      
      <Text > User Form </Text>
      <TextInput 
      style={styles.input}
          placeholder="Enter first name" value={firstname} onChangeText={(e)=>{
            setFirstname(e)
           // console.warn(firstname)
          }}/>
        <TextInput
        style={styles.input}
          //secureTextEntry={true}
          placeholder="Enter last name"
          value={lastname}

          onChangeText={(e)=>{
            setLastname(e)
            //console.warn(lastname)
          }}
        />
         <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      horizontal={true}
    />
    <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />

  
        <Button title="Register" onPress={()=>{
          if(!firstname || !lastname || !value || !radioButtons){
            alert("please fill all the fields")
          }
          else{
            axios.post(
              'http://localhost:1234/', 
              {
                 'firstname': firstname,
                 'lastname': lastname,
                 'gender':value,
                 'profession':radioButtons
                
              },
             
          );
          alert("user posted successfully")
          setFirstname("")
          setLastname("")
          setValue(null);

          }
         
        }}/>

  
      
    
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
export default App;
