import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate?</p>
                <p>Ver 1.0.0</p>
                <p>
                    <Link to="/">Geri</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
