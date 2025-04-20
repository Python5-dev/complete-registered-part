import { Link } from "react-router-dom"

const LearningPage = () => {
  return (
    <>
      <div className="mt-40 flex justify-center flex-wrap gap-40">
        <Link to="/listening">
          <div className="inline-block">
            <img src="isteninga-removebg-preview.png" className="size-40 mx-auto bg-[#003366] text-white rounded-full p-5" />
            <h4 className="text-center shadow-2xl rounded-3xl p-0 px-10 border-4 border-white text-[#0f6466]">Listening</h4>
          </div>
        </Link>
        <Link to="/reading">
          <div className="inline-block">
            <img src="reading-removebg-preview.png" className="size-40 mx-auto bg-[#003366] text-white rounded-full p-5" />
            <h4 className="text-center shadow-2xl rounded-3xl p-0 px-10 border-4 border-white text-[#0f6466]">Reading</h4>
          </div>
        </Link>
        <Link to="/speaking">
          <div className="inline-block">
            <img src="si-removebg-preview.png" className="size-40 mx-auto bg-[#003366] text-white rounded-full p-5" />
            <h4 className="text-center shadow-2xl rounded-3xl p-0 px-10 border-4 border-white text-[#0f6466]">Speaking</h4>
          </div>
        </Link>
        <Link to="/writing">
          <div className="inline-block">
            <img src="wrr-removebg-preview.png" className="size-40 mx-auto bg-[#003366] text-white rounded-full p-5" />
            <h4 className="text-center shadow-2xl rounded-3xl p-0 px-10 border-4 border-white text-[#0f6466]">Writing</h4>
          </div>
        </Link>
      </div>
      <div className="mt-32 flex justify-center flex-wrap gap-40">
        <Link to="/mock-tests">
          <div className="inline-block">
            <img src="MOT-removebg-preview.png" className="size-40 mx-auto bg-[#003366] text-white rounded-full p-5" />
            <h4 className="text-center shadow-2xl rounded-3xl p-0 px-10 border-4 border-white text-[#0f6466]">Mock Tests</h4>
          </div>
        </Link>
        <Link to="/ielts-overview">
          <div className="inline-block">
            <img src="ieO-removebg-preview.png" className="size-40 mx-auto bg-[#003366] text-white rounded-full p-5" />
            <h4 className="text-center shadow-2xl rounded-3xl p-0 px-10 border-4 border-white text-[#0f6466]">IELTS Overview</h4>
          </div>
        </Link>
      </div>
    </>
  )
}

export default LearningPage
