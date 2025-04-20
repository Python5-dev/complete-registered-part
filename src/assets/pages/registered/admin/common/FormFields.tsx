import { Select } from "antd";

const FormFields = ({ formData, setFormData }:any) => {
  
  const handleChangeInput = (e:any) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData((prevState:any) => ({
        ...prevState,
        file: files ? files[0] : null
      }));
    } else {
      setFormData((prevState:any) => ({
        ...prevState,
        [name]: value
      }));
    }
  }
  
  return (
    <>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChangeInput} />
        </div>
        <div className='mt-5'>
          <Select
            name="type"
            value={formData.type}
            onChange={(value) =>
              handleChangeInput({ target: { name: "type", value } })
            }
            className='w-full outline-none'
            placeholder="Select Book Type"
            options={[
              { value: 'Listening', label: 'Listening' },
              { value: 'Speaking', label: 'Speaking' },
              { value: 'Reading', label: 'Reading' },
              { value: 'Writing', label: 'Writing' },
            ]}
          />
        </div>
        <input type="file" name="file" onChange={handleChangeInput} className='mt-5' />
      </form>
    </>
  )
}

export default FormFields;