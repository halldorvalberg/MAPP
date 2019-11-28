import React from 'react';
import {View, ScrollView} from 'react-native'
import View_Board from '../../components/board';
import styles from '../../styles/style'
import {get_all_boards} from '../../services/Board_Service'

class Home extends React.Component {
    static navigationOption = {
        title: 'Home'
    }

    state = {
        loadingData: false,
        all_boards: []
    }

    async componentDidMount() {
        await this._fetchItems()
    }
    
    async _fetchItems() {
        this.setState({loadingData: true});
        const boards = await get_all_boards()
        this.setState({loadingData:false, all_boards: boards})
    }

    render() {
        const {all_boards} = this.state;
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <ScrollView>
                        <View_Board all_boards={all_boards} navi={navigate}/>
                </ScrollView>
            </View>
        )
    }
}

export default Home;