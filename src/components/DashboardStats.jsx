import React, { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function DashboardStats({ selectItem }) {
  const [loading, setloading] = useState(true);
  const [finance,setfinance] = useState(false)
  const [studentaffairs,setstudentaffairs] = useState(false)
  const [faculty,setfaculty] = useState(false)
  const [library,setLibrary] = useState(false)
  const id = localStorage.getItem("userid");
  const url = `https://online-clear.onrender.com/student/checkAll/${id}`;
  const checkUnitsDone = async () => {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    const {faculty,library,studentaffairs,finance} = data
    setLibrary(library);
    setfaculty(faculty);
    setfinance(finance);
    setstudentaffairs(studentaffairs)
    console.log(faculty)
    setloading(false)
    // setchecked(status);
  };

  useEffect(()=>{
    setloading(true)
    checkUnitsDone()
  },[])
  if (loading){
    return <div className="h-[70vh] flex justify-center items-center"><h1>Loading</h1></div>
  }
  return (
    <div className="w-full py-3 md:py-4 px-2 gap-4  rounded-md grid grid-cols-2 md:grid-cols-3">
      <div className="w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white">
        <p className="tracking wide">Faculty</p>
        <div
          onClick={() => selectItem("Faculty")}
          className="w-full  h-full justify-center flex items-center"
        >
          {!faculty ? (
            <RxCross1 className="text-red-500" size={40} />
          ) : (
            <GiCheckMark className="text-green-500" size={40} />
          )}
        </div>
      </div>
      <div className="w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white">
        <p className="tracking wide">Library</p>
        <div
          onClick={() => selectItem("Library")}
          className="w-full  h-full justify-center flex items-center"
        >
          {!library ? (
            <RxCross1 className="text-red-500" size={40} />
          ) : (
            <GiCheckMark className="text-green-500" size={40} />
          )}
        </div>
      </div>
      <div className="w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white">
        <p className="tracking wide">Student affairs</p>
        <div
          onClick={() => selectItem("StudentAffairs")}
          className="w-full  h-full justify-center flex items-center"
        >
          {!studentaffairs ? (
            <RxCross1 className="text-red-500" size={40} />
          ) : (
            <GiCheckMark className="text-green-500" size={40} />
          )}
        </div>
      </div>
      <div className="w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white">
        <p className="tracking wide">Finance</p>
        <div
          onClick={() => selectItem("Finance")}
          className="w-full  h-full justify-center flex items-center"
        >
          {!finance ? (
            <RxCross1 className="text-red-500" size={40} />
          ) : (
            <GiCheckMark className="text-green-500" size={40} />
          )}
        </div>
      </div>
      <div className="w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white">
        <p className="tracking wide">Registrar</p>
        <div
          onClick={() => selectItem("Registrar")}
          className="w-full  h-full justify-center flex items-center"
        >
          {!(finance&&library&&studentaffairs&&faculty) ? (
            <RxCross1 className="text-red-500" size={40} />
          ) : (
            <GiCheckMark className="text-green-500" size={40} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
