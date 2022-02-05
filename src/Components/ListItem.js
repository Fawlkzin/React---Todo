
import React from "react"
import Item from "./Item"
import Card from "./Card"

function DoneImg(props){
if(props.done){
    return(<img alt="done" src="./assets/on-button.png"></img>)
}else{
    return(<img alt="undone" src="./assets/off-button.png"></img>)
}

}

function ListItem(props){
    return( <li>
                <Card className={props.item.done ? "done item" : "item"}>
                    {props.item.text}
                    <div>
                        <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                        <button onClick={() => props.onItemDeleted(props.item)}><img src="./assets/trashIcon.png" alt="delete"></img></button>
                    </div>
                </Card>
            </li>)
}

export default ListItem