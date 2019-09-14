import React from "react"; 
import {StyleSheet, Text,View,TextInput,TouchableOpacity,FlatList} from "react-native";
import BookItem from "./BookItem";
import {connect} from "react-redux";
import { counterIncrement, counterDecrement } from "../app/actions/actions";

class InputBar extends React.Component { 
    constructor(props){
        super(props); 
        this.state = {
          titleInput: "", 
          authorInput: "",
          contentInput: "",
          booklist: [
            {id: 0, title: "take out the trash",author: "Magda",content: "This is Magda content"},
            {id: 1, title: "Cook diner",author: "Iza",content: "This is Iza content"}
          ]
        };
      }
      addNewBook(){
          
        /*alert(this.state.titleInput); 
        alert(this.state.authorInput); 
        alert(this.state.contentInput);*/

        //odwołanie sie do tablica z ksiązkami 

        let booklist = this.state.booklist;

        booklist.unshift({
            id: booklist.length+1, 
            title: this.state.titleInput,
            author: this.state.authorInput,
            content: this.state.contentInput, 
        }); 

        this.setState({
            //booklist,
            //po nacisnieciu przycisku add pola maja zrobic sie na nowe puste
            titleInput: '',
            authorInput:'',
            contentInput: ''
        });
        this.props.counterIncrement();
    }
    removeBook(item){
        let booklist = this.state.booklist;
        booklist = booklist.filter((book) => book.id!=item.id); 
        this.setState({booklist});
        this.props.counterDecrement();
    }
    onChangeText(){
        this.setState({count});
    }
    render(){
      
        return(
            
        <View>
            <Text>Amount of books: </Text>
            <TextInput 
            onChangeText= {this.onChangeText}
            value={this.props.count.toString()}
            />
            <View style={styles.inputContainer}> 
                <Text>Title:</Text>
                <TextInput 
                style={styles.input} 
                onChangeText={(titleInput) => this.setState({titleInput})}
                value={this.state.title}
                />
                <Text>Author:</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(authorInput) => this.setState({authorInput})}
                value={this.state.author}
                />
                <Text>Content:</Text>
                <TextInput
                style={styles.input}
                numberOfLines = {40}
                multiline={true}
                onChangeText={(contentInput) => this.setState({contentInput})}
                value={this.state.content}
                />
                <TouchableOpacity style={styles.addButton} onPress={()=>this.addNewBook()}> 
                    <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
                {/*<Text>Title: {this.state.titleInput}</Text> 
                <Text>Author{this.state.authorInput}</Text>
        <Text>Content{this.state.contentInput}</Text>*/}
            </View>
            <FlatList 
            data={this.state.booklist}
            extraData={this.state}
            keyExtractor={(item,index) =>index.toString()}
            renderItem={ ({item,index})=>{
                return(
                    <BookItem 
                    bookItem={item} 
                    booklist={this.state.booklist}
                    removeBook={() => this.removeBook(item)}
                    />
                )
            }}
            />
        </View>
        );
    }
} 

const styles = StyleSheet.create({
    inputContainer: {  
        flexDirection: "column", 
        justifyContent: "space-between", 
        shadowOffset: {width: 0, height:3},
        shadowColor: "#171717",
        shadowOpacity: .1
    }, 
    input: {
        backgroundColor: "#F3F3F3", 
        flex:1, 
        fontSize: 18, 
        height: 35
    }, 
    addButton: {
        width:100,
        backgroundColor:"#FFCE00",
        alignItems: "center",
        justifyContent: "center", 
    }, 
    addButtonText: {
        color: "#171717",
        fontSize:18, 
        fontWeight: "700",
    }
}) 

function mapStateToProps(state) {
    return {
        count: state
    }
}
export default connect (mapStateToProps,{counterIncrement, counterDecrement})(InputBar);
