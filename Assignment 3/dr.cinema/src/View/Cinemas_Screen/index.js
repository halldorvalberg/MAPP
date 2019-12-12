import React from 'react'

import { View, Text, ActivityIndicator} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styles from '../../style.js'
import { useSelector, useDispatch } from 'react-redux';
import Cinema_List_Item from '../../Components/Cinema_List_Item/'
import { get_all_cinemas } from '../../Actions/cinema_actions'

const Cinemas_Screen = () => {
    const dispatch = useDispatch()
    const cinemas = useSelector((state) => state.cinemas.data);
    const loading_data = useSelector((state) => state.cinemas.loading_data);
    React.useEffect(() => {
        dispatch(get_all_cinemas());
    }, [dispatch]);

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
                        <ActivityIndicator size="large" color="red" style={{ margin: '30%' }} />
                    </View>
                    :
                    <View style={styles.page_content}>
                        <FlatList
                            data={cinemas}
                            renderItem={({ item }) => <Cinema_List_Item cinema={item} />}
                            keyExtractor={(item) => (`${item.id}.${item.name}`)}
                            style={{height:'100%'}}
                        />
                    </View>
            }
        </View>
    )
}

export default Cinemas_Screen;