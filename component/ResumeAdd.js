import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter, Redirect } from 'react-router-native';
import { View, Text, TextInput, Button, TouchableNativeFeedback } from 'react-native';
import BackBar from './BackBar';
import FtView from './FtView';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FtIcon = ( props ) => <Icon name={props.name} size={24} color="#03a9f4"/>; 

@withRouter
@inject("store")
@observer
export default class ResumeAdd extends Component
{
    constructor(props)
    {
        super( props );
        this.state = {"title":"","content":""};
    }

    async save()
    {
        if( this.state.title.length === 0 ||  this.state.content.length === 0 )
        {
            alert("简历名称和内容均为必填项");
            return false;
        }
        
        let data = await this.props.store.save( this.state.title , this.state.content );

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
        const save = <TouchableNativeFeedback onPress={()=>this.update()}><View><FtIcon name="save" /></View></TouchableNativeFeedback>;
        return <View>
            <BackBar title="新增简历" right={save} />

            <FtView><TextInput placeholder="简历标题" value={this.state.title} onChangeText={(text)=>{this.handleChange(text,"title");}} /></FtView>
            <FtView><TextInput placeholder="简历内容" value={this.state.content} onChangeText={(text)=>{this.handleChange(text,"content");}} multiline = {true} /></FtView>
            <FtView><Button title="保存" onPress={()=>this.save()}/></FtView>
            { this.state.redir  && <Redirect to="/myresume"/> }

        </View>;
    }
}