import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import { changeSideMenuOptionSelected } from '../../redux/generalEffects/slice';

export default function index() {
    const dispatch = useDispatch();
    const {sideMenuOptionSelected, menu_isopen} = useSelector((state: any) => state.generalsEffects);

  return (
    <View>
      <Text>{sideMenuOptionSelected}</Text>

      <Pressable onPress={() => dispatch(changeSideMenuOptionSelected("home"))}>
        <Text>Change</Text>
      </Pressable>
        <Text>{menu_isopen ? "true" : "false"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})