import React from 'react'

const Header = ({ title, btn, toggleForm, buttonText }) => {
  const button = buttonText ? 'close form' : 'open form'
    return (
      <div className="header">
        <h3>{title}</h3>

        <button
          className="btn"
          onClick={toggleForm}
          style={{ backgroundColor: ` ${buttonText ? "red" : "green"}` }}
        >
          {button}
        </button>
      </div>
    )
}

export default Header