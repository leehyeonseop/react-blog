import React from 'react'
import PostView from '../postView/PostView'
import data from '../../data/data.json'

function PostViewPage() {
    return (
        <>
            <PostView data={data}/>
        </>
    )
}

export default PostViewPage