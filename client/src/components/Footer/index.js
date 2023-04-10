import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footercredit'>Smokey Nagata is brought to you by ...</p>
      <ul>
        <li>
          <a className='githublink' href='https://github.com/Abasheryassin' download>Yassin Abasher</a>
        </li>
        <li>
          <a className='githublink' href='https://github.com/JoshuaHamann' download>Joshua Hamann</a>
        </li>
        <li>
          <a className='githublink' href='https://github.com/JuicinessJ' download>Jesse Jiang</a>
        </li>
        <li>
          <a className='githublink' href='https://github.com/gibsonberglund' download>Gibson Berglund</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer