
import FirstComponent, { FifthComponent } from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent';
import LearingJavaScript from './LearningJavaScript';

export default function LearningComponent(){
    return(
        <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <LearingJavaScript />
        </div>
    );
}