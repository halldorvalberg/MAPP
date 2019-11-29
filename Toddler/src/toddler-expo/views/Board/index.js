import React from 'react'; 
import {Alert, Button, Image, ScrollView, View} from 'react-native';
import * as Board_Service from '../../services/Board_Service';
import View_Board from '../../components/board/View_Board';
import styles from '../../styles/style';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        state = {
            loadingData: false,
            boards: []
        }
    }

    async componentWillMount() {
        await this.get_boards();
    }

    async get_boards() {
        this.setState({loadingData: true});
        const boards = await Board_Service.get_all_boards();
        this.setState({loadingData: false, boards});
    }

    render() {
        return (
            <View style={styles.container}>
                {/**"Add new board" func goes here */}
                <ScrollView>
                    <View_Board
                        all_boards = {this.state.boards}
                        navigation = {this.props.navigation}
                    />
                </ScrollView>
                <Button 
                    title="Add board" 
                    color="#566573"
                    onPress={() => Alert.alert('incredible functionality')}
                />
            </View>
        )
    }
}