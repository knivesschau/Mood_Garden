import React from 'react';
import './ViewRose.css';

export default function ViewRose(props) {
    return (
        <section className="ViewRose">
            
            <div className="Sample_Expand1">
                <h2>{props.entries[0].color} Rose Planted on {props.entries[0].date}</h2>

                <h3>Rose</h3>
                <p>{props.entries[0].rose}</p>

                <h3>Thorn</h3>
                <p>{props.entries[0].thorn}</p>

                <h3>Bud</h3>
                <p>{props.entries[0].bud}</p>

                <button type="submit" id="edit">Edit</button>
                <button type="submit" id="delete">Delete</button>
            </div>

            <div className="Sample_Expand2">
                <h2>{props.entries[1].color} Rose Planted on {props.entries[1].date}</h2>

                <h3>Rose</h3>
                <p>{props.entries[1].rose}</p>

                <h3>Thorn</h3>
                <p>{props.entries[1].thorn}</p>

                <h3>Bud</h3>
                <p>{props.entries[1].bud}</p>

                <button type="submit" id="edit">Edit</button>
                <button type="submit" id="delete">Delete</button>
            </div>

            <div className="Collapsed_Entries_Samples">
                <div className="Collapsed_EntryS1">
                    
                    <h2 id="collapsed-entry-1">{props.entries[2].color} Rose Planted on {props.entries[2].date}</h2>

                    <button type="button">View Rose</button>
                </div>

                <div className="Collapsed_EntryS2">
                    <h2 id="collapsed-entry-2">{props.entries[3].color} Rose Planted on {props.entries[3].date}</h2>

                    <button type="button">View Rose</button>
                </div>
            
            </div>

        </section>
    );
}