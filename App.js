import React from 'react';
import GenerateList from './generate_list';

function App() {

const [notes,SetNotes] = React.useState([{id:1,value:""}]); 
const [currpos,setCurrPos] = React.useState(0);

function addNote()
{
  SetNotes(prevItem => {return notes.length===0 ? [{id:1,value:""}] : ([...prevItem,{id:prevItem[prevItem.length-1].id+1,value:""}])})
  setCurrPos(notes.length)
}

function changeValue(event)
{
  SetNotes(prevItem => {return prevItem.map(item => item.id===notes[currpos].id ? {id:notes[currpos].id,value:event.target.value} : item)})   
}

function clicked(event)
{ let pos ;
  for(let i=0;i<notes.length;i++)
  {if(notes[i].id===parseInt(event.target.id)){pos=i;break;}}
  setCurrPos(parseInt(pos));
  console.log("clicked"+event.target.id +"..." +pos)
}

function delete_note(event)
{
  SetNotes(prevItem => {prevItem.splice(currpos,1); return prevItem});
  setCurrPos(currpos-1);
}

const list = notes.map(item => {return <GenerateList key={item.id} value={item.id} func={clicked} />});
return (
  <div className='container'  >
    <div className='sidebar'>
      <button  onClick={addNote} >Add</button>
      <button onClick={delete_note} >Delete Note</button>
      {list}
    </div>
    <div className='main'>
      <div className='notes'>
        <textarea  onChange={changeValue} className='input_note' value={currpos>=0 ? notes[currpos].value : notes.length===0 ? "Write first note" : setCurrPos(0)}/>
      </div>
    </div>
  </div>
  );
}


console.log("hello")
export default App;
 
