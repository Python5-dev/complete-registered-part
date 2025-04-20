import Cards from "./registered/admin/Cards";

const ManageResources = () => {
  return (
    <>
      <h1 className='text-center text-[#003366] font-black'>Manage Resources</h1>
      <div className='flex justify-center gap-40 mt-10'>
        <Cards resource="Book" />
        <Cards resource="Pdf" />
      </div>
      <div className='flex justify-center gap-40 mt-28'>
        <Cards resource="Slide" />
        <Cards resource="Past Paper" />
      </div>
    </>
  )
}

export default ManageResources;