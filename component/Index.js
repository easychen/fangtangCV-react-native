import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import TopBar from './TopBar';
import { observer , inject } from 'mobx-react';
import ResumeItem from './ResumeItem';

@inject("store")
@observer
export default class Index extends Component
{
    componentDidMount()
    {
        this.props.store.get_all_resume();
    }
    
    render()
    {
        const resume_list = this.props.store.all_resume_list;
        
        return <View>
            <TopBar match={this.props.match} title="最新简历" />
            <FlatList data={resume_list} keyExtractor={(item)=>item.id} renderItem={({item})=> <ResumeItem item={item} />} />
        </View> ;
    }
}