import React from 'react'
import '../../css/about.css'
import facebook from '../../assets/Facebook.svg'
import github from '../../assets/Github.svg'
import instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/Twitter.svg'

function About(props) {

    const {data} = props

    console.log(data)
    const username = 'Chilli'

    const user = data.users.filter((i) => i.name === username)[0]

    return (
        <>
            <aside class="about">
					<h2>About Me</h2>
					<img src={user.profileImg} alt="" class="user-profile" />
					<p class="user-name">{username}</p>
					<p class="user-description">{user.userInfo}</p>
					<h3>Categories</h3>
					<ul class="categories">
                        {user.category.map((item) => {
                            return (
                                <li><a href="#">{item}</a></li>
                            )
                        })}
					</ul>
					<h3>Follow</h3>
					<ul class="sns">
						<li>
							<a href="#">
								<img src={facebook} alt="Facebook" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={twitter} alt="Twitter" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={instagram} alt="Instagram" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={github} alt="GitHub" />
							</a>
						</li>
					</ul>
			</aside>
        </>
    )
}

export default About