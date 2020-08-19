import React from 'react'
import { Link } from 'react-router-dom'

const Repolist = ({ repos, username, search }) => {
  const filteredRepos = repos.filter((el) => el.name.includes(search))
  return (
    <div>
      <div className="flex text-center">
        <div className="w-1/3 ml-2 font-semibold pt-2">Имя репозитория</div>
        <div className="w-1/3 ml-2 font-semibold pt-2">Ссылка</div>
        <div className="w-1/3 ml-2 font-semibold pt-2">Readme</div>
      </div>
      {filteredRepos.map((el) => (
        <div key={el.name} className="flex text-center">
          <div className="w-1/3 p-3 border-white rounded border-solid border mb-2 ml-2 mr-2">{el.name}</div>
          <div className="w-1/3 p-3 border-white rounded border-solid border hover:bg-teal-400 duration-100 mb-2 ml-2 mr-2">
            <a href={el.html_url} rel="noreferrer" target="_blank">
              View at GitHub
            </a>
          </div>
          <div className="w-1/3 p-3 border-white rounded border-solid border hover:bg-teal-400 duration-100 mb-2 ml-2 mr-2">
            <Link to={`/${username}/${el.name}`}>View readme</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Repolist
