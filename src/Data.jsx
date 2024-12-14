import React from "react";

function Data() {

    


    const data = [
        {
          name: "aditya pratap singh",
          image:
            "https://cdn.pixabay.com/photo/2022/11/17/12/45/leaves-7597975_1280.jpg",
        },
      ];
  return (
    <div>
      {data.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <img  width={"20%"} src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Data;
