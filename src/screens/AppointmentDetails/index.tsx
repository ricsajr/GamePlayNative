import React from "react";
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton} from 'react-native-gesture-handler'

import { theme } from "../../global/styles/theme";
import  BannerImg  from '../../assets/banner.png'

import { styles } from './styles'
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails(){

  const members = [
    {
      id: '1',
      username: 'Ricardo',
      avatar_url: 'https://github.com/ricsajr.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Ricardo',
      avatar_url: 'https://github.com/ricsajr.png',
      status: 'offline'
    }
  ]

 
  return(
    <Background>
        <Header
            title="Detalhes"
            action={
              <BorderlessButton>
                <Fontisto
                  name='share'
                  size={24}
                  color={theme.colors.primary}
                />
               </BorderlessButton>
            }
        />

        <ImageBackground
          source={BannerImg}
          style={styles.banner}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.title}>
              Lendários
            </Text>
            <Text style={styles.subtitle}>
              É hoje que chegaremos ao challenger sem perder uma partida da m10
          </Text>
          </View>  
        </ImageBackground>
        <ListHeader
          title="Jogadores"
          subtitle="total 3"
        />
        <FlatList
          data={members}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
              <Member
                data={item}
              />
          )}
          ItemSeparatorComponent={() => <ListDivider/>}
          style={styles.members}
        />
    </Background>
  )
}