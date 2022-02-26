import Tasks from "./pages/tasks";
import { Helmet } from "react-helmet";
function App() {
	return (
		<>
			<Helmet>
				<title>Task Manager</title>
			</Helmet>
			<Tasks />
		</>
	);
}

export default App;
