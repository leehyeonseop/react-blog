import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../../css/view.css'
import '../../css/wrapbox.css'

function PostView(props) {

    const {data} = props
    const posts = data.posts
	const {postId} = useParams()
	const navigate = useNavigate()
	
	const post = posts.filter(item => item.id == postId)[0]

	const {profileImg, userName, created, category, title, contents} = post

	console.log(contents)

	const backgroundImgUrl = contents.find((item) => item.type === 'img').src
	const textList = contents.filter((item) => item.type === 'p')

	console.log(textList)

    return (
        <>
            <div class="view">
			<div class="max-width">
				<section class="wrap-box">
					<div class="inner">
						{/* <!-- author --> */}
						<dl class="author-wrap">
							<dt class="a11y-hidden">Author</dt>
							<dd class="author"><img src={profileImg} alt="" />{userName}</dd>
							<dt class="a11y-hidden">Created</dt>
							<dd class="created">{created}</dd>
						</dl>
						{/* <!-- //author --> */}

						{/* <!-- category --> */}
						<dl class="category">
							<dt class="a11y-hidden">Category</dt>
							{category.map(item => {
								return (
									<dd>{item}</dd>
								)
							})}
						</dl>
						{/* <!-- //category --> */}
						<div class="title-wrap">
							<h2>{title}</h2>
							<button class="btn-like">Like</button>
						</div>
						<hr />
						<div class="view-contents">
							<p>{textList[0].text}</p>
							<img src={backgroundImgUrl} alt="" />
							<p>{textList[1].text}</p>
						</div>
						<div class="btn-group">
							<a href="#" class="btn-modify">
								<span class="a11y-hidden">modify</span>
							</a>
							<button type="button" class="btn-delete">
								<span class="a11y-hidden">delete</span>
							</button>
						</div>
						<Link to='/' className='btn-back'>
							<span class="a11y-hidden">Back</span>
						</Link>
					</div>
				</section>
			</div>
		</div>
        </>
    )
}

export default PostView