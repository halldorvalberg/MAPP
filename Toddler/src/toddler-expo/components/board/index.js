import React from 'react'
import { View, StyleSheet} from 'react-native'
import View_Board from './View_Board'
import styles from "../../styles/style.js"
import { get_all_boards } from '../../services/Board_Service'

//The following class retrieves the list of all boards from data/data.json
//It then calls on the class View_Boards. It parses through name and thinbnailPhoto values as props
export default class Viewable_Boards extends React.Component {
    // state = {
    //     loadingData: false,
    //     all_boards: [],
    //     board: []
    // }

    // async componentWillMount() {
    //     await this._fetchItems();
    // }
    
    // async _fetchItems() {
    //     this.setState({loadingData: true});
    //     const boards = await get_all_boards();
    //     this.setState({loadingData:false, all_boards: boards});
    // }

    // render() {
    //     const {all_boards} = this.state;
    //     return (
    //         <View  style={styles.boards}>
    //             {all_boards.map(({id, name, thumbnailPhoto}) => <View_Board key={id} id={id} name={name} src={thumbnailPhoto}/>)}
    //         </View>
    //     );
    // }
}