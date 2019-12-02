import React from "react";
import MyCarousel from "../components/carousel/carousel.component";
import HeroBanner from "../components/hero-banner/hero-banner.component";
import {firestore, convertCollectionsSnapshotToMap} from "../firebase/firebase.utils";
import {connect} from "react-redux";
import {updateProperties} from "../redux/properties/properties.actions";
import Category from "../components/category/category.component";
import PropertySection from "../components/property-section/property-section.component";
import withSpinner from "../components/with-spinner/with-spinner.component"
import "./homepage.styles.scss";


const FeaturedPropertiesWithSpinner = withSpinner(MyCarousel);
const PropertiesWithSpinner = withSpinner(PropertySection);

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

    componentWillUnmount(){
        this.unsubscribeFromSnapshot()
    }

    render() {

        const {loading} = this.state;      
        return (
            <div>
                <HeroBanner/>
                <div className=" section-header">
                    <h2>Featured Properties</h2>
                </div>
                
                <FeaturedPropertiesWithSpinner isLoading={loading}/>

                <div className="section-header">
                    <h2>Categories</h2>
                </div>

                <Category/>

                <div className="section-header">
                    <h2>Browse Properties</h2>
                </div>

                <PropertiesWithSpinner isLoading={loading}/>
            </div>  
        )
    }
}


const mapDispatchToProps = dispatch => ({
    updateProperties: propertiesMap => dispatch(updateProperties(propertiesMap))
})

export default connect(null,mapDispatchToProps)(Homepage);