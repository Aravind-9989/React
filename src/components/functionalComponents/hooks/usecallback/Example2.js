// import React, { useState } from 'react';

// function Example2({ getcolor }) {
//     const handleInputChange = (e) => {
//         const { value } = e.target;
//         getcolor(value);
//     };

//     return (
//         <div>
//             Example2
//             <input type='text' id='input' onChange={handleInputChange} />
//         </div>
//     );
// }

// function Example1Parent() {
//     const [Uicolor, SetUicolor] = useState('LightGreen');

//     const getcolor = (color) => {
//         SetUicolor(color);
//     };

//     return (
//         <div>
//             example1child
//             <div className='Color container' style={{ background: Uicolor }}>
//                 <Example2 getcolor={getcolor} />
//             </div>
//         </div>
//     );
// }

// export default Example1Parent;
