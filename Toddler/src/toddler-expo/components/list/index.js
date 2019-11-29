import React from 'react';
import { View, Text } from 'react-native';
import data from '../../data/data.json';

class Viewable_Lists extends React.Component {
    state = {
        lists = data.lists
    }
    get_list_by_id(id) {
        this.setState(lists = data.lists.filter(d => d.boardId == id));
    }
    render() {
        return(
            <FlatList 
                data={this.state.lists}
                renderItem={({item}) => this.item_view(item)} 
                keyExtractor={item => item.id}
            />
        
        )
    }
}
export default Viewable_Boards; 
