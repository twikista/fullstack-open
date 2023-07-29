import { useNotificationContext } from './NotificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  }

  const [notification] = useNotificationContext()
  const renderNotification = notification ? (
    <div style={style}>{notification}</div>
  ) : null

  return renderNotification
}

export default Notification
