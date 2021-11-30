import React, { useState, useEffect } from "react";
import { Browser } from "react-kawaii";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";
import { fetchPhotos } from "./fetchPhotoServices";

// declare the debounce variable
let debounce;

function Functional_LCH() {
    // you are declaring the properties and giving a call to its methods 
    // these declared properties are having some default values that are initializing with useState() method
    // with that methods you can able to update the values into the given properties
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [search, setSearch] = useState();
    const [hasError, setErrors] = useState(false);

    // use of useEffect
    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true);
            const { photos } = await fetchPhotos(search);
            setPhotos(photos);
            setLoading(false);
          } catch(error) {
            setErrors(true);
            setLoading(false);
          }
        }
        fetchData();
      }, [search])

    const updateSearchHandler = ({target: {value}}) => {
        clearInterval(debounce);
        debounce = setTimeout(() => {
          setErrors(false);
          setPhotos([]);
          setSearch(value);
        }, 1000);
      }


    return(
        <div className="container wrapper">
            { /* header */ }
            <Header />

            { /* main container */ }
            <div className="row">
                { /* left panel */}
                <LeftPanel /> 

                { /* center panel */ }
                { /* <Container /> */ }
                <div className="col-sm-6">
                    <div className="contentCenter">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1> search and Fetch Photos using Functional Life Cycle Hooks </h1>

                                <input type="text" className="form-control" placeholder="ex., search for 'cats'" onChange={updateSearchHandler} />

                                <div className='row'>
                                    <div className="col-sm-4">
                                        {!hasError && !isLoading && !search && (
                                            <div className="card card-body">
                                                <div className="p-center">
                                                    <p className="alert alert-info m-bottom-30"> search by any term., </p>
                                                    <Browser size={50}  mood="excited" color="#e0e4e8"  />
                                                </div>
                                            </div>
                                        )}

                                        {isLoading && search && !hasError && (
                                            <div className="card card-body">
                                                <div className="p-center">
                                                    <p className="alert alert-active m-bottom-30"> searching for.., </p>
                                                    <Browser size={50} mood="blissful" color="#e0e4e8" />
                                                </div>
                                            </div>
                                        )}


                                        {hasError && !isLoading && (
                                            <div className="card card-body">
                                                <div className="p-center">
                                                    <p className="alert alert-error m-bottom-30"> oops! an error occured </p>
                                                    <Browser size={50} mood="shocked" color="#e0e4e8" />
                                                </div>
                                            </div>
                                        )}

                                        {!hasError && !isLoading && search && photos && photos.length === 0 && (
                                            <div className="card card-body">
                                                <div className="p-center">
                                                    <p className="alert alert-info m-bottom-30"> oh no! no photos retrieved </p>
                                                    <Browser size={50} mood="sad" color="#e0e4e8" />
                                                </div>
                                            </div>
                                        )}

                                        {photos && photos.length > 0 && (
                                            <div className='card card-body'>
                                                <div className="p-center">
                                                    <p className="alert alert-success m-bottom-30"> hurray! we received some photos </p>
                                                    <div className="row">
                                                        {photos.map(photo => {
                                                            return(<div className="col-sm-3 mr-3 mb-3"><div key={photo.id} className="m-bottom-15">
                                                            <img src={photo.src.medium} alt={photo.title} title={photo.title} />
                                                          </div></div>);
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                { /* rightpanel */}
                <RightPanel />
            </div>

            { /* footer */ }
            <Footer />
        </div>
    );
}

export default Functional_LCH; 