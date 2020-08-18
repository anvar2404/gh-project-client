import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/header.scss'

const Header = ({ username, repositoryName, user, setSearch }) => {
  return (
    <nav className="header flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={user.avatar_url} alt="" className="mr-4 rounded" width="50" />
        <span className="font-semibold text-xl tracking-tight">
          <Link to="/" className="text-white">
            GITHUB
          </Link>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right justify-end font-semibold">
        {!repositoryName && (
          <div className="block mx-auto ">
            <input
              className="focus:text-white header-input focus:placeholder-opacity-0 border-b-2 border-white outline-none bg-teal-500 bg-opacity-0 rounded text-center p-3 mr-4 placeholder-white placeholder-opacity-75"
              type="text"
              placeholder="find a repository"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
        <div className="text-sm flex-row-reverse ">
          <Link
            to="/"
            className="main-title text-white block mt-4 lg:inline-block lg:mt-0 hover:text-white mx-10"
          >
            Main
          </Link>
          {repositoryName && (
            <Link
              to={`/${username}`}
              className="gh-repos block mt-4 lg:inline-block lg:mt-0 text-white mx-10"
            >
              Repositories
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default Header
