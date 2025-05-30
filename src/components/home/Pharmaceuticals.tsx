'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Import assets
import square from '../../assets/square.png';
import aristopharma from '../../assets/aristopharma.png';
import acme from '../../assets/acme.png';
import aci from '../../assets/aci.png';
import general from '../../assets/general.jpg';
import renetea from '../../assets/renetea.png';
import opsonin from '../../assets/opsonin.png';
import beximco from '../../assets/beximco.png';
import skf from '../../assets/skf.png';
import gilead from '../../assets/gilead.png';
import amgen from '../../assets/amgen.png';
import bristol from '../../assets/bristol.png';
import pfizer from '../../assets/phizer.png';
import merckco from '../../assets/merckco.png';

// Logos array
const logos = [
  { image: aristopharma, color: '#e0e0e0', height: 250, width: 250 },
  { image: acme, color: '#e0e0e0', height: 180, width: 170 },
  { image: aci, color: '#d0d0d0', height: 60, width: 60 },
  { image: general, color: '#c0c0c0', height: 105, width: 150 },
  { image: renetea, color: '#b0b0b0', height: 55, width: 60 },
  { image: opsonin, color: '#a0a0a0', height: 90, width: 90 },
  { image: beximco, color: '#909090', height: 80, width: 65 },
  { image: skf, color: '#808080', height: 90, width: 90 },
  { image: square, color: '#707070', height: 50, width: 55 },
  { image: gilead, color: '#707070', height: 250, width: 130 },
  { image: amgen, color: '#707070', height: 200, width: 110 },
  { image: bristol, color: '#707070', height: 220, width: 220 },
  { image: pfizer, color: '#707070', height: 130, width: 150 },
  { image: merckco, color: '#707070', height: 110, width: 120 },
];

export default function Pharmaceuticals() {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="w-full py-4 bg-background rounded-md dark:bg-gray-900 xl:max-w-[1300px] xl:mx-auto">
      <h1 className="text-center py-2 text-3xl font-bold text-gray-900 dark:text-white">
        Trusted by Leading Pharmaceutical Brands
      </h1>

      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-x-10 sm:gap-x-20 w-max whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0   transition-all duration-300"
            >
              <Image
                src={logo.image}
                alt={`Logo ${index}`}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-20"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  
  );
}
