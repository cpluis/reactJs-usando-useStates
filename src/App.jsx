import React, { Component } from 'react';
import './App.css';


class App extends Component{

  

  state = {
    counter: 0,
    posts:[{
      id:1,
      title:"título 1",
      body: "o corpo "
    },
    {
      id:2,
      title:"título 2",
      body: "o corpo "
    },
    {
      id:3,
      title:"título 3",
      body: "o corpo "
    },
  ]
  }

  timeoutUpdate = null;

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "o título mudou"
  
     this.timeoutUpdate  = setTimeout(() =>{
       this.setState({ posts, counter: counter + 1 })
     }, 2000)
  }
 componentDidMount(){
  this.handleTimeout()
 }

 componentDidUpdate(){
   clearTimeout(this.timeoutUpdate)
  this.handleTimeout()
 }

 componentWillUnmount(){
  clearTimeout(this.timeoutUpdate)
 }

  loadPosts = async () =>{
     fetch('https://viacep.com.br/ws/91040100/json/')
    .then(response => response.json())
    .then(posts => this.setState({ posts }))
  }

  render(){
    const { posts, counter } = this.state;
     return (
    <div className="App">
      <h1>{counter}</h1>
    {posts.map((post => 
      <div key={post.id}>
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
    </div>
      ))}
    </div>
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
