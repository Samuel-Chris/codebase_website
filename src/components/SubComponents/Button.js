import React from 'react'


const styles = {
    padding: '0 3rem',
    minWidth: '3.75rem',
    backgroundColor: '#693FAD',
    borderRadius: '5rem',
    color: '#ffffff',
    boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.25)',
    fontSize: '1.125rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const stylesWhite = {
    color: '#626262',
    minWidth: '2rem',
    border: '2px solid #626262',
    padding: '0 1rem',
    borderRadius: '2.5rem',
    fontSize: '0.75rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

// const stylesSmall= {
//     height: '2rem',
//     fontSize: '1rem'
// }

export default function Button(props) {
    return (
         <button style={props.white ? stylesWhite : styles}> 
            {props.children}
        </button>
    )
}
