import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  const showNotification = () => {
    return notification ? <div style={style}>{notification}</div> : null
  }
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: '10px',
  }
  return <>{showNotification()}</>
}

export default Notification
