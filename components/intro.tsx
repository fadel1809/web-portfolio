import { Card, CardContent } from "@/components/ui/card"


const Intro = () => {
  return (
    <section
      id="core"
      className={` flex flex-col justify-center  bg-black text-white px-6 py-10 md:px-20 `}
    >
      <div className="text-gray-400 text-center">
        <h5>What Do I Offer?</h5>
      </div>
      <div className="text-3xl text-center">
        <h1>
          I offer end-to-end web and application development solutions—from
          building responsive, user-friendly frontends to designing robust and
          scalable backends.
        </h1>
      </div>
      <div className="flex justify-center py-10 flex-wrap gap-6">
        <div >
          <Card className="w-[260px] p-4 bg-[#1a1729] border border-[#463591] hover:shadow-purple-500/20 hover:shadow-xl rounded-xl">
            <div className="text-center flex flex-col items-center">
              <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src="/softwareengineer.svg"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h1 className="text-[#7456FF] font-bold pt-5">System Design</h1>
            </div>
          </Card>
        </div>
        <Card className="w-[260px] p-4 bg-[#1a1729] border border-[#463591] rounded-xl hover:shadow-purple-500/20 hover:shadow-xl">
          <div className="text-center flex flex-col items-center">
            <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img
                src="/problem.svg"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <h1 className="text-[#7456FF] font-bold pt-5">Problem Solving</h1>
          </div>
        </Card>

        <Card className="w-[260px] p-4 bg-[#1a1729] border border-[#463591] rounded-xl hover:shadow-purple-500/20 hover:shadow-xl">
          <div className="text-center flex flex-col items-center">
            <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img
                src="/useroriented.svg"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <h1 className="text-[#7456FF] font-bold pt-5">User Oriented</h1>
          </div>
        </Card>
      </div>
    </section>
  );
}
export default Intro;