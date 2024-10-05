import React from 'react'

function Home() {
  return (
    <div className='container-fluid'>
        <div className='row justify-content-center align-items-center min-vh-100'>
            <div className='col-12 col-md-6'>
                <div className='card shadow-sm p-2 mb-5 bg-secondry rounded'>
                    <div className='card-body text-center ' style={{ backgroundColor: '#343a40' }}>
                     <img className='img-fluid mx-auto d-block' src='/images/logo.png' alt='codeeditor' style={{maxWidth:"220px"}}></img>
                     <br></br>
                     
                     <h3 className='text-light'>Enter the Room Id</h3>
                     <div className='form-group'>
                       <input
                       type='text'
                       className='form-control mb-2'
                       placeholder='Room Id'
                       />
                       </div>
                       <div className='form-group'>
                       <input
                       type='text'
                       className='form-control mb2'
                       placeholder='Username'
                       />
                       </div>
                       <br></br>
                       <button className='bt btn-success btn-lg btn-block'>JOIN</button>
                     
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Home