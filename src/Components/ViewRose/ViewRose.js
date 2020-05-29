import React from 'react';
import './ViewRose.css';

export default function ViewRose(props) {
    return (
        <div className="ViewRose">
            <h3>{props.journal.color} Rose Planted on {props.journal.date}</h3>

            <h2>Rose</h2>
            <p>{props.journal.rose}</p>

            <h2>Thorn</h2>
            <p>{props.journal.thorn}</p>

            <h2>Bud</h2>
            <p>{props.journal.bud}</p>
        </div>
    );
}