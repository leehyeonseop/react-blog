import React from 'react'
import PostListItem from '../postListItem/PostListItem'
import '../../css/posts.css'

function PostList(props) {

    const {data , onClickItem} = props
    const posts = data.posts
    const users = data.users

    // console.log(posts.contents.filter((item) => item.type === 'p'))


    const findProfileImg = (userName) => {
        return users.filter((item) => item.name === userName)
    }

    const findDescription = (item) => {
        return item.contents.filter((i) => i.type === 'p')
    }


    return (
        <>
            <ul class="posts">
                {posts.map((item) => {
                    return (
                        <PostListItem 
                            thumbnail={item.thumbnail}
                            category={item.category}
                            title={item.title}
                            findProfileImg={findProfileImg}
                            userName={item.userName}
                            created={item.created}
                            description={findDescription(item)}
                            onClickItem={() => {
                                onClickItem(item)
                            }}
                        />
                    )
                })}
                
            </ul>
        </>
    )
}

export default PostList
