import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
export default class Todo extends React.PureComponent {
    // toggle a todo as completed or not via update()
    toggleComplete() {
        this.props.doc.ref.update({
            complete: !this.props.complete,
            points:this.props.points+10
        });
    }
    toggleComplete2() {
        this.props.doc.ref.update({
            complete: !this.props.complete,
            points:this.props.points-10
        });
    }
    render() {
        return (
            <TouchableHighlight style={{ justifyContent: 'center', alignItems: 'center', }}
                onPress={() => this.toggleComplete()} onLongPress={() => this.toggleComplete2()}
            >
                <View style={{ flex: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 8, alignItems: 'center' }}>
                        <Text>{this.props.name}</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text>{this.props.id}</Text>
                    </View>
                   {/*  <View style={{ flex: 4 ,alignItems: 'center'}}>
                        <Text>{this.props.complete?'true':'false'}</Text>
                    </View> */}
                    <View style={{ flex: 4 ,alignItems: 'center'}}>
                        <Text>{this.props.points}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}