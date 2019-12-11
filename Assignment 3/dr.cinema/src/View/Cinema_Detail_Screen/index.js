import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import styles from '../../style.js'
import { withNavigation } from 'react-navigation';

import { get_all_cinemas } from '../../Actions/cinema_actions'


const Cinema_Detail_Screen = ({ navigation }) => {

    const dispatch = useDispatch()
    const cinemas = useSelector((state) => state.cinemas.data);
    const loading_data = useSelector((state) => state.cinemas.loading_data);
    React.useEffect(() => {
        dispatch(get_all_cinemas());
    }, [dispatch]);

    const _cinema_id = navigation.state.params.id
    const _cinema = cinemas.filter(x => x.id == _cinema_id)
    
    const { navigate } = navigation

    return (
        <View style={styles.container}>

            <View style={styles.header_container}>
                <Text style={styles.header}>
                    ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
                    </Text>
            </View>

            {
                loading_data
                    ?
                    <View>
                        <Text style={styles.text}>Loading Data...</Text>
                    </View>
                    :
                    <View style={styles.page_content}>
                        <Text style={styles.name}>{_cinema[0].name} </Text>
                        <Text style={styles.text}>{_cinema[0].address}</Text>
                        <Text style={styles.text}>{_cinema[0].phone}</Text>
                        <Text style={styles.text}>{_cinema[0].website}</Text>
                        <Text style={styles.text}>{_cinema[0].description}</Text>
                        <Text style={styles.text}>{_cinema[0].google_map}</Text>
                        <TouchableHighlight>
                            <Text style={styles.text}>
                                Tap here to go to the movie
                        </Text>
                        </TouchableHighlight>
                    </View>
            }



        </View>
    )
}

export default withNavigation(Cinema_Detail_Screen);