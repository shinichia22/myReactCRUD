import React from 'react';
import './App.css';
import FormSample from './Components/FormSample';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

function App() {
	return <FormSample />;
}

export default App;
