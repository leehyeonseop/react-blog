import React from 'react'
import '../../css/category.css'
import '../../css/post.css'
import '../../css/author.css'
import { Link } from 'react-router-dom'

function PostListItem(props) {

    const {thumbnail, category, title, userName, created ,findProfileImg, description, onClickItem} = props

    return (
        <>

        

        <li onClick={onClickItem}>
            
            <article className='post'>
                <img src={thumbnail} alt="" />
                <div class="contents-wrap">
                    {/* <!-- category --> */}
                    <dl class="category">
                        <dt class="a11y-hidden">Category</dt>
                        {category.map((item) => {
                            return (
                                <dd>{item}</dd>
                            )
                        })}
                        {/* <dd>Life</dd>
                        <dd>Style</dd> */}
                    </dl>
                    {/* <!-- //category --> */}

                    <h3>{title}</h3>

                    {/* <!-- author --> */}
                    <dl class="author-wrap">
                        <dt class="a11y-hidden">Author</dt>
                        <dd class="author"><img src={findProfileImg(userName)[0].profileImg} alt="" /> {userName}</dd>
                        <dt class="a11y-hidden">Created</dt>
                        <dd class="created">{created}</dd>
                    </dl>
                    {/* <!-- //author --> */}

                    <p class="post-description">
                        {description[0].text}
                    </p>
                </div>
            </article>
        
    </li>
    </>
    )
}

export default PostListItem
