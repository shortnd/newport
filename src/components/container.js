import React from "react"

const container = ({ children }) => (
  <>
    <div
      style={{
        maxWidth: `75rem`,
        width: `100%`,
        margin: `0 auto`,
        padding: `0 .9375rem`,
      }}
    >
      {children}
    </div>
  </>
)

export default container
