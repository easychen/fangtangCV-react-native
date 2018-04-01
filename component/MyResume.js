import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import TopBar from './TopBar';
import { observer , inject } from 'mobx-react';
import ResumeItem from './ResumeItem';



@inject("store")
@observer
export default class MyResume extends Component
{
    componentDidMount()
    {
        this.props.store.get_my_resume();
    }

    render()
    {
        const resume_list = this.props.store.my_resume_list;
        return <View>
            <TopBar match={this.props.match} title="我的简历" />
            <FlatList data={resume_list} keyExtractor={(item)=>item.id} renderItem={({item})=> <ResumeItem item={item} />} />
        </View> ;
    }
}