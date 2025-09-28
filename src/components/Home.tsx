const Home = () => {
  return (
    <section className="landing">
      <div className="right">
        <h1>Welcome to our Blog App</h1>
        <p>Share your thoughts, connect with ideas, and express yourself freely.</p>
        <a href="/auth"><button>Get Started</button></a>
      </div>
      <div className="left">
        <img 
          src="https://plus.unsplash.com/premium_photo-1755921822761-2e8e7c65496e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0" 
          alt="Blog illustration" 
        />
      </div>
    </section>
  )
}

export default Home
