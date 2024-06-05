import { Tab } from "@headlessui/react";
import getClassnames from "../../utility/getClassnames";
import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { fetchUrl } from "../../constants/constants";

const DynamicSellerTabs = ({ tabsCategories ,flag,setFlag}) => {
  const [rating, setRating] = useState(0);
  const navigateUser = useNavigate();
  const [feedbackValue, setFeedbackValue] = useState("");
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const navigate = useLocation();
  const gaveFeedback = () => {
    const token = sessionStorage.getItem("token");
    if (!!token) {
      const decoded = jwtDecode(token.split(" ")[1]);
      const url = `${fetchUrl.add_feedback}/${navigate?.state}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          rating: rating,
          comment: feedbackValue,
          userId: decoded.user_id,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          setFlag(flag + 1)
        });
    } else {
      navigateUser("/login");
    }
    setFeedbackValue("");
    setRating(0)
  };
  
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(tabsCategories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                getClassnames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : " hover:bg-white/[0.12]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.keys(tabsCategories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={getClassnames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
              )}
            >
              {posts === "about" && <div>{tabsCategories.about}</div>}
              {posts === "feedback" && (
                <div>
                  <div className="flex flex-col gap-2 border-2 border-rose-400 py-2 px-2 mb-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Please Provide Your Feedback
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Provide your feedback"
                          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus-visible:white sm:text-sm sm:leading-6"
                          value={feedbackValue}
                          onChange={(e) => setFeedbackValue(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between py-4">
                      <div>
                        <h2 className="text-sm font-medium leading-6 text-gray-900">
                          Rate this course
                        </h2>
                        <StarRating
                          rating={rating}
                          onChange={handleRatingChange}
                        />
                      </div>
                      <button
                        className="flex self-end rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => gaveFeedback()}
                      >
                        Give your feedback here
                      </button>
                    </div>
                  </div>
                  {tabsCategories.feedback.length > 0 &&
                    tabsCategories.feedback.map((ele, ind) => {
                      return (
                        <div
                          key={ind}
                          className="mb-4 p-4 border border-gray-200 rounded"
                        >
                          <div className="font-bold mb-1">{ele.comment}</div>
                          <div className="flex items-center">
                            <span className="text-yellow-500">
                              {"★".repeat(ele.rating)}
                            </span>
                            <span className="text-gray-500 ml-2">
                              {ele.rating}/5
                            </span>
                          </div>
                          <p>user</p>
                        </div>
                      );
                    })}
                </div>
              )}
              {posts === "photos" && (
                <div className="grid grid-cols-3 gap-4">
                  {tabsCategories.photos.length > 0 ? (
                    tabsCategories.photos.map((ele, index) => (
                      <img
                        key={index}
                        src={ele}
                        className="w-full h-full rounded"
                        alt={`Photo ${index + 1}`}
                      />
                    ))
                  ) : (
                    <div className="text-center">No feedback found</div>
                  )}
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default DynamicSellerTabs;
