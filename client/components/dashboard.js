import React, { useEffect, useState } from 'react'
import { useParams, Route } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Repolist from './repo-list'
import Readme from './readme'
import Header from './header'
import Footer from './footer'
import '../assets/scss/dashboard.scss'

const Dashboard = () => {
  const { username, repositoryName } = useParams()
  const [repos, setRepos] = useState([])
  const [readme, Setreadme] = useState('')
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const headers = { Accept: 'application/vnd.github.VERSION.raw+json' }

  useEffect(() => {
    axios.get(` https://api.github.com/users/${username}/repos`).then(({ data }) => setRepos(data))
    axios.get(` https://api.github.com/users/${username}`).then(({ data }) => setUser(data))
    if (repositoryName) {
      axios
        .get(`https://api.github.com/repos/${username}/${repositoryName}/readme`, { headers })
        .then(({ data }) => Setreadme(data))
        .catch(() => setError('File not found...'))
    }
  }, [])

  return (
    <div className="dashboard">
      <Head title="Hello" />
      <Header
        username={username}
        repositoryName={repositoryName}
        user={user}
        setSearch={setSearch}
      />
      <div className="sm:container mx-auto db-container">
        <Route
          exact
          path="/:username"
          component={() => <Repolist repos={repos} username={username} search={search} />}
        />
        <Route
          exact
          path="/:username/:repositoryName"
          component={() => <Readme readme={readme} username={username} error={error} />}
        />
      </div>
      <Footer />
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)
