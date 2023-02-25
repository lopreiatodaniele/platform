import MyApp from 'remoteApp/MyApp';
import './index.css';
function App() {
	return (
		<div className="app">
			<h1>THIS IS THE HOST APPLICATION</h1>
			<MyApp />
			<h1>THIS IS STILL THE HOST APPLICATION</h1>
		</div>
	);
}

export default App;
