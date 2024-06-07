import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex gap-3'>
            <div className='form-control justify-center items-center'>
                <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className='label-text'>Male</span>
                    <input
                        id="male"
                        value="male"
                        type="checkbox"
                        className='checkbox border-slate-900'
                        checked={selectedGender === 'male'}
                        onChange={() => onCheckboxChange('male')}
                    />
                </label>
            </div>
            <div className='form-control justify-center items-center'>
                <label htmlFor="female" className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
                    <span className="label-text">Female</span>
                    <input
                        id="female"
                        value="female"
                        type="checkbox"
                        className='checkbox border-slate-900'
                        checked={selectedGender === 'female'}
                        onChange={() => onCheckboxChange('female')}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox


// Starter code
// function GenderCheckBox() {
//     const [selectedGender, setSelectedGender] = useState('');
//     const handleGenderChange = (e) => {
//         setSelectedGender(e.target.value);
//     }
//     return (
//         <div className='flex gap-3'>
//             <div className='form-control justify-center items-center'>
//                 <label htmlFor="male" className='label gap-2 cursor-pointer'>
//                     <span className='label-text'>Male</span>
//                     <input
//                         id="male"
//                         value="male"
//                         type="checkbox"
//                         className='checkbox border-slate-900'
//                         checked={selectedGender === 'male'}
//                         onChange={handleGenderChange}
//                     />
//                 </label>
//             </div>
//             <div className='form-control justify-center items-center'>
//                 <label htmlFor="female" className='label gap-2 cursor-pointer'>
//                     <span className="label-text">Female</span>
//                     <input
//                         id="female"
//                         value="female"
//                         type="checkbox"
//                         className='checkbox border-slate-900'
//                         checked={selectedGender === 'female'}
//                         onChange={handleGenderChange}
//                     />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckBox
