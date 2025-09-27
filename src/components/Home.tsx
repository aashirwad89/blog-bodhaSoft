

const Home = () => {
  return (
   <>
   <section className="Home">
    <div className="right">
        <h1>Welcome to our Blog app</h1>
        <p>Here you can write your thoughts in your own way</p>
        <a href="/login"><button>Login</button></a>
        {/* install react-router-dom */}
      {/* install -D @types/react-router-dom */}
    </div>
    <div className="left">
        <img src="https://plus.unsplash.com/premium_photo-1734549547939-41f90fdf91cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" />
    </div>
   </section>
   </>
  )
}

export default Home
