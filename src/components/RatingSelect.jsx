import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {

    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    const {feedbackEdit} = useContext(FeedbackContext)
    useEffect(() => {
        if(feedbackEdit.edit) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    return (
        <ul className='rating'>{Array.from({length:10}, (e, i) => i+1).map(i => (
            <li key={i}>
                <input
                    type="radio"
                    name="rating"
                    value={i}
                    id={`num${i}`}
                    onChange={handleChange}
                    checked={selected === i}
                />
                <label htmlFor={`num${i}`}>{i}</label>
            </li>))}
        </ul>
    )
}

export default RatingSelect
