import React from 'react'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/readme.scss'
import '../assets/scss/spinner.scss'

const Readme = ({ readme, error }) => {
  if (error) {
    return ' ReadMe is not found '
  }
  return (
    <div className="mt-5 readme">
      {readme ? (
        <div>
          <Markdown>{readme}</Markdown>
        </div>
      ) : (
        <div className="spinner spinner-bg spinner-alert"> </div>
      )}
    </div>
  )
}
export default Readme
