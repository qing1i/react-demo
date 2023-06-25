import { useWindowScroll } from "./hooks/useWindowScroll";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [y] = useWindowScroll();
  const [message, setMessage] = useLocalStorage("hook-key", "张三");

  setTimeout(() => {
    setMessage("李四");
  }, 5000);

  return (
    <div className="App" style={{ height: "12000px" }}>
      {y}
      {message}
    </div>
  );
}

export default App;
