import React from 'react';
import './ViewRose.css';

export default function ViewRose(props) {
    return (
        <div className="ViewRose">
            <h2>{props.journal.color} Rose Planted on {props.journal.date}</h2>

            <h3>Rose</h3>
            <p>{props.journal.rose}</p>

            <h3>Thorn</h3>
            <p>{props.journal.thorn}</p>

            <h3>Bud</h3>
            <p>{props.journal.bud}</p>

            <button type="submit" id="edit">Edit</button>
            <button type="submit" id="delete">Delete</button>
        </div>
    );
}