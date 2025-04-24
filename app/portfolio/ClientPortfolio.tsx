"use client";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Caffe.In",
    description: "Website kopi modern dengan nuansa hangat, menawarkan pengalaman belanja makanan dan minuman terbaik secara online.",
    demoLink: "http://localhost/caffein/",
    repoLink: "#",
    image: "/images/caffein.png",
  },
  {
    title: "Kebabkece",
    description: "Aplikasi mobile kebab cepat saji, menampilkan pilihan kebab populer dengan harga, rating, dan jumlah penjualan.",
    demoLink: "http://localhost/kebabkece/",
    repoLink: "#",
    image: "/images/kebabkece.png",
  },
  {
    title: "Event Kampus",
    description: "Platform acara digital yang menampilkan seminar pendidikan, galeri event, dan katalog acara penuh keseruan dan inspirasi.",
    demoLink: "http://localhost/eivent2/",
    repoLink: "#",
    image: "/images/event.png",
  },
];

export default function ClientPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white dark:from-green-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-2 pt-4 text-blue-700 dark:text-white"
        >
          Fall<span className="text-orange-400">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-l text-gray-600 dark:text-gray-300 mb-8"
        >
          Programer | Designer | Editor
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl font-semibold mb-4 text-blue-600 dark:text-white"
        >
          Proyek Unggulan
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>

              {/* Bungkus Image dengan motion.div */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="rounded-lg mb-4 object-cover"
                />
              </motion.div>

              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex gap-4">
                <a href={project.demoLink} className="text-blue-500 hover:underline">
                  Demo
                </a>
                <a href={project.repoLink} className="text-blue-500 hover:underline">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol kembali */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10"
        >
          <Link href="/">
            <button className="border border-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-600">
              ◀ Kembali
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
