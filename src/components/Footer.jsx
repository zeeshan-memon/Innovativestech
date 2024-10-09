import React from 'react'
import { useSelector } from 'react-redux'
const Footer = () => {
    const isLoading = useSelector((state) => state.configs.isLoading)
  return (
    <div className="list-footer" style={{ textAlign: 'center', padding: '20px' }}>
    {isLoading ? <div style={{fontSize: "16px", color: "#007bff"}}>Loading...</div> : null}
  </div>
  )
}

export default Footer