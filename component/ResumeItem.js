import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { observer , inject } from 'mobx-react';
import styled from 'styled-components/native';
import { withRouter } from 'react-router-native';

const ItemView = styled.View`
    padding:20px;
    display:flex;
    flex-direction:row;
`;

const ItemText = styled.Text`
    font-size:18px;
`;



@withRouter
export default class ResumeItem extends Component
{
    // async remove( id )
    // {
    //     confirm( "确定要删除这份简历？" , async ()=> {
    //         //
    //         const data = await this.props.store.remove( id ); 
    //         if( parseInt( data.code , 10 ) === 0  )
    //             this.props.history.replace("/myresume");
    //         else
    //             alert( data.error );
    //     } );
        
    // }

    redir( link )
    {
        setTimeout( ()=>this.props.history.push( link ) , 500  );
    }
    
    render()
    {
        const item = this.props.item;
        return <TouchableNativeFeedback onPress={()=>this.redir("/resume/"+item.id)}>
        <ItemView>
            <ItemText>{item.title}</ItemText>
        </ItemView>
        </TouchableNativeFeedback>
    }
}