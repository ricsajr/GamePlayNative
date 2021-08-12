import React from "react";
import { Text, View, FlatList } from 'react-native';
import { theme } from "../../global/styles/theme";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from './styles'
import { GuildProps } from "../../components/Guild";

type Props ={
	handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelected}: Props){

    const guilds = [
        {
        id: '1',
        name:'Lendários',
        icon: 'image.png',
        owner: true,
        },
        {
        id: '2',
        name:'Lendários',
        icon: 'image.png',
        owner: true,
        },
        
    ]

 
  return(
    <View style={styles.container}>

       <FlatList
        data={guilds}
				keyExtractor={item => item.id}
				renderItem={({ item }) =>(
					<Guild data={item}
						onPress={() => handleGuildSelected(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <ListDivider isCentered/>}
				ListHeaderComponent={() => <ListDivider isCentered/>}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 85 }}
        style={styles.guilds}
       />
       
    </View>
  )
}