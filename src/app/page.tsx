"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fundo da imagem com overlay */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/background.jpg)",
        }}
      />
      <div className="fixed inset-0 bg-red-950/95" />

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          className="w-full max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Cabeçalho Villa Itália */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Image
                src="/images/flag.jpg"
                alt="Bandeira da Itália"
                width={48}
                height={36}
                className="object-contain"
              />
              <h1 className="text-6xl md:text-7xl font-serif italic text-white drop-shadow-lg">
                Villa Itália
              </h1>
              <Image
                src="/images/flag.jpg"
                alt="Bandeira da Itália"
                width={48}
                height={36}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Conteúdo do cardápio */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Introdução */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                🍷 Notte Italiana
              </h2>
              <p className="text-xl text-white/90 font-light">
                Uma experiência de sabores da Itália em casa
              </p>
            </div>

            {/* Pizzas da Casa */}
            <motion.section
              className="text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 text-center">
                🍕 Pizzas da Casa
              </h3>
              <p className="text-lg text-white/80 mb-8 text-center">
                (2 sabores)
              </p>

              <div className="space-y-6">
                {/* Pizza 01 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">Margherita</h4>
                    <span className="text-white/70 font-mono">01</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Molho de tomate, mussarela de búfala e manjericão fresco
                  </p>
                </div>

                {/* Pizza 02 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">
                      Moda Da Casa
                    </h4>
                    <span className="text-white/70 font-mono">02</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Frango, catupiry, mussarela e bacon
                  </p>
                </div>
              </div>
            </motion.section>

            <hr className="border-t border-white/20 my-8" />

            {/* Massas Artesanais */}
            <motion.section
              className="text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 text-center">
                🍝 Massas Artesanais
              </h3>

              <div className="space-y-6">
                {/* Spaghetti 05 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">
                      Spaghetti Tradizionale
                    </h4>
                    <span className="text-white/70 font-mono">05</span>
                  </div>
                  <p className="text-white/80 text-sm mb-2">
                    Finas tiras de massa fresca, servidas com opção de molho:
                  </p>
                  <div className="space-y-1 text-white/70 text-sm">
                    <p>
                      🍅 Bolonhesa – clássico molho de carne ao estilo italiano
                    </p>
                    <p>🌿 Molho Branco com Espinafre – suave e aromático</p>
                  </div>
                </div>

                {/* Conchiglioni 06 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">
                      Conchiglioni Ripieni
                    </h4>
                    <span className="text-white/70 font-mono">06</span>
                  </div>
                  <p className="text-white/80 text-sm mb-2">
                    Conchas de massa recheadas, com as mesmas opções de molhos:
                  </p>
                  <div className="space-y-1 text-white/70 text-sm">
                    <p>🍅 Bolonhesa</p>
                    <p>🌿 Molho Branco com Espinafre</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <hr className="border-t border-white/20 my-8" />

            {/* Carta de Vinhos */}
            <motion.section
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 text-center">
                🍷 Carta de Vinhos
              </h3>

              <div className="space-y-6">
                {/* Vinho 07 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">
                      Garibaldi Moscatel
                    </h4>
                    <span className="text-white/70 font-mono">07</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Leve, adocicado e refrescante
                  </p>
                </div>

                {/* Vinho 08 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">
                      La Junta Carmenère
                    </h4>
                    <span className="text-white/70 font-mono">08</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Encorpado, com notas de frutas vermelhas e toque amadeirado
                  </p>
                </div>
              </div>
            </motion.section>

            <hr className="border-t border-white/20 my-8" />

            {/* Dolce Finale */}
            <motion.section
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 text-center">
                🍮 Dolce Finale
              </h3>

              <div className="space-y-6">
                {/* Sobremesa 09 */}
                <div className="border-b border-dotted border-white/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">
                      Mousse de Limão Siciliano
                    </h4>
                    <span className="text-white/70 font-mono">09</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Refrescante e delicado, com o perfume cítrico do limão
                    siciliano e raspas finas para finalizar.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Finalização */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Image
                  src="/images/flag.jpg"
                  alt="Bandeira da Itália"
                  width={40}
                  height={30}
                  className="object-contain"
                />
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                  Buon Appetito!
                </h2>
                <Image
                  src="/images/flag.jpg"
                  alt="Bandeira da Itália"
                  width={40}
                  height={30}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
