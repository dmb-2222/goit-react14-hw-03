import React from "react";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import { getPhoto } from "./services/ApiGallery";

class AppPhoto extends React.Component {
  state = {
    hits: [],
    isModalOpen: false
  };

  componentDidMount() {
    getPhoto().then(data =>
      this.setState({
        hits: data
      })
    );
  }

  render() {
    const { hits,  isModalOpen } = this.state;
    console.log(hits);
    return (
      <>
        <SearchForm />
        {hits.length > 0 && <Gallery hits={hits} isModalOpen={isModalOpen}/>}
        
      </>
    );
  }
}
export default AppPhoto;
