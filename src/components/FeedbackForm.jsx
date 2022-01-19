import Card from './shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = ({target: {value}}) => {
        if(value === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (value.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 chars")           
        }
        else {
            setBtnDisabled(false)
            setMessage(null)   
        }
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

        if(feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }
        else {
            addFeedback(newFeedback)
        }
            
            setText('')
        }
    }

    // That is just object destructuring but in the function arguments.
    // It would be much the same as...
    // const handleTextChange = (event) => { 
    //     const { value } = event.taget // 👈  get the value
    // Or.. 
    //   const handleTextChange = (event) => {
    //     const {target: { value }} = event  // 👈  get the value

    return (
        <Card>
            <form onSubmit={handleSubmit}> 
                <h2>Would you like to rate our service?</h2>
                <RatingSelect select={ (rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text"
                        placeholder="Write something"
                        onChange={handleTextChange}
                        value={text}
                    />

                    <Button
                        type='submit'
                        isDisabled={btnDisabled}
                    >Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
