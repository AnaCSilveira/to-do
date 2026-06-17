import ListItem from "./components/ListItem";
import NewItem from "./components/NewItem";
import List from "./components/List";

function App() {
  return (
    <>
      <h1 className="m-4 text-2xl font-bold">To Do List</h1>
      <NewItem />
      <List />
    </>
  );
}

export default App;
