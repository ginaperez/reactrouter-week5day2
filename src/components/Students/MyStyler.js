import React from 'react';

export default function MyStyler(props) {
    return ( <div
    style={{
        background: props.background,
        display: "flex",
        flexDirection: props.direction || "row"
    }}
    >
    {props.children}</div>
);
}