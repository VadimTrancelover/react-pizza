import React from 'react';
import classNames from 'classnames'; // модуль classNames создает функцию. В которую передается класс кнопки, а так же условие, при котором будет задаваться дополнительный класс.

function Button ({onClick, className, outline, children}) {
    
    console.log()

        return ( 
        <button 
            onClick={onClick} // передаётся в пропсы свойство из родительского компонента
            className={classNames('button', className, {'button--outline' : outline})}> 
                 {children}
        </button>
        )       
} 

export default Button;