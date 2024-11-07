
import Navbar from '../components/Navbar/Navbar';
import Vegan from '../components/Vegan/Vegan';
import Vegetarian from '../components/Vegetarian/Vegetarian';
import Banner from '../components/Banner/Banner';
function Home() {

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Banner />
                <Vegetarian />
                <Vegan />
            </div>
        </div>
    )
}

export default Home;