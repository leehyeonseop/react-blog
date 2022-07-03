import React from 'react'
import PostList from '../postList/PostList'
import data from '../../data/data.json'
import PostListItem from '../postListItem/PostListItem'
import '../../css/main.css'
import About from '../about/About'
import { useNavigate } from 'react-router-dom'


function Main(props) {

    const navigate = useNavigate();

    const {data} = props
    

    return (
        <main>
            <div className='max-width'>
                <h2 class="a11y-hidden">Post</h2>
                <PostList 
                    data={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`)
                    }}/>
                <About data={data}/>
            </div>
        </main>
    )
}

export default Main
