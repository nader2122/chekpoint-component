import React from 'react'

const FullName = () => {
    const firsName='Nader';
    const lastName='Trabelsi'
    return (
        <div>
           <p>Full Name </p><span className='full'> {firsName} {lastName}</span>
        </div>
    )
}

export default FullName
