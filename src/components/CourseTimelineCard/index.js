// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-details-container">
      <div className="duration-time-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle color=" #171f46" />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="course-para">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="tags-list">
            <p className="list-item">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
