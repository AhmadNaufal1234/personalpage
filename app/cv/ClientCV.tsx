"use client";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientCV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white dark:from-green-800 dark:to-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow rounded-xl p-6"
      >
        {/* Header dan Foto Profil */}
        <div className="flex items-center gap-6 mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/profile.png"
              alt="Foto Profil"
              width={80}
              height={80}
              className="rounded-full border-4 border-green-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-blue-700">Ahmad Naufal</h1>
            <p className="text-l text-white">
              Programer | Designer | Editor
            </p>
          </motion.div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Tentang Saya */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Tentang Saya
          </h2>
          <p className="text-white mt-2">
            Saya Ahmad Naufal, seorang pemula yang sedang belajar di bidang
            pemrograman, desain, dan editing. Saya tertarik dengan dunia digital
            dan suka mencoba hal-hal baru, terutama yang berkaitan dengan
            teknologi dan kreativitas. Saat ini saya terus mengembangkan skill
            melalui berbagai proyek kecil dan belajar dari pengalaman. Saya
            percaya bahwa dengan usaha dan semangat belajar yang konsisten,
            saya bisa berkembang lebih baik setiap harinya.
          </p>
        </motion.section>

        {/* Pengalaman Karier */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Pengalaman & Kegiatan
          </h2>
          <div className="space-y-2 mt-2">
            <div>
              <p className="font-medium">
                Mahasiswa Aktif - Institut Teknologi dan Bisnis Diniyyah Lampung
              </p>
              <p className="text-sm text-gray-500">2022 - Sekarang</p>
            </div>
            <div>
              <p className="font-medium">
                Mengerjakan Proyek Pribadi (Desain & Web)
              </p>
              <p className="text-sm text-gray-500">2022 - Sekarang</p>
            </div>
            <div>
              <p className="font-medium">
                Editor Konten untuk Media Sosial Pribadi
              </p>
              <p className="text-sm text-gray-500">2024 - Sekarang</p>
            </div>
          </div>
        </motion.section>

        {/* Pendidikan */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Pendidikan</h2>
          <p className="mt-2 text-white">
            S1 Institut Teknologi dan Bisnis Diniyyah Lampung
          </p>
        </motion.section>

        {/* Sosial Media */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Sosial Media
          </h2>
          <p className="text-white">
            TikTok:{" "}
            <a
              href="https://www.tiktok.com/@woonyyy6?is_from_webapp=1&sender_device=pc"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @woonyyy6
            </a>
          </p>
        </motion.section>

        {/* Tombol Kembali */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8"
        >
          <Link href="/">
            <button className="border border-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-600">
              ◀ Kembali
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
