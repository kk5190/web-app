import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';


import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost'; 

class Blog extends Component {
    


    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;