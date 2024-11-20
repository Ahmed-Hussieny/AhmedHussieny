const Cv = () => {
    const pdfFilePath = "http://localhost:5173/src/assets/Files/Ahmed-Hussieny.pdf";
  return (
    <div className="vh-100">
        <iframe
      src={pdfFilePath}
      width="100%"
      height="100%"
      style={{ border: "none" }}
    ></iframe>
    </div>
  )
}

export default Cv
