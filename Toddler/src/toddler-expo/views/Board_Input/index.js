import React from 'react'
import { connect } from 'react-redux';

import { View } from 'react-native'
import { Create_Board } from '../../actions/Board_Actions'
import Board_Input_Form from '../../components/Board_Input_Form'

const Board_Input = ({ Create_Board }) => {

    const sumbit_function = (board) => {
        Create_Board(board)
    }

    return (
        <View>
            <Board_Input_Form sumbit_function={sumbit_function} />
        </View>
    );
};

export default connect(null, { Create_Board })(Board_Input);