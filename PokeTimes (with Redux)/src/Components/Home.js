import React, { Component } from 'react';
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
    render() {
        const {posts} = this.props;
        let postList = posts.length ? (     //Since the request is asynchronous, the posts array might be empty so we first check the length
            posts.map(post => {
                return(
                    <div className="card post" key={post.id}>
                        <img src={Pokeball} alt="A Pokeball"/>
                        <div className="card-content">
                            <a href={'/' + post.id} className="card-title red-text">
                                {post.title}
                            </a>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>
                No posts yet!
            </div>
        )
        return(
            <div className='container home'>
                <h1>
                    Home
                </h1>
                <div>
                    {postList}
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStatetoProps)(Home);