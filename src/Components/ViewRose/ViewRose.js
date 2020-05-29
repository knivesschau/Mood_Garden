import React from 'react';
import './ViewRose.css';

export default function ViewRose(props) {
    return (
        <div className="ViewRose">
            <h3>{props.color} Rose Planted on {props.date}</h3>

            <h2>Rose</h2>
            <p>{props.rose}</p>

            <h2>Thorn</h2>
            <p>{props.thorn}</p>

            <h2>Bud</h2>
            <p>{props.bud}</p>
        </div>
    );
}