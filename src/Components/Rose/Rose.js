import React, {Component} from 'react';
import './Rose.css';

export default class Rose extends Component {
    render() {
        return (
            <section className="Rose">

                <div className="Example_Rose">
                    <h2>Viewing Pink Rose Planted on 2020-03-04</h2>

                    <h3>Rose</h3>
                    <p>I got some much needed rest today and was able to sleep in until noon. I was also happy that I got the clothes I ordered in the mail.</p>

                    <h3>Thorn</h3>
                    <p>It made me a little upset that my ideas for a surprise party were ignored during a conversation with my friends.</p>

                    <h3>Bud</h3>
                    <p>This weekend, I want to learn how to make sourdough bread from scratch.</p>

                    <button type="submit" id="edit">Edit</button>
                    <button type="submit" id="delete">Delete</button>

                </div>

            </section>
        );
    }
}
