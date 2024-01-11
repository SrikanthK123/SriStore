import React from 'react'

const Alert = () => {
  return (
    <div>
      <div class="wrapper-success">
        <div class="card">
          <div class="icon"><i class="fas fa-check-circle"></i></div>
          <div class="subject">
            <h3>Success</h3>
            <p>Anyone with access can view your invited visitors</p>
          </div>
          <div class="icon-times"><i class="fas fa-times"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Alert
