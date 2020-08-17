import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'
import '../assets/scss/main.scss'

const Main = () => {
  const [username, Setusername] = useState('')
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/${username}`)
    }
  }
  return (
    <div className="h-screen flex justify-center items-center main">
      <div className="rounded">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
             x="0px" y="0px"
             viewBox="0 0 512 512" className="mx-auto hidden gh-svg" width="100" height="100">
          <g>
            <g>
              <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
            </g>
          </g>
        </svg>
        <div className="block text-center ">
          <span className="font-bold text-3xl hidden gh-title">GitHub</span>
        </div>
        <input
          className="bg-opacity-0 mb-2 bg-black border-black border-b-2 rounded outline-none text-center p-3 placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
          type="text"
          placeholder="Enter your login"
          onChange={(e) => Setusername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Link
          to={`/${username}`}
          className="text-center block transition ease-in duration-100 hover:text-white hover:bg-teal-400 p-3 rounded-lg"
        >
          Find
        </Link>
      </div>
    </div>
  )
}

export default Main
