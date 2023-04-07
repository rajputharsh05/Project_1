import './App.css';
import Task from './components/Task';
import style from 'styled-components'
import TaskAdder from './components/TaskAdder';
import { useState } from 'react';
import Navbar from './components/NavBar';


const Container = style.div`
  height:100%;
  width: 100%;
  background-color : #555555;
  display : flex;
  flex-direction : column;
  gap: 10px
`

const intialDB = [
  
]

const  App = () => {
  
  const [Items,SetItems] = useState(intialDB)
  

  const MoveUp = (e)=>{
    console.log(Items)
    const ID = Number(e.target.id)
    console.log(ID)
    const NewItems = []
    if(Number(Items[0].id) === ID)
    {
      SetItems(Items)
    }else
    {
        Items.forEach((i) => {
              if(Number(i.id) === ID)
              {
                  const xd = NewItems.pop();
                  NewItems.push(i);
                  NewItems.push(xd);
              }
              else
              {
                 NewItems.push(i) 
              }
        })
        //console.log(NewItems)
        SetItems(NewItems)
        //console.log(Items)
    }
  }


  const MoveDown = (e)=>{
    const ID = Number(e.target.id)
    var cnt = 0;
    var NewItems = []
    var xd={};
    if(Number(Items[Items.length-1].id) === ID)
    {
      SetItems(Items)
    }else{
    Items.forEach((i)=>{
        if(Number(i.id) === ID)
          {
            xd = i;
            cnt++;
          }else
            {
              NewItems.push(i)
              if(cnt === 1)
              {
                NewItems.push(xd)
                cnt++;
              }
            }
    })
    SetItems(NewItems)
  }
  }

  const AddItem = (item)=>{
    console.log(item.id)
    SetItems([...Items,item])
  }

  const DeleteItem = (e)=>{
    const ID = Number(e.target.id)
    console.log(ID)
    const NewItems = Items.filter( i => Number(i.id) !== ID)
    SetItems(NewItems)
  }

  
  return (
    <Container >
      <Navbar></Navbar>
      <TaskAdder AddItem={AddItem}></TaskAdder>
      {
        Items.map((item)=>{
          return (
            <Task DeleteItem={DeleteItem}MoveDown={MoveDown} MoveUp ={MoveUp} Text={item.value} Id={item.id}></Task>
            )
        })
      }
    </Container>
  );
}

export default App;
