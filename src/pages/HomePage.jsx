import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Banner from "../ui/Banner";
import "../styles/HomePage.css";
import { useEffect, useState } from "react";
import Book from "../ui/Book";
import TopBook from "../ui/TopBook";

function HomePage() {
  const [newBooks, setNewBooks] = useState([]);
  const [featuredBooks, setfeaturedBooks] = useState([]);
  const [topBooks, setTopBooks] = useState([]);
  const SERVER_DOMAIN = "http://localhost:8098";
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkYzEtY19DejlkT3NCWmxvanpKc011UEwzQlZMTUM2U2ZldEZFeGEtU2JBIn0.eyJleHAiOjE3MTA4MTc2OTksImlhdCI6MTcxMDgxNTg5OSwianRpIjoiM2RkZDA4YWItZDJlZC00OTQ4LWFjNjQtZDVmOWE0YTFkNmYxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9iZWVib29rIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjBiYjAwMTQzLTFkMWEtNGZlOS1hOTYzLTQ4ZTMyZWJmMWI0ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJlZWJvb2stY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6Ijg2NTgzOGIyLTZiY2ItNGZiOS1iZjUzLWZjNTU0YjVlNDIxZCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDkwIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWJlZWJvb2siLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiVVNFUiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6Ijg2NTgzOGIyLTZiY2ItNGZiOS1iZjUzLWZjNTU0YjVlNDIxZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkxlIFRvYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyMSIsImdpdmVuX25hbWUiOiJMZSIsImZhbWlseV9uYW1lIjoiVG9hbiIsImVtYWlsIjoidGxlNzgyNDIyQGdtYWlsLmNvbSJ9.byfVyVI5Q_yOIu12OYnfnbR5XDu3xlNOeFu5itEKWMAi-BIAC728LZXya-2BmAMT1pq21rdIUDmWEea4SWM3CkAZ9k8Slum7YmvIKshsV9Dt4yQ2u0PUEGjaRvZu3VH4vTvovC4FHm6Q--gPsPobj1wN7rAaWK7a2aLlQAAR9WC_DoZNQR0d4PLR3xoGsXCC-gOF1-rr859LPugFAY92hLobBSyBTHO3FfewZOVaMjFbBY5okKjT3a3zi6mPmh8HGa7bwQ1H7Ld5IRXi37sHcxiKZ6ouJ67y-X1_wVtmfi2g-CzWDn7eRQnT33z1LKpdCac3jyQawigC47tAXUxGPw";
  useEffect(() => {
    axios
      .get(SERVER_DOMAIN + "/book/newbooks", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("res", res.data);
        setNewBooks(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(SERVER_DOMAIN + "/book/featured?top=12", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("res", res.data);
        setfeaturedBooks(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(SERVER_DOMAIN + "/book/top-rental-books", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setTopBooks(res.data);
      });
  }, []);
  return (
    <div>
      <div className="home-content">
        <div className="container">
          <Banner />
          {/*Sách mới - thuê ngay */}
          <div className="row">
            <div className="component d-flex justify-content-between">
              <div className="component-left align-items-center d-flex">
                <div className="component-left--rectangle" />
                <p className="component-left--title">Sách mới - Thuê ngay</p>
              </div>
              <div className="component-right d-flex align-items-center">
                <div className="component-right--textleft">&lt;</div>
                <div className="component-right--textright">&gt;</div>
              </div>
            </div>
          </div>
          <div className="row">
            {newBooks.map((book, i) => (
              <Book key={i} book={book} />
            ))}
          </div>
          {/*End sách mới - thuê ngay */}

          {/*Nổi bật */}
          <div className="row">
            <div className="component d-flex justify-content-between">
              <div className="component-left align-items-center d-flex">
                <div className="component-left--rectangle" />
                <p className="component-left--title">Nổi bật</p>
              </div>
              <div className="component-right d-flex align-items-center">
                <div className="component-right--textleft">&lt;</div>
                <div className="component-right--textright">&gt;</div>
              </div>
            </div>
          </div>
          <div className="row">
            {featuredBooks.map((book, i) => (
              <Book key={i} book={book} />
            ))}
          </div>
          {/*End nổi bật */}

          {/*Bảng xếp hạng*/}
          <div className="row">
            <div className="component d-flex justify-content-between">
              <div className="component-left align-items-center d-flex">
                <div className="component-left--rectangle" />
                <p className="component-left--title">Bảng xếp hạng</p>
              </div>
              <div className="component-right d-flex align-items-center">
                <div className="component-right--textleft">&lt;</div>
                <div className="component-right--textright">&gt;</div>
              </div>
            </div>
          </div>

          <div className="row">
            {topBooks.map((book, index) => (
              <TopBook index={index} book={book} />
            ))}
          </div>
          {/*End bảng xếp hạng*/}

          {/*Ưu đãi cực cháy*/}
          <div className="row">
            <div className="component d-flex justify-content-between">
              <div className="component-left align-items-center d-flex">
                <div className="component-left--rectangle" />
                <p className="component-left--title">🎉 Ưu đãi cực cháy 🔥</p>
              </div>
            </div>
          </div>
          <div className="sale-box d-flex">
            <div className="sale-box--left">
              <img
                className="img-fluid"
                alt="Banner"
                src="/images/image-8.png"
              />
              <span className="sale-box--left-discount"> -25%</span>
            </div>
            <div className="sale-box--right">
              <div className="sale-box--right-text">
                <h5>Tên sách</h5>
                <p>Thể loại: tên thể loại</p>
                <p>Mô tả</p>
              </div>
              <div className="sale-box--right-button d-flex">
                <button className="hire-btn d-flex align-items-center justify-content-center">
                  <a href="thue-ngay">Thuê Ngay</a>
                  <div className="sale-box--container-image">
                    <img
                      className="img-fluid"
                      alt="Banner"
                      src="/images/image-20.png"
                    />
                  </div>
                </button>
                <button className="save-btn d-flex align-items-center justify-content-center">
                  <a href="thue-ngay">Lưu Lại</a>
                  <div className="sale-box--container-image ">
                    <img
                      className="img-fluid"
                      alt="Banner"
                      src="/images/image-25.png"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/*End ưu đãi cực cháy*/}

          {/*Thể loại tiểu thuyết */}
          <div className="row">
            <div className="component d-flex justify-content-between">
              <div className="component-left align-items-center d-flex">
                <div className="component-left--rectangle" />
                <p className="component-left--title">Thể loại tiểu thuyết</p>
              </div>
              <div className="component-right d-flex align-items-center">
                <div className="component-right--textleft">&lt;</div>
                <div className="component-right--textright">&gt;</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="product-image">
                <a href="chi-tiet-san-pham">
                  <img
                    className="img-fluid"
                    alt="Banner"
                    src="/images/image-6-14.png"
                  />
                </a>
              </div>
              <div className="new-product--namebook">Tên sách</div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="product-image">
                <a href="chi-tiet-san-pham">
                  <img
                    className="img-fluid"
                    alt="Banner"
                    src="/images/image-6-14.png"
                  />
                </a>
              </div>
              <div className="new-product--namebook">Tên sách</div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="product-image">
                <a href="chi-tiet-san-pham">
                  <img
                    className="img-fluid"
                    alt="Banner"
                    src="/images/image-6-14.png"
                  />
                </a>
              </div>
              <div className="new-product--namebook">Tên sách</div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="product-image">
                <a href="chi-tiet-san-pham">
                  <img
                    className="img-fluid"
                    alt="Banner"
                    src="/images/image-6-14.png"
                  />
                </a>
              </div>
              <div className="new-product--namebook">Tên sách</div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="product-image">
                <a href="chi-tiet-san-pham">
                  <img
                    className="img-fluid"
                    alt="Banner"
                    src="/images/image-6-14.png"
                  />
                </a>
              </div>
              <div className="new-product--namebook">Tên sách</div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="product-image">
                <a href="chi-tiet-san-pham">
                  <img
                    className="img-fluid"
                    alt="Banner"
                    src="/images/image-6-14.png"
                  />
                </a>
              </div>
              <div className="new-product--namebook">Tên sách</div>
            </div>
          </div>
          {/*End tiểu thuyết */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
