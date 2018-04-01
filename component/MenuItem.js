import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuView = styled.View`
    padding:20px;
    display:flex;
    flex-direction:row;
`;

const ItemText = styled.Text`
    font-size:18px;
`;

const FtIcon = ( props ) => <Icon name={props.name} size={24}/>; 

export default class MenuItem extends Component
{
    
    redir( link )
    {
        setTimeout( ()=>this.props.history.push( link ) , 500  );
    }
    
    render()
    {
        return <TouchableNativeFeedback onPress={()=>this.redir(this.props.link)}>
                    <MenuView><FtIcon name="crop-square" /><ItemText>{this.props.name}</ItemText></MenuView>
                </TouchableNativeFeedback>;
    }
}