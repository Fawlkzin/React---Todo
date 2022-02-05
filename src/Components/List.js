import React from "react"
import Item from "./Item"
import ListItem from "./ListItem"

function DoneImg(props){
if(props.done){
    return(<img alt="done" src="./assets/on-button.png"></img>)
}else{
    return(<img alt="undone" src="./assets/off-button.png"></img>)
}

}

function List(props){



    return(
        <ul>
            {props.items.map(item => <ListItem  key={Item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}  ></ListItem>)}
        </ul>
    )
}

export default List