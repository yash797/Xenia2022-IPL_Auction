import React from "react";
import "./ratings.css";

const Ratings = () => {
  const playerDetails = [
    {
      PlayerName: "Player1",
      Position: "Batsman",
      logo: "https://assets.telegraphindia.com/telegraph/2021/Dec/1640288068_24spokohli1_5col.jpg",
    },
    {
      PlayerName: "Player2",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player3",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player4 ",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player5",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player6",
      Position: "Batsman",
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player7",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player8 ",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player9",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player10",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
  ];
  
  return (
    <body>
      <div className="">
        <h1 className="text-orange-600 text-2xl font-semibold bg-[#2a4284] pl-40 pt-12">
          Rate the following players:
        </h1>
        <div className="container  ">
          <form>
            <div className=" lg:grid lg:grid-cols-5 lg:gap-12 pt-12 ">
              {playerDetails.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  <div className="card-img h-[200px] w-[200px] ">
                    <img src={member.logo} alt="cricketer" />
                  </div>
                  <div className="card-content">
                    <p className="card-title">{member.PlayerName}</p>
                    <p className="card-post">{member.Position}</p>
                    <br></br>
                    <input
                      type="number"
                      required
                      name={member.PlayerName}
                      min="0"
                      max="10"
                      placeholder="Rating"
                      className="pl-2 border-solid text-red-500 w-[100px] text-center border-red-300   rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </body>
  );





    //   <div className="Players">
    //     <h1
    //       className="title text-6xl font-semibold text-center text-white pb-12 "
    //       style={{ fontFamily: "Quicksand" }}
    //     >
    //       Rate the Players:
    //     </h1>

    //     <div className="  justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto grid grid-cols-2 gap-2">
    //       <div className="text-center">
    //         <h1 className="text-white text-center text-2xl text-bold">
    //           Technical
    //         </h1>
    //         {playerDetails.map((member, i) => (
    //           <div
    //             key={`member${i}`}
    //             className="cardpink w-[310px] h-[320px] transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
    //           >
    //             <a className="">
    //               <span className=" ">
    //                 <span className="icon">
    //                   <i class="far fa-shopping-cart text-white text-2xl px-64"></i>
    //                 </span>
                    
    //               </span>
    //             </a>
    //             <div className="relative   ">
    //               <div className="">
    //                 <img
    //                   className="Logo max-h-full max-w-full absolute px-12  z-20   "
    //                   src={member.logo}
    //                   alt="Logo1"
    //                 />

    //                 <img
    //                   className="base max-h-full max-w-full z-10 pt-16   "
    //                   src={member.img}
    //                   alt="Players"
    //                 />
    //               </div>
    //             </div>
    //             <br />

    //             <p className="text-white  text-center  p-text-white text-allign:center   px-8 rounded-2xl font-bold  cursor-pointer   ">
    //               {member.PlayerName}
    //             </p>Position: "Batsman",
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    
};

export default Ratings;
