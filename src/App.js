import './App.css';
import MovieList from "./components/movie/MovieList";
import StoreBoard from "./components/Lunch/StoreBoard";
import TodoBoard from "./components/todo1/TodoBoard";
import TodoRegister from "./components/todo1/TodoResiter";
import Count3 from "./components/count3/Count3";
import Count3Button from "./components/count3/Count3Button";
import SinginButton from "./components/signIn/SinginButton";

function App() {
    return (
        <div className="App">
            <TodoBoard/>
            <SinginButton></SinginButton>
            <Count3Button></Count3Button>
        </div>
    );
}

export default App;
