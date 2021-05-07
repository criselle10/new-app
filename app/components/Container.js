import React from 'react';

const Container = (props) => {
    return (
        <div className={"container py-md-5 " + (props.wide ? '' : "container--narrow py-md-5")}>
            {props.children}
        </div>
    )
}

export default Container;