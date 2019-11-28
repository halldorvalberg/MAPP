import React from 'react'; 
import {TouchableHighlight, ScrollView, View} from 'react-native';
import * as Board_Service from '../../services/Board_Service';
import View_Board from '../../components/board/View_Board';
import styles from '../../styles/style';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        state = {
            //State variables go here
            boards: []
        }
    }

    componentWillMount() {
        this._getBoards()
    }

    _getBoards = () => {
        _allboards = Board_Service.get_all_boards()
        this.setState({boards: _allboards})
    }

    //Funtions go here
    
    //Render goes here
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


            </View>
        )
    }
}