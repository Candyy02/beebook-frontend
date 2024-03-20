import React, { useState } from "react";
import "../styles/Search.scss";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { debounce } from "lodash";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const SERVER_DOMAIN = "http://localhost:8098";
  const delayedSearch = debounce((term) => {
    // Thực hiện tìm kiếm ở đây, có thể gọi API hoặc thực hiện logic tìm kiếm khác

    axios
      .get(SERVER_DOMAIN + "/book/search?keyword=" + searchTerm)
      .then((res) => {
        console.log(res.data);
        setSearchResult(res.data);
      });

    setSearchPerformed(true);
  }, 500); // Thời gian chờ debounce, ở đây là 500ms

  const handleSearchChange = (event) => {
    const term = event.target.value;
    if (term.trim() == "") {
      return;
    }
    setSearchTerm(term);
    setSearchPerformed(false); // Đặt cờ là false khi người dùng thay đổi ô tìm kiếm

    // Gọi hàm tìm kiếm với debounce
    delayedSearch(searchTerm);
  };
  return (
    <div className="search-ctn">
      <input
        type="text"
        name="search"
        id="search-input"
        onChange={handleSearchChange}
      />
      {searchPerformed && searchResult.length === 0 && (
        <ul className="search-result">
          <li>No results found</li>
        </ul>
      )}
      {/* Hiển thị kết quả tìm kiếm */}
      {searchPerformed && searchResult.length > 0 && (
        <ul className="search-result">
          {searchResult.map((res) => (
            <li key={res.id}>{res.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
