import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../utility/useFetch";
import { fetchUrl } from "../../constants/constants";
import DynamicSellerTabs from "./DynamicSellerTabs";
const DynamicSellerComp = () => {
  const [tabsCategories, setTabCategories] = useState([]);
  const navigate = useLocation();
  const url = `${fetchUrl.service_details}/${navigate?.state}`;
  const [flag,setFlag]=useState(0);
  const { data, error, loading } = useFetch(url,{},flag);
  useEffect(() => {
    if (!data) return;
    const temp = {
      about: data.results.about,
      feedback: data.results.feedback,
      photos: data.results.photos,
    };
    setTabCategories(temp);
  }, [data]);
  return (
    <div className="container mx-auto my-8 bg-gray-100 p-8 rounded-md">
      {data && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={data?.results.photos[0]}
              alt={data?.results.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">{data?.results.name}</h1>
            <p className="text-gray-600 mb-4">{data?.results.about}</p>
            <p className="text-gray-800 mb-4">
              Rs. {data?.results.price}/-
            </p>            
            <p className="text-gray-800 mb-4">
              Demo Class Link: <a className="text-blue-600" href={data?.results.videoUrl}>Click here</a>
            </p>
          </div>
        </div>
      )}
      <DynamicSellerTabs tabsCategories={tabsCategories} flag={flag} setFlag={setFlag}/>
    </div>
  );
};
export default DynamicSellerComp;
