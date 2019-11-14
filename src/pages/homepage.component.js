import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Hero from "../components/hero/hero.component";
import {firestore, convertCollectionsSnapshotToMap} from "../firebase/firebase.utils";
import {connect} from "react-redux";
import {updateProperties} from "../redux/properties/properties.actions";
import withSpinner from "../components/with-spinner/with-spinner.component"
import propertiesReducer from "../redux/properties/properties.reducer";

const PropertiesWithSpinner = withSpinner(Hero);

class Homepage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateProperties} = this.props
        const collectionRef = firestore.collection("properties");
        
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            const propertiesMap = convertCollectionsSnapshotToMap(snapshot);
            updateProperties(propertiesMap);
            this.setState({loading: false});
            
        });

    }
    render() {
        const {loading} = this.state;
        return (
            <Carousel>
                <Carousel.Item>
                    <PropertiesWithSpinner  isLoading={loading}/>
                </Carousel.Item>

                {/* <Carousel.Item>
                    <Hero2/>
                </Carousel.Item>

                <Carousel.Item>
                    <Hero3/>
                </Carousel.Item> */}
            </Carousel>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProperties: propertiesMap => dispatch(updateProperties(propertiesMap))
})

export default connect(null,mapDispatchToProps)(Homepage);