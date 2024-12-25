import { motion } from 'framer-motion';
import Image from 'next/image';

const Leadership = () => {
  const leadershipImages = [
    // JPCS Images
    { src: '/pictures/jpcs/Jpcs1.jpg', alt: 'JPCS Event 1', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs2.jpg', alt: 'JPCS Event 2', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs3.jpg', alt: 'JPCS Event 3', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs4.jpg', alt: 'JPCS Event 4', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs5.jpg', alt: 'JPCS Event 5', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs6.jpg', alt: 'JPCS Event 6', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs7.jpg', alt: 'JPCS Event 7', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs8.jpg', alt: 'JPCS Event 8', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs9.jpg', alt: 'JPCS Event 9', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs10.jpg', alt: 'JPCS Event 10', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs11.jpg', alt: 'JPCS Event 11', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs12.jpg', alt: 'JPCS Event 12', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs13.jpg', alt: 'JPCS Event 13', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs14.jpg', alt: 'JPCS Event 14', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs15.jpg', alt: 'JPCS Event 15', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs16.jpg', alt: 'JPCS Event 16', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs17.jpg', alt: 'JPCS Event 17', category: 'JPCS' },
    { src: '/pictures/jpcs/jpcs19.jpg', alt: 'JPCS Event 18', category: 'JPCS' },

    // NKUST Images
    { src: '/pictures/nkust/nkust1.jpg', alt: 'NKUST Event 1', category: 'NKUST' },
    { src: '/pictures/nkust/nkust2.jpg', alt: 'NKUST Event 2', category: 'NKUST' },
    { src: '/pictures/nkust/nkust3.jpg', alt: 'NKUST Event 3', category: 'NKUST' },
    { src: '/pictures/nkust/nkust4.jpg', alt: 'NKUST Event 4', category: 'NKUST' },
    { src: '/pictures/nkust/nkust5.jpg', alt: 'NKUST Event 5', category: 'NKUST' },
    { src: '/pictures/nkust/nkust6.jpg', alt: 'NKUST Event 6', category: 'NKUST' },
    { src: '/pictures/nkust/nkust7.jpg', alt: 'NKUST Event 7', category: 'NKUST' },

    // SCC Images
    { src: '/pictures/scc/scc1.jpg', alt: 'SCC Event 1', category: 'SCC' },
    { src: '/pictures/scc/scc2.jpg', alt: 'SCC Event 2', category: 'SCC' },
    { src: '/pictures/scc/scc3.jpg', alt: 'SCC Event 3', category: 'SCC' },
    { src: '/pictures/scc/scc4.jpg', alt: 'SCC Event 4', category: 'SCC' },
    { src: '/pictures/scc/scc5.jpg', alt: 'SCC Event 5', category: 'SCC' },
    { src: '/pictures/scc/scc6.jpg', alt: 'SCC Event 6', category: 'SCC' },
    { src: '/pictures/scc/scc7.jpg', alt: 'SCC Event 7', category: 'SCC' },
    { src: '/pictures/scc/scc8.jpg', alt: 'SCC Event 8', category: 'SCC' },
    { src: '/pictures/scc/scc9.jpg', alt: 'SCC Event 9', category: 'SCC' },
    { src: '/pictures/scc/scc10.jpg', alt: 'SCC Event 10', category: 'SCC' },
    { src: '/pictures/scc/scc11.jpg', alt: 'SCC Event 11', category: 'SCC' },
    { src: '/pictures/scc/scc12.jpg', alt: 'SCC Event 12', category: 'SCC' },

    // YMCA Images
    { src: '/pictures/ymca/ymca1.jpg', alt: 'YMCA Event 1', category: 'YMCA' },
    { src: '/pictures/ymca/ymca2.jpg', alt: 'YMCA Event 2', category: 'YMCA' },
  ];

  // Function to chunk array into rows
  const chunk = (arr: typeof leadershipImages, size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Create 3 rows of images
  const rows = chunk(leadershipImages, Math.ceil(leadershipImages.length / 3));

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Leadership Journey</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A visual journey through my experiences across various organizations,
            showcasing moments of leadership, collaboration, and community impact.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden mb-4">
              <motion.div
                animate={{
                  x: [-2000, 0],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                    delay: rowIndex * 3,
                  }
                }}
                className="flex gap-3"
              >
                {/* Double the row for seamless loop */}
                {[...row, ...row].map((image, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0"
                    style={{
                      width: '350px',
                      height: '220px',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="350px"
                      priority={index < 6}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                      <p className="text-white font-medium text-lg">{image.category}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
