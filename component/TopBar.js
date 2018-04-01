import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';
import RouterButton from 'react-router-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Left = styled.View`
    flex:1;
    padding-left:10px;
`;

const Center = styled.View`
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const Right = styled.View`
    flex:1;
`;

const Top = styled.View`
    display:flex;
    flex-direction:row;
    background-color:#ffffff;
    min-height:60px;
    align-items:center;
`;

const Btn = styled(RouterButton)`
    max-width:30px;
`;

const Title = styled.Text`
    font-size:18px;
    color:#03a9f4;
`;

const FtIcon = ( props ) => <Icon name={props.name} size={24} color="#03a9f4"/>; 



export default class TopBar extends Component
{
    render()
    {
        const path = this.props.match.path;
        const title = this.props.title;
        return <Top>
            <Left><Link to="/settings"><FtIcon name="menu" /></Link></Left>
            <Center><Title>{title}</Title></Center>
            <Right></Right>
        </Top> ;
    }
}