import React, { useState,useEffect } from "react";

function SearchBar({ placeholder, data }) {
    const [users, setUser] = useState([]);

    // axios.get("api/users").then((result) => {
    //     console.log(result)
    //     setUser(result.data.data)
    // }).catch((err) => {
    //     console.log(err)
    // });

    // fetch("api/users")
    // .then(response => {
    //     return response.json();
    // })
    // .then(data => {
    //   console.log(data);
    //   setUser(data.data);
    // })
    // .catch(error => {
    //   console.error("Error:", error);
    // });
  
    useEffect(() => {
        fetch("api/users")
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            setUser(data.data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
      }, []);

    // fetch("/api/users")
    // .then(result => console.log(result))
    // .then(data => {
    //     console.log(data)
    //     setUser(data.data)
    // }).catch(err => console.error(err))

    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {

        setSearch(event.target.value);

        const filteredData = users.filter((user) => {
            console.log(user.name.toLowerCase().includes(search.toLowerCase()));
            return user.name.toLowerCase().includes(search.toLowerCase());
            
        });

        if (search === "") {
            setFilteredData([]);
        } else {
            setFilteredData(filteredData);
        }
    };

    return (
        <div className="row d-flex justify-content-center relative w-96">
            <div className="col-md-6 w-full relative">
                <div className="form " >
                    <i className="fa fa-search "></i>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="form-control form-input "
                        value={search}
                        onChange={handleSearch}
                    />
                    <span className="left-pan">
                        <i className="fa fa-microphone"></i>
                    </span>
                </div>

                {search.length > 0 && (
                    <div className="dataResult max-h-60 overflow-y-auto absolute bg-slate-700 text-white font-thin text-sm rounded max-w-fit">
                        {filteredData.slice(0, 15).map((value, index) => {
                            return (
                                <div className="list border-bottom p-2 hover:bg-slate-500 cursor-pointer" key={index}>
                                    <div className="d-flex flex-column ml-3" >
                                        <span className=" ">{value.name}</span>
                                        
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
