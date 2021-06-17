import React, { useState } from 'react';
import './App.css';
import Post from './Post'

function App() {
  
  
  
  const [posts, setPosts] = useState([


    {
      
    username: "Khan",
    caption: "Sahab",
    imageurl: ""
  
  
  },
    {

      username: "Khan",
      caption: "Sahab",
      imageurl: ""

    }



  ]);
  
  
  return (

    

    <div className="App">
    
    
      <h1>My Instagram Clone </h1>




      <div className="app__header">


        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />



      </div>


      {

        posts.map(post => (

          <Post username={post.username} caption={post.caption} imageurl={post.imageurl} />
        ))
      }


      <Post username="Khan" caption="Sahab" imageurl=""/>
      <Post username="Khan321" caption="Sahab321" imageurl="" />
      <Post username="Khan456" caption="Sahab456" imageurl="" />



  
    </div>
  );
}

export default App;
