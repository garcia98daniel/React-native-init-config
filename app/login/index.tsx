import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import { changeSideMenuOptionSelected } from '../../redux/generalEffects/slice';

export default function index() {
    const dispatch = useDispatch();
    const {sideMenuOptionSelected, menu_isopen} = useSelector((state: any) => state.generalsEffects);

    const insets = useSafeAreaInsets();

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <Text>{sideMenuOptionSelected}</Text>

      <Pressable onPress={() => dispatch(changeSideMenuOptionSelected("home"))}>
        <Text className="text-3xl font-bold">Change bro</Text>
      </Pressable>
        <Text>{menu_isopen ? "true" : "false"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})