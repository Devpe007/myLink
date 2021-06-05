import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import { Feather } from '@expo/vector-icons';

import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';

export default function Home() {
    const [input, setIput] = useState('');

    function handleShortLink() {
        alert('URL DIGITADA: '+ input);
    }
    
    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>

            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >

                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#1ddbb9"
                />

                <Menu/>

                <KeyboardAvoidingView 
                    behavior={ Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>

                        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />

                    </ContainerLogo>

                    <ContainerContent>
                    
                        <Title>SujeitoLink</Title>
                        
                        <SubTitle>Cole seu link para encutar</SubTitle>

                        <ContainerInput>

                            <BoxIcon>

                                <Feather name="link" size={22} color="#ffffff" />

                            </BoxIcon>
                            
                            <Input
                                placeholder="Cole seu link aqui..."
                                placeholderTextColor="#ffffff"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="url"
                                value={input}
                                onChangeText={ (text) => setIput(text) }
                            />

                        </ContainerInput>

                        <ButtonLink onPress={ handleShortLink } >

                            <ButtonLinkText>Gerar Link</ButtonLinkText>

                        </ButtonLink>

                    </ContainerContent>

                </KeyboardAvoidingView>
            
            </LinearGradient>

        </TouchableWithoutFeedback>
    );
};