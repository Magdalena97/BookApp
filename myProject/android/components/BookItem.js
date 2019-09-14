import React from "react"; 
import {StyleSheet,Text,Button,TouchableOpacity} from "react-native"; 

class BookItem extends React.Component{  
    constructor(props){
        super(props);
    } 
 
    render(){
         const bookItem = this.props.bookItem;            

        return( 
            <TouchableOpacity style={styles.bookItem}>
                <Text>
                 {bookItem.title} {"\n"}
                 {bookItem.author}{"\n"}
                 {bookItem.content}
                </Text> 
                <Button 
                title="Remove" 
                color={(bookItem)? 'rgba(200,0,0,0.5)' : 'rgba(255.0.0.1)'}
                onPress={()=>this.props.removeBook()}
                />
            </TouchableOpacity>
        );
    } 
}

const styles = StyleSheet.create({
    bookItem: {
        width: "100%",
        height: 70,//Do somethin with height it need to be dinamic 
        borderBottomColor: "#DDD",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15
    }
})

export default BookItem;