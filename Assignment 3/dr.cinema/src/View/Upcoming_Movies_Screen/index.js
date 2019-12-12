import React from 'react'

import { View, Text, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler'
import styles from '../../style.js'
import { get_all_upcoming } from '../../Actions/upcoming_actions'
import Upcoming_List_Item from '../../Components/Upcoming_List_Item'

const Upcoming_Movies_Screen = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector((state) => state.upcoming.data);
    const loading_data = useSelector((state) => state.upcoming.loading_data);
    React.useEffect(() => {
        dispatch(get_all_upcoming());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>
                    ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ )
                </Text>

                {
                    loading_data
                        ?
                        <View>
                            <ActivityIndicator size="large" color="red" style={{ margin: '30%' }} />
                        </View>
                        :
                        <View style={styles.page_content}>
                            <FlatList
                                data={upcoming}
                                renderItem={({ item }) => <Upcoming_List_Item upcoming={item} />}
                                keyExtractor={(item) => (`${item.id}.${item.name}`)}
                                style={{height: '100%'}}
                            />
                        </View>
                }
            </View>
        </View>
    )

}

// class Upcoming_Movies_Screen extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const {navigate} = this.props.navigation
//         return (
//             <View style={styles.container}>
//                 <View style={styles.header_container}>
//                     <Text style={styles.header}>
//                         ( •̀෴•́ ) DR. CINEMA ( •̀෴•́ ) 
//                     </Text>
//                 </View>
//                 <View style={styles.page_content}>
//                     <Text style={styles.text}>
//                         This is the Upcoming_Movies_Screen
//                     </Text>
//                     <TouchableHighlight onPress={() => navigate("Movie_Screen")}>
//                         <Text style={styles.text}>
//                             Navigate to Movie_Screen
//                         </Text>
//                     </TouchableHighlight>
//                     <Text style={styles.text}>
//                         LOOK AT ALL THOSE CHICKENSES
//                     </Text>
//                 </View>
//             </View>
//         )
//     }
// }

export default Upcoming_Movies_Screen;