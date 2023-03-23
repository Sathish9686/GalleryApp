import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbNailId, isActiveClassName} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const IsActiveClas = isActiveClassName ? `thumbnail active` : `thumbnail`
  const OnclickThumb = () => {
    setActiveThumbNailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={OnclickThumb}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={IsActiveClas}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
