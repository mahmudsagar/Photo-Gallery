import React from 'react'
import useFireStore from '../hooks/useFireStore'
import {motion} from 'framer-motion'


export default function ImageGrid({setSelectedImg}) {
    const {docs} = useFireStore('image')
    return (
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    );
}
