import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-native';
import { View, Text, FlatList, ScrollView } from 'react-native';
import ResumeBar from './ResumeBar';
import Markdown from 'react-native-markdown-renderer';
import styled from 'styled-components/native';

const ContentView = styled.ScrollView`
padding:20px;
`;


@withRouter
@inject("store")
@observer
export default class Resume extends Component 
{
    constructor( props )
    {
        super( props );
        this.state = {"content":""};
    }
    
    async componentDidMount()
    {
        // console.log(  );
        // this.props.match.params.id

        const data = await this.props.store.get_resume( this.props.match.params.id );

        if( parseInt( data.code , 10 ) === 0  )
            this.setState( {"content":data.data.content} );
        else
            alert( data.error );   
        
        //console.log( data );
    }
    
    render()
    {
        return <View>
            <ResumeBar match={this.props.match} title="简历详情" rid={this.props.match.params.id} />
            <ContentView>
                <Markdown>{this.state.content}</Markdown>
            </ContentView>    
        </View>;
    }
}