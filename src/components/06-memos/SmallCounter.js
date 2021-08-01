import React from 'react'

export const SmallCounter = React.memo(({ counter }) => {
    console.log('I have redrawer  myself');
    return (
        <small> { counter } </small>
    )
})
