import React from 'react'
import CardItem from '../CardItem'

const Results = ({ data }) => {
    console.log(data)
    return (
        <section className="post" >
            <header className="post-header">
                <h2 className="post-title">Photos from Pokemon.com</h2>
            </header>
            <div className="post-description">
                <div className="post-images pure-g">
                {
                    Object
                        .keys(data.data)
                        .map(item => {
                            const { name, url } = data[item];
                            return <CardItem key={item} name={name} url={url} />
                        })
                }
                </div>
            </div>
        </section>
    )
}

export default Results