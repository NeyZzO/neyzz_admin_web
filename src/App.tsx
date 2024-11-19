import debugData from "./utils/debugData";

debugData({
	action: "setVisible",
	data: true,
})

function App() {

    return (
            <p className="text-green-500 bg-red-700">Test</p>
    );
}

export default App;
