function FeatureItem({img, title, description}) {
  return (
    <div className="features-item bg-darkCyan rounded-lg flex flex-col md:flex-row lg:flex-col justify-center items-center pt-16 pb-12 my-3">
      <img src={img} />
      <div className="feature-description mt-14 px-3 text-center md:text-left lg:text-center">
        <h4>{title}</h4>
        <p className="py-6 px-5">{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem;
