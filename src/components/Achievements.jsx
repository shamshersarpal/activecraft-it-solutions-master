export default function Achievements() {
  return (
    <>
      <div className="achievements bg-gray-100 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <p className="text-lg text-center font-semibold text-[#A6A6A6] uppercase">
            achievements
          </p>
          <h1 className="text-3xl font-bold text-center text-[#404A5C]  mb-10">
           Teamwork and intelligence <br></br> win championships!
          </h1>

          <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center gap-10">
            <div className="text-center">
                <h2 className="text-6xl text-[#FF9900] font-bold">98%</h2>
                <p className="text-2xl text-[#3E495B] font-semibold">client satisfaction</p>
            </div>
           
            <div className="text-center">
                <h2 className="text-6xl text-[#FF9900] font-bold">300+</h2>
                <p className="text-2xl text-[#3E495B] font-semibold">Successful projects</p>
            </div>

             <div className="text-center">
                <h2 className="text-6xl text-[#FF9900] font-bold">250+</h2>
                <p className="text-2xl text-[#3E495B] font-semibold">client </p>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}
