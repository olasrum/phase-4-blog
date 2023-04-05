import Blog from './Blog';
import Header from './Header';
import SideBar from './SideBar';


function App() {
  return (
    <div className="container">
      <Header/>
      <SideBar/>
      <Blog/>
    </div>
  );
}

export default App;
