import { debugData } from "./utils/debugData";
import Menu from "./components/Menu";

debugData<boolean>([{
    action: "setVisible",
	data: true,
}])

function App() {

    return (
            <Menu />
    );
}

export default App;
