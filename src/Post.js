import React, { Component } from 'react'
import Axios from 'axios'

const CardItem = ({ name }) => {
    return (
        <div className="pure-u-1 pure-u-md-1-2 center">
            <a href="/pokemon/v2/1">
                <img alt="NAME" className="pure-img-responsive"
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                    width="50%" height="50%" />
            </a>
            <div className="post-image-meta">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            error: false
        }
    }
    componentDidMount() {
        Axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => this.setState({ data: res.data.results, error: false }))
            .catch(err => this.setState({ error: true }))
    }
    render() {
        return (
            <section className="post" >
                <header className="post-header">
                    <h2 className="post-title">Photos from Pokemon.com</h2>
                </header>
                <div className="post-description">
                    <div className="post-images pure-g">
                        {
                            Object
                                .keys(this.state.data)
                                .map(item => {
                                    const { name, url } = this.state.data[item];
                                    return < CardItem key={item} name={name} url={url} />
                                })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Post