import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Redirect } from 'react-router-native';
import styled from 'styled-components/native';
import { View, Text, TextInput, Button } from 'react-native';
import TopBar from './TopBar';
import FtView from './FtView';


//const FtSubmit = ( props ) => <FtView ><TouchableNativeFeedback {...props} >{props.title}</TouchableNativeFeedback></FtView>;

const FtInput = ( props )=> <FtView ><TextInput {...props} /></FtView>;



@inject("store")
@observer
export default class Register extends Component
{
    constructor(props)
    {
        super( props );
        this.state = {"email":"rr@qq.com","password":"111111","password2":"111111","redir":false};
    }
    
    async register()
    {
        console.log( this.state );
        
        if( this.state.password !== this.state.password2 )
        {
            alert("两次输入的密码不一致");
            return false;
        }
        
        let data = await this.props.store.register( this.state.email , this.state.password );

        // console.log("REG.JS GOT data:");
        // console.log( data );
        
        if( parseInt( data.code , 10 ) === 0  )
            this.setState( {"redir":true} );
        else
            alert( data.error );    
        // if( this.props.store.register( this.state.email , this.state.password ))
    }

    handleChange( text , field )
    {
        let o = {};o[field] = text;
        this.setState( o );
    }
    
    
    render()
    {
        return <View>
            <TopBar match={this.props.match} title="注册" />

            <FtView><TextInput placeholder="Email" value={this.state.email} onChangeText={(text)=>{this.handleChange(text,"email");}} /></FtView>
            <FtView><TextInput placeholder="密码" secureTextEntry={true} value={this.state.password} onChangeText={(text)=>{this.handleChange(text,"password");}}/></FtView>
            <FtView><TextInput placeholder="重复密码" secureTextEntry={true} value={this.state.password2} onChangeText={(text)=>{this.handleChange(text,"password2");}}/></FtView>
            <FtView><Button title="注册" onPress={()=>this.register()}/></FtView>
            { this.state.redir  && <Redirect to="/login"/> }
        </View> ;
    }
}