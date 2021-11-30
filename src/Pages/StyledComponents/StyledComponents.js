import React, { Component } from "react";
import styled from "styled-components";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";


const COURSES = [
    {
        id: "1", 
        title: "reactJS", 
        url: "https://www.reactjs.com"
    }, 
    {
        id: "2", 
        title: "Firebase", 
        url: "https://www.firebase.com"
    }, 
    {
        id: "3", 
        title: "GraphQl", 
        url: "https://www.graphql.com"
    }, 
    {
        id: "4", 
        title: "Redux", 
        url: "https://www.redux.com"
    }
];

const applyFilter = searchTerm => article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase());

// applying the styles to AppWrapper using StyledComponents
const AppWrapper = styled.div`
    margin: 20px
`;

// applying the styles to searchWrapper using StyledComponents
const SearchWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

// applying the styles to myInput using StyledComponents
const MyInput = styled.input`
    padding: 5px;
`;

// creating the functionality for  search by taking the properties of value, onSearch and childern
const Search = ({value, onSearch, children}) => (
    <SearchWrapper>
        {children} <br />
        <MyInput value={value} onChange={onSearch} type="text" />
    </SearchWrapper>
);

// applying the styles to list
const List = styled.ul`
    margin: 0,  
    padding: 0, 
    list-style-type: none
`;

// applying styles to listItem
const ListItem = styled.li`
    paddng: 10px 0, 
    borer-bottom: 1px solid grey
`;

// write the definition of courses
const Courses = ({courses}) => (
    <List>
        {courses.map(article => (
            <ListItem key={article.id} className="list-group">
                <Article article={article} />
            </ListItem>
        ))}
    </List>
);

// write Article functionality
const Article = ({article}) => (
    <MyLink href={article.url} className="list-group-item">{article.title}</MyLink>
);

// applying the styles to MyLink
const MyLink = styled.a`
    text-decoration: none;
`;
const StyledComponents = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }
    return(
<div className="container wrapper">
        {/*Header*/}
        <Header />
        <br />
        {/*MainContainer*/}
        <div className="row">
          {/*LeftPanel*/}
          <LeftPanel />
          {/*Container*/}
          {/*<Container */}
          <div className="col-sm-6 ">
            <div className="centertxt">
              <div className="row">
                <div className="col-sm-12">
                  <h1>Styled Components</h1>
                                     <AppWrapper>
                                    <Search value={searchTerm} onSearch={handleSearch}>
                                        <p className="text-danger">search for..,</p>
                                    </Search>

                                    <Courses courses={COURSES.filter(applyFilter(searchTerm))} />
                                </AppWrapper>
                </div>
              </div>
            </div>
          </div>

          {/*RightPanel*/}
          <RightPanel />
        </div>
        <br />
        {/*Footer*/}
        <Footer />
      </div>
    );
}


export default StyledComponents;
