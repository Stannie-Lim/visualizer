import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// store
import { getSchools } from './store/store';

//components 


const App = () => {

	// map dispatch
	const dispatch = useDispatch();

	// componentdidmount
	useEffect( () => {
		// load data
		dispatch(getSchools());
	});

	// mapstate
	const schools = useSelector( ({ schools }) => schools );

	return (
		<HashRouter>
			<Route path='/' render={ () => <h1>my fullstack template with redux dont touch it grrrr</h1> } />
		</HashRouter>
	);
};

export default App;