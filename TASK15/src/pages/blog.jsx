function Blog() {
    return (
        <div className="page">
            <h1>Our Blog</h1>
            <p>Welcome to our blog page.</p>

            <div className="blog-card">
                <h2>React Introduction</h2>
                <p>React is a JavaScript library used to build user interfaces.</p>
            </div>

            <div className="blog-card">
                <h2>React Router</h2>
                <p>React Router helps us navigate between different pages.</p>
            </div>
        </div>
    );
}

export default Blog;