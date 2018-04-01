import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Redirect } from 'react-router-native';
import styled from 'styled-components/native';
import { View, Text, TextInput, Button } from 'react-native';
import TopBar from './TopBar';
import FtView from './FtView';

@inject("store")
@observer
export default class Login extends Component
{
    constructor(props)
    {
        super( props );
        this.state = {"email":"easychen@qq.com","password":"wwwwww","redir":false};
    }

    async login()
    {
        const data = await this.props.store.login( this.state.email , this.state.password );
        if( parseInt( data.code , 10 ) === 0  )
            this.setState({"redir":true});
        else
            alert( data.error ); 
    }

    handleChange( text , field )
    {
        let o = {};o[field] = text;
        this.setState( o );
    }
    
    render()
    {
        return <View>
            <TopBar match={this.props.match} title="登入" />

            <FtView><TextInput placeholder="Email" value={this.state.email} onChangeText={(text)=>{this.handleChange(text,"email");}} /></FtView>
            <FtView><TextInput placeholder="密码" secureTextEntry={true} value={this.state.password} onChangeText={(text)=>{this.handleChange(text,"password");}}/></FtView>
            <FtView><Button title="登入" onPress={()=>this.login()}/></FtView>
            { this.state.redir  && <Redirect to="/myresume"/> }
        </View> ;
    }
}