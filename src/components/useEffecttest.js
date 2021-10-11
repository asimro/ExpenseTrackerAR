import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function UseEffect() {

    const [posts, setPosts] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        (async () => {
            let redditData = await axios.get("https://www.reddit.com/r/reactjs.json");
            redditData = redditData.data.data.children

            // let redditData = await fetch("https://www.reddit.com/r/reactjs.json");
            // redditData = await redditData.json()
            // redditData = redditData.data.children

            console.log('Reddit Data', redditData)

            setPosts(redditData);
        })()

    }, [toggle])

    console.log("useState-Posts", posts);
    console.log('toggle', toggle)

    return (
        <div>
            <p> Data From API </p>
            <div class="div3"> <button onClick={() => setToggle(!toggle)}>
                Toggle</button>
            </div>
            <h4>
                {
                    posts ? posts.map((post) => (
                        <div>
                            <h2>
                                {
                                    post.data.author
                                }
                            </h2>
                            <li>
                                {
                                    post.data.domain
                                }
                            </li>
                            <br />
                            <a href={post.data.url} target="_blank">
                                Click Here
                            </a>
                        </div>
                    ))
                        : ""
                }
            </h4>

        </div>
    );
}

export default UseEffect;