import global from './css/global.css'
import data from './data/data.json'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import PostViewPage from './components/pages/PostViewPage'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import { useState } from 'react'


function App() {

	const [postView, setPostView] = useState(false)

	return (
		<BrowserRouter>
			<Header />
			<Banner />
			<Routes>
				<Route index element={<MainPage />} />
				<Route path='post/:postId' element={<PostViewPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App;
