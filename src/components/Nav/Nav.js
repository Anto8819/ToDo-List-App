import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/check.png'


export function Nav() {
  return (
    
      <nav className= "navbar  navbar-dark bg-dark p-md-3 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-decoration-none"  to = '/' activeClassName = 'active'>
            
          {/* "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5lYXJHcmFkaWVudCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeDI9IjI1NiIgeTE9IjAiIHkyPSI1MTIiPjxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iIzNlZmYzZiIgb2Zmc2V0PSIwIj48L3N0b3A+PHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSIjMDA5ZTFlIiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1OC4yNTc4MTIgMzEwLjM0NzY1NiAyMjMuOTU3MDMyLTI0NS44MjAzMTIgMjkuNTY2NDA2IDI2LjkzNzUtMjUxLjQ3MjY1NiAyNzYuMDE5NTMxLTEzNy4wODk4NDQtMTMwLjMyMDMxMyAyNy41NjI1LTI4Ljk5MjE4N3ptMjM3Ljk5MjE4OC0xNDMuMDkzNzUtMzEuMTkxNDA2IDM0LjM0Mzc1YzQuNTI3MzQ0IDE3LjM4NjcxOSA2Ljk0MTQwNiAzNS42MTcxODggNi45NDE0MDYgNTQuNDAyMzQ0IDAgMTE5LjEwMTU2Mi05Ni44OTg0MzggMjE2LTIxNiAyMTZzLTIxNi05Ni44OTg0MzgtMjE2LTIxNiA5Ni44OTg0MzgtMjE2IDIxNi0yMTZjNTUuMTc1NzgxIDAgMTA1LjU3NDIxOSAyMC44MDQ2ODggMTQzLjc5Njg3NSA1NC45Njg3NWwyNi45NjQ4NDQtMjkuNjkxNDA2Yy00Ny4wMDc4MTMtNDIuMTkxNDA2LTEwNy4xMDkzNzUtNjUuMjc3MzQ0LTE3MC43NjE3MTktNjUuMjc3MzQ0LTY4LjM3ODkwNiAwLTEzMi42Njc5NjkgMjYuNjI4OTA2LTE4MS4wMTk1MzEgNzQuOTgwNDY5LTQ4LjM1MTU2MyA0OC4zNTE1NjItNzQuOTgwNDY5IDExMi42NDA2MjUtNzQuOTgwNDY5IDE4MS4wMTk1MzFzMjYuNjI4OTA2IDEzMi42Njc5NjkgNzQuOTgwNDY5IDE4MS4wMTk1MzFjNDguMzUxNTYyIDQ4LjM1MTU2MyAxMTIuNjQwNjI1IDc0Ljk4MDQ2OSAxODEuMDE5NTMxIDc0Ljk4MDQ2OXMxMzIuNjY3OTY5LTI2LjYyODkwNiAxODEuMDE5NTMxLTc0Ljk4MDQ2OWM0OC4zNTE1NjMtNDguMzUxNTYyIDc0Ljk4MDQ2OS0xMTIuNjQwNjI1IDc0Ljk4MDQ2OS0xODEuMDE5NTMxIDAtMzAuNzczNDM4LTUuNDEwMTU2LTYwLjcxMDkzOC0xNS43NS04OC43NDYwOTR6bTAgMCIgZmlsbD0idXJsKCNhKSIgZGF0YS1vcmlnaW5hbD0idXJsKCNhKSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" */}
          <img  width="30" height="30" className="" alt="" src={Logo} />

              {/* <img src={Logo} width="30" height="30" className="" alt=""/> */}
              <a className='m-2 text-white text-decoration-none' href='#/'>ToDo List App</a>
            
          </NavLink>
        
          <NavLink to='/add'>
            <button className = 'btn btn-primary'>Add ToDo</button>
          </NavLink>
        
        </div>
        
      
      </nav>
  
  )
};

export default Nav;