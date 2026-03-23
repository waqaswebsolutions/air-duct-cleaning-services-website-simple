'use client'

export default function Map() {
  // Tampa coordinates
  const lat = 27.9606
  const lng = -82.4452
  
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-primary">Our Location</h2>
      <div className="w-full overflow-hidden bg-gray-100 rounded-lg shadow-md h-96">
        <iframe
          title="PureFlow Air Location - Tampa"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-82.4952%2C27.9106%2C-82.3952%2C28.0106&layer=mapnik&marker=${lat}%2C${lng}`}
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-3 text-center">
        <p className="font-medium text-textDark">1245 Clearwater Avenue, Tampa, FL 33607</p>
        <p className="mt-1 text-sm text-gray-500">
          <a 
            href="https://www.openstreetmap.org/?mlat=27.9606&mlon=-82.4452#map=15/27.9606/-82.4452"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            View larger map →
          </a>
        </p>
      </div>
    </div>
  )
}