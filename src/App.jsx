import "./App.css";
import reactLogo from "./assets/logo.png";

function App() {
  return (
    <>
      <nav className="navbar container fixed top-0">
        <div className="logo flex justify-start">
          <div className="h-20 w-48">
            <img src={reactLogo} alt="logo" />
          </div>
        </div>
        <div className="navContent">
          <h1 className="p-5">Home</h1>
          <h1 className="p-5"> About Us</h1>
          <h1 className="p-5">Classes</h1>
          <h1 className="p-5">Membership</h1>
        </div>
        <div className="login flex justify-end">
          <div className="h-16 w-40 bg-violet-900 text-white rounded-md">
            Get Started
          </div>
        </div>
      </nav>


      <section className="p-2">
        <div className="container bg-slate-500">
          <div className="hero">
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores doloribus laudantium repudiandae repellendus quas perspiciatis quia unde officiis, dolor velit quam adipisci quis facere? Labore cupiditate eum obcaecati et tempora.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint modi placeat molestiae repellendus, corporis, cumque excepturi, nobis eius blanditiis facere sapiente quisquam laborum. Odio quo, doloremque hic enim esse dicta!</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
