export const PostCard = ({title, body, cover, id,email}) => (        
        <div className="post">
        <img src={cover} alt={title}/>
        <div key={id} className="post-content">
        <h1 className='titulo'>{title}</h1> 
         { <h4>{body}</h4> }
        <h3 className='email'>{email}</h3>
      </div>
      </div>
    )