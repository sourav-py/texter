import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext"

const Search = () => {

    
    const {currentUser} = useContext(AuthContext)

    
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" />
            </div>
        </div>
    )
}

export default Search;