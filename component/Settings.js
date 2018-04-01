import React, { Component } from 'react';
import { View,Text, FlatList  } from 'react-native';
import BackBar from './BackBar';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';
import MenuItem from './MenuItem';
import { observer , inject } from 'mobx-react';

const MemberMenu = [
    { "key":"index","name":"最新简历" , "link":"/" },
    { "key":"myresume","name":"我的简历" , "link":"/myresume" },
    { "key":"resumeadd","name":"新增简历" , "link":"/resume_add" },
    { "key":"logout","name":"退出" , "link":"/logout" }
];

const GuestMenu = [
    { "key":"index","name":"最新简历" , "link":"/" },
    { "key":"register","name":"注册" , "link":"/register" },
    { "key":"login","name":"登入" , "link":"/login" }
];







function renderItem( {item} )
{
    return <MenuItem key={item.key} link={item.link} name={item.name} />;
}

@inject("store")
@observer
export default class Settings extends Component
{
    
    render()
    {
        const history = this.props.history;
        const menu =  this.props.store.token.length > 0 ? MemberMenu : GuestMenu;
        return <View>
            <BackBar match={this.props.match} title="菜单" back="/"/>
            <FlatList data={menu} renderItem={({item})=> <MenuItem key={item.key} link={item.link} name={item.name} history={history} />} />
        </View> ;
    }
}