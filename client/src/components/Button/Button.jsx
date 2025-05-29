import React from 'react'

function Button({ title, onClick, type }) {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className="bg-[#FF0033] hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-md transition text-1 "
            >
                {title}
            </button>
        </div>
    )
}



export default Button