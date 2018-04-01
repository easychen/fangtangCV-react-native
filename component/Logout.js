import React, { Component } from 'react';

import { Redirect } from 'react-router-native';
import { observer , inject } from 'mobx-react';
import { AsyncStorage } from 'react-native';
import { View, Text, TextInput, Button } from 'react-native';

@inject("store")
@observer
export default class Logout extends Component 
{
    constructor(props)
    {
        super( props );
        this.state = {"redir":false};
    }

    async componentDidMount()
    {
        await AsyncStorage.removeItem('token');
        this.props.store.token = '';
        const data = await this.props.store.logout();
        if( parseInt( data.code , 10 ) === 0  )
            this.setState( {"redir":true} );
        else
            alert( data.error );          
    }

    
    render()
    {
        return <View>
            <Text>正在退出……</Text>
            { this.state.redir  && <Redirect to="/"/> }
        </View>;
    }
}