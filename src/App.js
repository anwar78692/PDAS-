import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App(){
    return(
    <div>
        <section className = "hero is-primary">
        <div className = "hero-body">

            <p className = "title">Personal Digital Assistance</p>
        </div>
        </section>
    <div className = "container">
        <section className = "section">
        <div className = "columns">
            <div className = "column is-3">
            <ProfileCard  
            title = "Alexa" 
            image = {AlexaImage} 
            handle = "alexa87" 
            description = "Alexa was made by Amazon"/>
            </div>
            <div className = "column is-3">
            <ProfileCard 
            title = "cortana" 
            image = {CortanaImage}  
            handle = "cortana12" 
            description = "This is made by Microsoft" />

            </div>
            <div className = "column is-3">
            <ProfileCard 
            title = "siri" 
            image = {SiriImage}  
            handle = "siri32" 
            description = "Hii this is created by Apple" />
            </div>
            
        </div>

        </section>

        </div>
    </div>

    )
}
export default App;