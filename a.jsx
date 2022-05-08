import React from 'react'

function a() {
  return (
    <section class="vh-100" style={{backgroundColor: '#cdc4f9'}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">

        <div class="card shadow-0 border border-dark border-5 text-dark" style={{borderRadius: '10px'}}>
          <div class="card-body p-4">

            <div class="row text-center">
              <div class="col-md-9 text-center border-end border-5 border-dark py-4"
                style={{marginTop: '-1.5rem', marginBottom: '-1.5rem'}}>
                <div class="d-flex justify-content-around mt-3">
                  <p class="small">Toronto</p>
                  <p class="small">21.02.2021</p>
                  <p class="small">Rain map</p>
                </div>
                <div class="d-flex justify-content-around align-items-center py-5 my-4">
                  <p class="fw-bold mb-0" style={{fontSize: '7rem'}}>-4°C</p>
                  <div class="text-start">
                    <p class="small">10:00</p>
                    <p class="h3 mb-3">Sunday</p>
                    <p class="small mb-0">Cloudy</p>
                  </div>
                </div>
                <div class="d-flex justify-content-around align-items-center mb-3">
                  <div class="flex-column">
                    <i class="fas fa-minus"></i>
                  </div>
                  <div class="flex-column border" style={{borderRadius: '10px', padding: '.75rem'}}>
                    <p class="small mb-1">Sun</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <p class="small mb-1">Mon</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <p class="small mb-1">Tue</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <p class="small mb-1">Wed</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <p class="small mb-1">Thu</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <p class="small mb-1">Fri</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <p class="small mb-1">Sat</p>
                    <p class="small mb-0"><strong>-4°C</strong></p>
                  </div>
                  <div class="flex-column">
                    <i class="fas fa-minus"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-end">
                <p class="small mt-3 mb-5 pb-5">For a month</p>
                <p class="pb-1"><span class="pe-2">11:00</span> <strong>-4°</strong></p>
                <p class="pb-1"><span class="pe-2">12:00</span> <strong>-4°</strong></p>
                <p class="pb-1"><span class="pe-2">13:00</span> <strong>-5°</strong></p>
                <p class="pb-1"><span class="pe-2">14:00</span> <strong>-7°</strong></p>
                <p class="pb-1"><span class="pe-2">15:00</span> <strong>-6°</strong></p>
                <p class="pb-1"><span class="pe-2">16:00</span> <strong>-4°</strong></p>
                <p><span class="pe-2">17:00</span> <strong>-3°</strong></p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}

export default a