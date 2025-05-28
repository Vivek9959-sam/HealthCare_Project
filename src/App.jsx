import React from 'react'
import Dashboard from './component/Dashboard'
import History from './component/History'
import Calendar from './component/Calendar'
import Appointment from './component/Appointment'
import Statistics from './component/Statistics'
import Chat from './component/Chat'
import Support from './component/Support'
import Setting from './component/Setting'
import './app.css'

function App() {
  return (
    <>
    <div className='container'>
    <div className='container-header'>
      <img className='icon' src='images/Healthcare-icon1.png' alt='Healthcare Icon'/>
      <p className='para2'>General</p>
      <Dashboard />
      <History/>
      <Calendar/>
      <Appointment/>
      <Statistics/>
      <p className='para2'>Tools</p>
      <Chat/>
      <Support/>
      <Setting/>
    </div>

    <div className='container-main'>
      <div className='search'>
      <input className='input1' type='text' placeholder='Search'/><i class="fa-solid fa-bell"></i>
      </div>
      <div className='dash'>
        <h2>Dashboard</h2>
        <select>
          <option selected disabled>This week</option>
        </select>
      </div>
      <div className='body'>
        <div className='image'>
          <img src='images/human body.jpg' alt='Human Body'/>
        </div>
        <div className='cards'>
          <div className='lungs'>
            <img src='images/Lungs.jpg' alt='Lungs'/>
            <span className='span1'></span>
          </div>
          <div className='teeth'>
            <img src='images/Teeth.jpeg' alt='Teeth'/>
          </div>
          <div className='bone'>
            <img src='images/Bones.jpeg' alt='Bones'/>
          </div>
        </div>
      </div>
        <p className='details'>Details <i class="fa-solid fa-right-long"></i> </p>
        <div className='act-img'>
        <div className='act'>
          <p className='activity'>Activity</p>
          <p className='this-3'>3 appointment on this week</p>
        </div>
        <img src='images/Activity.jpeg' alt='Activity'/>
        </div>
    </div>

    <div className='container-sidebar'>
      <div className='avatar'>
        <span className='avatar1'><i class="fa-solid fa-user-tie"></i></span>
        <button className='plus'><i class="fa-solid fa-plus"></i></button>
      </div>
      <div className='oct'>
      <p className='para2'>October 2021</p>
      <i class="fa-solid fa-left-right"></i>
      </div>
      <div className='calendar-d'>
        <div className='mon'>
          <p>Mon</p>
          <p className='date'>25</p>
          <p className='time2'>10:00</p>
          <p>11:00</p>
          <p>12:00</p>
        </div>
        <div className='tues'>
          <p>Tues</p>
          <p className='date'>26</p>
          <p>08:00</p>
          <p className='time'>09:00</p>
          <p>10:00</p>
        </div>
        <div className='wed'>
          <p>Wed</p>
          <p className='date'>27</p>
          <p className='time2'>12:00</p>
          <p>-----</p>
          <p>13:00</p>
        </div>
        <div className='thurs'>
          <p>Thurs</p>
          <p className='date'>28</p>
          <p>10:00</p>
          <p className='time1'>11:00</p>
          <p>-----</p>
        </div>
        <div className='fri'>
          <p>Fri</p>
          <p className='date'>29</p>
          <p>-----</p>
          <p className='time2'>14:00</p>
          <p>16:00</p>
        </div>
        <div className='sat'>
          <p>Sat</p>
          <p className='date'>30</p>
          <p className='time1'>12:00</p>
          <p>14:00</p>
          <p>15:00</p>
        </div>
        <div className='sun'>
          <p>Sun</p>
          <p className='date'>31</p>
          <p className='time1'>09:00</p>
          <p>10:00</p>
          <p>11:00</p>
        </div>
      </div>
      <div className='den-phy'>
      <div className='dentist1'>
      <div className='dentist2'>
        <p className='den'>Dentist</p>
        <i class="fa-solid fa-tooth"></i>
      </div>
      <p>09:00 - 11:00</p>
      <p>Dr.Cameron Williamson</p>
      </div>
      <div className='phy'>
        <div className='app'>
        <div className='appo'>
          <p className='ap'>Physlotheraphy Appointment</p>
          <img src='images/Biceps.webp' alt='Biceps' />
        </div>
        <p className='tim'>11:00 - 12:00</p>
        <p className='tim'>Dr.Kevin Djones</p>
        </div>
      </div>
      </div>
      <p className='upcoming'>The Upcoming Schedule</p>
      <p className='on'>On Thursday</p>
      
      <div className='health-oph'>
        <div className='health-check'>
          <div className='check1'>
            <p className='hea'>Health checkup complete</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <p>11:00 AM</p>
        </div>
        <div className='Oph'>
          <div className='oph1'>
          <div className='Oph2'>
            <p className='hea'>Ophthalmologist</p>
            <i class="fa-solid fa-eye"></i>
          </div>
          <p>14:00 PM</p>
          </div>
        </div>
      </div>
      <p className='on'>On Saturday</p>
      <div className='health-oph'>
        <div className='health-check'>
          <div className='car'>
            <p className='heart'>Cardiologist</p>
            <i class="fa-solid fa-heart"></i>
          </div>
          <p>12:00 PM</p>
        </div>
        <div className='Oph'>
          <div className='oph1'>
          <div className='neo'>
            <p className='dr'>Neurologist</p>
            <i class="fa-solid fa-user-doctor"></i>
          </div>
          <p>16:00 PM</p>
          </div>
        </div>
      </div>
    </div>
    </div>    
    </>
  )
}

export default App