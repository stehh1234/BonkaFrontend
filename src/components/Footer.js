import React from 'react'
import "../styles/footer.css"
function Footer() {
  return (
    <footer bgColor='light' className='text-center text-lg-left' style={{marginTop: '10px'}}>
      <div className='text-center p-3' style={{ backgroundColor: '#1D93FF' }}>
        &copy; {new Date().getFullYear()} Copyright:{''}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          BONKA.com
        </a>
      </div>
    </footer>
    )
}

export default Footer