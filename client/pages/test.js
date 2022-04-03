import React, { useEffect, useState } from 'react'
import { database } from 'sdk'
import { message } from 'antd'

const Test = ({ token }) => {
  const [data, setData] = useState(null)
  const Create = async () => {
    const dt = { Description: 'asdasd' }
    try {
      const response = await database
        .create({ entity: 'About', environment: 'development', token })
        .data(dt)
        .exec()
      message.success(response.message)
    } catch (error) {
      console.log(error)
      message.error(error.message)
    }
  }
  const fetch = async () => {
    try {
      const response = await database
        .get({ entity: 'About', environment: 'development', token })
        .all()
        .exec()
      setData(response.data)
    } catch (error) {
      message.error(error.message)
    }
  }
  useEffect(() => {
    fetch()
  }, [setData])

  return <>{data && data.map(d => <p>{d.Description}</p>)}</>
}

export default Test
