import Header from "./admin/components/Share/Header";
import Sidebar from "./admin/components/Share/Sidebar";
// import Resource from "./admin/components/Resource/ResourcePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Sidebar />
        {/* <Resource /> */}
      </header>
    </div>
  );
}

export default App;
