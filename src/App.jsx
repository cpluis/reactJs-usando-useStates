import React, { Component } from 'react';
import './App.css';


class App extends Component{
  state = {
    posts:[]
  }


 componentDidMount(){
  this.loadPosts()
 }


  loadPosts = async () =>{
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const comentarisoResponse = fetch('https://jsonplaceholder.typicode.com/comments')

    const [posts, photos, emails] = await Promise.all([postsResponse, photosResponse,comentarisoResponse]);
    
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const emailsJson = await emails.json();
    
    const postsAndPhotos = postsJson.map((post, index) =>{
      return { ...post,  cover: photosJson[index].url, comentario:emailsJson[index].email }
    })
    
   this.setState({ posts: postsAndPhotos})
  }

  render(){
    const { posts } = this.state;
     return (
       <section className='container'>
    <div className="posts">      
    {posts.map((post => 
    <div className="post">
      <img src={post.cover} alt={post.title}/>
      <div key={post.id} className="post-content">
      <h1 className='titulo'>{post.title}</h1> 
       { <h4>{post.body}</h4> }
      <h3 className='email'>{post.comentario}</h3>
    </div>
    </div>
      ))}
    </div>
    </section>
  );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reactasd
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
