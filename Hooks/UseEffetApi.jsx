import React, { useEffect, useState } from 'react'

function UseEffectApi() {
    const [user , setUser] = useState([])
    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        setUser(await response.json())
        
    }  
    useEffect(() => {
        getUser();
    },[]) 
  return (
    <React.Fragment>
      <h1>Api Ftech</h1>
      <div className="container-fluid mt-5">
          <div className="row text-center">
                {
                    user.map((emp)=>{
                        return(
                            <>
                               <div className="col-10 md-4 mt-5">
                <div className="crad p-2">
                    <div className="d-felx align-item-center">
                        <div className="ml-3 w-300">
                            <h4 className='mb-0 mt-0 textLeft'>{emp.id}</h4><span className='textLeft'>{emp.title}</span>
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded rounded text-white stats">
                                <div className="d-flex flex-column"><span className='userId'>{emp.body}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                            </>
                        )
                    })
                }

              
          </div>
      </div>
    </React.Fragment>
  )
}

export default UseEffectApi
