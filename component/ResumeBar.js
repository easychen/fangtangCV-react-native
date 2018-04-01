import React, { Component } from 'react';
import { View, Text, Button, TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withRouter } from 'react-router-native';
import BackBar from './BackBar';

const FtIcon = ( props ) => <Icon name={props.name} size={24} color="#aaaaaa"/>; 

@withRouter
export default class ResumeBar extends Component
{
    edit()
    {
        // edit
        this.props.history.push("/resume_modify/"+this.props.rid);
    }

    render()
    {
        const editIcon = <TouchableNativeFeedback onPress={()=>this.edit()}><View><FtIcon name="title" /></View></TouchableNativeFeedback>;
        return <BackBar {...this.props} right={editIcon} />;
    }
}