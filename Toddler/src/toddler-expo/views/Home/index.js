import React from 'react';
import {View} from 'react-native'
import View_Board from '../../components/board';
import styles from '../../styles/style'

import data from '../../data/data'

class Home extends React.Component {
    static navigationOption = {
        title: 'Home'
    }

    state = {
        //loadingData: true,
        all_boards: data.boards //should be an emty list that is filled from componentDidMount._fetchItems() that calls on get_all_boards from service
    }

    async componentDidMount() {
        //await this._fetchItems()
    }

    /*
    async _fetchItems() {
        this.setState({loadingData: true});
        const boards = await get_all_boards()
        this.setState({loadingData:false, boards})
    }
     */

    render() {
        const {all_boards} = this.state;
        return(
            <View>
                {all_boards.map(({id, name, thumbnailPhoto}) => <)}
            </View>
        )
    }
}

export default Home;