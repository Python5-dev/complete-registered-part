const ContactUs = () => {
  return (
    <div>
        <h1 className="text-center">Contact US</h1>
        <form action="" className="w-1/2 mx-auto">
            <input type="text" placeholder="Your Email" />
            <textarea name="" id="" rows={10} placeholder="Your Message" className="w-full border my-8 rounded-lg"></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs;
