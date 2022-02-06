import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    constructor() {
        super()
        this.state = {
            likes: 100,
            liked: false
        }
    }
    render() {
        const btnClass = cx({
            "liked": this.state.liked,
            "like-button": true
        })
        return (
            <>
                <div>
                <button
                className={btnClass}
                onClick={() => {
                    let likes = this.state.liked ? this.state.likes-1 : this.state.likes+1;
                    console.log('LIKES', likes);
                    this.setState({
                        likes: likes,
                        liked: !this.state.liked
                    });
                }}>

                    <h2>{'Like | '}
                    <span className="likes-counter">{this.state.likes}</span>
                    </h2>
                </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}