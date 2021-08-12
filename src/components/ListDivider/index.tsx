import React from "react";
import { View } from 'react-native';


import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


type Props = {
    isCentered?: boolean
}

export function ListDivider( { isCentered }: Props) {


    const {secondary50, secondary70} = theme.colors
    return(
       <View style={[
           styles.container,
           isCentered ? {
               marginVertical: 12,
           } : {
               marginTop: 2,
               marginBottom: 31,
           }
        ]}/>
          

    )
}