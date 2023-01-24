import React from 'react'

const Boton = ({styles, text}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-gradient-to-r from-[#00FDA8] to-[#01A78A] font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>
        {text}
    </button>
  )
}

export default Boton