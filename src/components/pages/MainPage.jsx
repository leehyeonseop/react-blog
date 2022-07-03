import React from 'react'
import Banner from '../banner/Banner'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import data from '../../data/data.json'

function MainPage() {
    return (
        <div>

			<Main data={data} />
        </div>
    )
}

export default MainPage