import { View, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-community/picker'

export default function Unitspicker({unitsSystem, setUnitsSystem}) {
  return (
    <View styles={styles.unitsSystem}>
      <Picker selectedValue={unitsSystem} onValueChange={(item)=>setUnitsSystem(item)} mode="dropdown" itemStyle={{fontSize: 12}}>
          <Picker.Item label="C°" value="metric" />
          <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
    unitsSystem:{
        position: 'absolute',

        ...Platform.select({
            ios:{
                top: -30,
            },
            android:{
                top: 30,
            }
        }),
        
        left: 20,
        height: 50,
        width: 100,
    },
})
