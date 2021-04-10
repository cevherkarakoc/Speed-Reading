import React from 'react';

const TYPE_CLASSNAMES = {
    action : 'px-4 py-1 bg-blue-600 focus:bg-blue-500 hover:bg-blue-400 text-white rounded',
    control : 'w-16 bg-gray-100 hover:bg-gray-50 p-1.5 border border-gray-400',
}

const Button = ({ children, type = "action", left, right, className, ...rest }) => {
    return <button
        className={`${TYPE_CLASSNAMES[type]} ${left && 'border-r-0 rounded-l-lg'} ${right && 'border-l-0 rounded-r-lg'} ${className}`}
        {...rest}>
        {children}
    </button>
}

export default Button;
