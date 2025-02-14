const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Find Your Legal Expert</h1>
        <p className="text-xl text-gray-600">Connect with experienced lawyers for professional legal consultation</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Search Lawyers</h3>
          <p className="text-gray-600">Browse through our extensive network of qualified legal professionals</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Book Consultations</h3>
          <p className="text-gray-600">Schedule secure online consultations at your convenience</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Share Documents</h3>
          <p className="text-gray-600">Securely share and manage legal documents</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-2">1</div>
            <h3 className="font-semibold mb-2">Find a Lawyer</h3>
            <p className="text-gray-600">Search and filter through our verified lawyers</p>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">2</div>
            <h3 className="font-semibold mb-2">Book Consultation</h3>
            <p className="text-gray-600">Schedule a meeting at your preferred time</p>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">3</div>
            <h3 className="font-semibold mb-2">Get Legal Help</h3>
            <p className="text-gray-600">Connect with your lawyer and get expert advice</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
