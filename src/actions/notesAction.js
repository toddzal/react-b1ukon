import {GET_NOTES, NOTES_STATUS} from '../actionTypes';
//import {SAVE_NOTES} from '../actionTypes';
import {database} from '../firebase';


export function getNotes(){
    return dispatch => {
        //as soon as this function fires show loading = true
        dispatch({
            type: NOTES_STATUS,
            payload: true
        });
        database.on('value', (snapshot)=>{
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            });
            //once notes are received show loading = false
            dispatch({
                type: NOTES_STATUS,
                payload: false
            });
          }, ()=>{
            dispatch({
                type: NOTES_STATUS,
                payload: -1
            })
        });
    }
}
export function saveNotes(note){

    return dispatch =>{database.push(note)} 
    
}

export function editNotes(id, note){
    return dispatch =>{database.child(id).update(note)}
}

export function deleteNote(id){
    return dispatch =>{database.child(id).remove();}
}

export function saveComment(noteId, comment){
    return dispatch =>{
        database.child(noteId).child('comments').push(comment);
    }
}