import React, { ReactNode } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";


import { 
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native';


import { theme } from "../../global/styles/theme";
import { styles } from './styles'
import { Background } from "../Background";


type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({
     children,
     closeModal,
     ...rest}: Props){

return(
    <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        {...rest}
    >
        <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.overlay}> 
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}/>
                        {children}
                    </Background>             
                </View> 
            </View>
        </TouchableWithoutFeedback>    
   </Modal>  
  )
}