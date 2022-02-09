import { View, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-community/picker'

export default function Unitspicker({unitsSystem, setUnitsSystem}) {
  return (
    <View style={styles.unitsSystem}>
      <Picker selectedValue={unitsSystem} onValueChange={(item)=>setUnitsSystem(item)} mode="dropdown" itemStyle={{fontSize: 12}}>
          <Picker.Item label="C°" value="metric" />
          <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
    unitsSystem:{
        ...Platform.select({
            ios:{
                top: 10,
            },
            android:{
                top: 10,
            }
        }),
        position: 'absolute',
        left: 50,
        height: 100,
        width: 100,
    },
})
