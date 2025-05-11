"use client"

import Head from "next/head";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import AnimatedHeroText from "@/components/AnimatedHeroText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });

  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Transform values for image zoom and opacity
  const imageScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]);
  
  // Transform values for content reveal
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.45], [50, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`min-h-screen bg-black text-white ${inter.className}`}
    >
      <Head>
        <title>PrepAI - AI-Powered Mock Interviews</title>
        <meta name="description" content="Master your interview skills with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Intro Image Section */}
      <motion.div 
  className="fixed inset-0 w-full h-screen flex items-center justify-center z-0"
  style={{ 
    scale: imageScale,
    opacity: imageOpacity,
    pointerEvents: hasScrolled ? "none" : "auto" 
  }}
>
  <div className="relative w-full h-full overflow-hidden">
    {/* Desktop Image (hidden on small screens) */}
    <img 
      src="/intro2.jpg"
      alt="Interview Preparation" 
      className="hidden md:block w-full h-full object-cover object-center"
    />
    
    {/* Mobile/Tablet Image (shown only on small screens) */}
    <img 
      src="/intro-mobile.jpg" 
      alt="Interview Preparation"
      className="md:hidden w-full h-full object-cover object-center" 
    />
    
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
      <AnimatedHeroText />
      </motion.div>
    </div>
  </div>
</motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="relative z-10"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        {/* Spacer to push content down */}
        <div className="h-screen"></div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Powered Interviews",
                description: "Dynamic conversations that adapt to your responses and skill level",
              },
              {
                title: "Real-time Feedback",
                description: "Instant analysis of your answers, body language, and communication skills",
              },
              {
                title: "Industry Specific",
                description: "Tailored questions for your target role and industry",
              },
              {
                title: "Performance Analytics",
                description: "Detailed insights and improvement recommendations",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-xl backdrop-blur-sm border border-purple-700/20 bg-purple-900/10 hover:bg-purple-900/20 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <Star className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative container mx-auto px-4 pt-12 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 bg-yellow-300 rounded-full absolute -left-8 -top-8 blur-3xl opacity-20"></div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Master Your
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  {" "}
                  Interview{" "}
                </span>
                Journey
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Experience AI-powered mock interviews that adapt to your skills and industry. Get real-time feedback and
                improve your chances of landing your dream job.
              </p>
              {/* <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Get Started
              </Button> */}
            </motion.div>

            {/* Right Column - Abstract Shape */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-purple-900/30 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[3rem] p-8 backdrop-blur-sm border border-purple-700/30">
                <div className="flex justify-between mb-12">
                  <div>
                    <h3 className="text-4xl font-bold mb-2">25K+</h3>
                    <p className="text-purple-200">Successful Interviews</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">98%</h3>
                    <p className="text-purple-200">Success Rate</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-purple-700/30 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full w-[85%]"></div>
                  </div>
                  <div className="h-2 bg-purple-700/30 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-24">
          <motion.div 
            className="relative rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ace your next interview?</h2>
                <p className="text-purple-200 mb-8">
                  Join thousands of successful candidates who have mastered their interview skills with PrepAI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                 {/* 🔥 Added Link component to navigate to sign-in page */}
                 <Link href="/sign-in">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative z-10 w-full md:w-1/2 h-64 md:h-80">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-xl"
                >
                  <img 
                    src="/3.jpg" 
                    alt="Interview Success" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-400/10 to-transparent"></div>
          </motion.div>
        </div>

        {/* Footer */}
        {/* <footer className="bg-purple-900/30 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} PrepAI Mock Interview. All rights reserved.</p>
          </div>
        </footer> */}

 <footer className="bg-purple-900/30 text-white py-6">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm">
    <p className="mb-2 md:mb-0">
      <span className="font-semibold">PrepAI</span> Mock Interview Platform
    </p>
    <p className="mb-2 md:mb-0">
      &copy; {new Date().getFullYear()} PrepAI Mock Interview. All rights reserved.
    </p>
    <p>Contact: deepspotify05@gmail.com</p>
  </div>
    </footer>
  </motion.div>
  </div>
  );
}


// import Head from "next/head";
// import { Inter } from "next/font/google";
// import { Button } from "@/components/ui/button";
// import { Star } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import Link from "next/link";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const containerRef = useRef(null);
//   const modelContainerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start", "end"]
//   });

//   const [hasScrolled, setHasScrolled] = useState(false);
  
//   // Transform values for image zoom and opacity
//   const imageScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);
//   const imageOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]);
  
//   // Transform values for content reveal
//   const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
//   const contentY = useTransform(scrollYProgress, [0.3, 0.45], [50, 0]);
  
//   // Transform values for 3D model display
//   const modelOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
//   const modelScale = useTransform(scrollYProgress, [0.25, 0.4], [0.8, 1]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setHasScrolled(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 3D Model Setup
//   useEffect(() => {
//     if (!modelContainerRef.current) return;

//     // Three.js setup
//     const container = modelContainerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);
//     let a = 0;
// scene.background.alpha = a;

//     // scene.background.alpha = a = 0;

//     // Camera
//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
//     camera.position.z = 8; // Increased camera distance for better visibility
//     camera.position.y = 0;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true,
//       alpha: true 
//     });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 0);
//     renderer.outputEncoding = THREE.sRGBEncoding;
//     container.appendChild(renderer.domElement);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Increased ambient light
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2); // Brighter directional light
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     const pointLightBlue = new THREE.PointLight(0x00ffff, 3, 15); // Brighter cyan light
//     pointLightBlue.position.set(0, 2, 2);
//     scene.add(pointLightBlue);

//     // Add a subtle purple light for the theme
//     const pointLightPurple = new THREE.PointLight(0xaa00ff, 2, 15);
//     pointLightPurple.position.set(-3, 0, 2);
//     scene.add(pointLightPurple);

//     // GLB Model Loading
//     const loader = new GLTFLoader();
//     let robotModel;

//     loader.load(
//       '/models/robot3.glb',
//       (gltf) => {
//         robotModel = gltf.scene;
        
//         // Increase model size significantly
//         robotModel.scale.set(3.5, 3.5, 3.5);
        
//         // Position adjustments
//         robotModel.position.y = -1.5;
        
//         // Make sure the robot is facing forward
//         robotModel.rotation.y = Math.PI; // 180 degrees to face forward
        
//         scene.add(robotModel);
        
//         // Make the eyes glow by setting emissive properties
//         robotModel.traverse((object) => {
//           if (object.isMesh && object.name.includes('Eye')) {
//             // Set eye material to be emissive cyan
//             object.material.emissive = new THREE.Color(0x00ffff);
//             object.material.emissiveIntensity = 2;
//           }
//         });
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.error('An error happened', error);
//       }
//     );

//     // Controls - now only used for auto-rotation, not user interaction
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.enableZoom = false;
//     controls.enablePan = false;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 1.2; // Increased rotation speed
    
//     // Disable user interaction (no manual orbiting)
//     controls.enabled = false;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       // Rotate the model itself if controls are disabled
//       if (robotModel) {
//         robotModel.rotation.y += 0.005; // Gentle continuous rotation
//       }
      
//       controls.update(); // For auto-rotation
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       const newWidth = container.clientWidth;
//       const newHeight = container.clientHeight;
      
//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();
      
//       renderer.setSize(newWidth, newHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (container && container.contains(renderer.domElement)) {
//         container.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className={`min-h-screen bg-black text-white ${inter.className}`}
//     >
//       <Head>
//         <title>PrepAI - AI-Powered Mock Interviews</title>
//         <meta name="description" content="Master your interview skills with AI-powered mock interviews" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Intro Image Section */}
//       <motion.div 
//         className="fixed inset-0 w-full h-screen flex items-center justify-center z-0"
//         style={{ 
//           scale: imageScale,
//           opacity: imageOpacity,
//           pointerEvents: hasScrolled ? "none" : "auto" 
//         }}
//       >
//         <img 
//           src="/intro.jpg"
//           alt="Interview Preparation" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-center"
//           >
//             {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">PrepAI</h1>
//             <p className="text-xl md:text-2xl text-gray-200">Scroll to discover</p> */}
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* 3D Model Container - Now positioned in a larger container with better visibility */}
//       <motion.div
//         className="fixed inset-0 w-full h-screen flex items-center justify-center z-5 pointer-events-none"
//         style={{
//           opacity: modelOpacity,
//           scale: modelScale
//         }}
//       >
//         <div 
//           ref={modelContainerRef} 
//           className="w-full h-full max-h-screen" // Ensure it takes full height
//         />
//       </motion.div>

//       {/* Main Content Container */}
//       <motion.div 
//         className="relative z-10"
//         style={{ 
//           opacity: contentOpacity,
//           y: contentY
//         }}
//       >
//         {/* Spacer to push content down */}
//         <div className="h-screen"></div>

//         {/* Features Section */}
//         <div className="container mx-auto px-4 py-24">
//           <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "AI-Powered Interviews",
//                 description: "Dynamic conversations that adapt to your responses and skill level",
//               },
//               {
//                 title: "Real-time Feedback",
//                 description: "Instant analysis of your answers, body language, and communication skills",
//               },
//               {
//                 title: "Industry Specific",
//                 description: "Tailored questions for your target role and industry",
//               },
//               {
//                 title: "Performance Analytics",
//                 description: "Detailed insights and improvement recommendations",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="group relative p-6 rounded-xl backdrop-blur-sm border border-purple-700/20 bg-purple-900/10 hover:bg-purple-900/20 transition-all"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
//                 <Star className="w-6 h-6 text-purple-400 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Hero Section */}
//         <div className="relative container mx-auto px-4 pt-12 pb-24">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column */}
//             <motion.div 
//               className="relative z-10"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="w-64 h-64 bg-yellow-300 rounded-full absolute -left-8 -top-8 blur-3xl opacity-20"></div>
//               <h1 className="text-5xl lg:text-7xl font-bold mb-6">
//                 Master Your
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
//                   {" "}
//                   Interview{" "}
//                 </span>
//                 Journey
//               </h1>
//               <p className="text-lg text-gray-300 mb-8 max-w-xl">
//                 Experience AI-powered mock interviews that adapt to your skills and industry. Get real-time feedback and
//                 improve your chances of landing your dream job.
//               </p>
//               {/* <Button size="lg" className="bg-white text-black hover:bg-gray-200">
//                 Get Started
//               </Button> */}
//             </motion.div>

//             {/* Right Column - Abstract Shape */}
//             <motion.div 
//               className="relative"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute inset-0 bg-purple-900/30 rounded-full blur-3xl"></div>
//               <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[3rem] p-8 backdrop-blur-sm border border-purple-700/30">
//                 <div className="flex justify-between mb-12">
//                   <div>
//                     <h3 className="text-4xl font-bold mb-2">25K+</h3>
//                     <p className="text-purple-200">Successful Interviews</p>
//                   </div>
//                   <div>
//                     <h3 className="text-4xl font-bold mb-2">98%</h3>
//                     <p className="text-purple-200">Success Rate</p>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="h-2 bg-purple-700/30 rounded-full">
//                     <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full w-[85%]"></div>
//                   </div>
//                   <div className="h-2 bg-purple-700/30 rounded-full">
//                     <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full w-[75%]"></div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="container mx-auto px-4 pb-24">
//           <motion.div 
//             className="relative rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 md:p-12 overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="relative z-10 max-w-xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ace your next interview?</h2>
//                 <p className="text-purple-200 mb-8">
//                   Join thousands of successful candidates who have mastered their interview skills with PrepAI.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                  {/* 🔥 Added Link component to navigate to sign-in page */}
//                  <Link href="/sign-in">
//                     <Button size="lg" className="bg-white text-black hover:bg-gray-200">
//                       Get Started
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="relative z-10 w-full md:w-1/2 h-64 md:h-80">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="w-full h-full rounded-xl overflow-hidden shadow-xl"
//                 >
//                   <img 
//                     src="/3.jpg" 
//                     alt="Interview Success" 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//             <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-400/10 to-transparent"></div>
//           </motion.div>
//         </div>

//         {/* Footer */}
//         <footer className="bg-purple-900/30 text-white py-6">
//           <div className="container mx-auto text-center">
//             <p>&copy; {new Date().getFullYear()} PrepAI Mock Interview. All rights reserved.</p>
//           </div>
//         </footer>
//       </motion.div>
//     </div>
//   );
// }

// import Head from "next/head";
// import { Inter } from "next/font/google";
// import { Button } from "@/components/ui/button";
// import { Star } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import Link from "next/link";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { useAuth } from "@clerk/nextjs"; // 🔧 Import useAuth hook
// import { useRouter } from "next/navigation"; // 🔧 Import router

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const containerRef = useRef(null);
//   const modelContainerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start", "end"]
//   });
  
//   // 🔧 Add auth and router
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   const [hasScrolled, setHasScrolled] = useState(false);
  
//   // Transform values for image zoom and opacity
//   const imageScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);
//   const imageOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]);
  
//   // Transform values for content reveal
//   const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
//   const contentY = useTransform(scrollYProgress, [0.3, 0.45], [50, 0]);
  
//   // Transform values for 3D model display
//   const modelOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
//   const modelScale = useTransform(scrollYProgress, [0.25, 0.4], [0.8, 1]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setHasScrolled(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔧 Check if user is already signed in and redirect to dashboard
//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router]);

//   // 3D Model Setup
//   useEffect(() => {
//     if (!modelContainerRef.current) return;

//     // Three.js setup
//     const container = modelContainerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);
//     let a = 0;
//     scene.background.alpha = a;

//     // Camera
//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
//     camera.position.z = 8; // Increased camera distance for better visibility
//     camera.position.y = 0;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true,
//       alpha: true 
//     });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 0);
//     renderer.outputEncoding = THREE.sRGBEncoding;
//     container.appendChild(renderer.domElement);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Increased ambient light
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2); // Brighter directional light
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     const pointLightBlue = new THREE.PointLight(0x00ffff, 3, 15); // Brighter cyan light
//     pointLightBlue.position.set(0, 2, 2);
//     scene.add(pointLightBlue);

//     // Add a subtle purple light for the theme
//     const pointLightPurple = new THREE.PointLight(0xaa00ff, 2, 15);
//     pointLightPurple.position.set(-3, 0, 2);
//     scene.add(pointLightPurple);

//     // GLB Model Loading
//     const loader = new GLTFLoader();
//     let robotModel;

//     loader.load(
//       '/models/robot3.glb',
//       (gltf) => {
//         robotModel = gltf.scene;
        
//         // Increase model size significantly
//         robotModel.scale.set(3.5, 3.5, 3.5);
        
//         // Position adjustments
//         robotModel.position.y = -1.5;
        
//         // Make sure the robot is facing forward
//         robotModel.rotation.y = Math.PI; // 180 degrees to face forward
        
//         scene.add(robotModel);
        
//         // Make the eyes glow by setting emissive properties
//         robotModel.traverse((object) => {
//           if (object.isMesh && object.name.includes('Eye')) {
//             // Set eye material to be emissive cyan
//             object.material.emissive = new THREE.Color(0x00ffff);
//             object.material.emissiveIntensity = 2;
//           }
//         });
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.error('An error happened', error);
//       }
//     );

//     // Controls - now only used for auto-rotation, not user interaction
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.enableZoom = false;
//     controls.enablePan = false;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 1.2; // Increased rotation speed
    
//     // Disable user interaction (no manual orbiting)
//     controls.enabled = false;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       // Rotate the model itself if controls are disabled
//       if (robotModel) {
//         robotModel.rotation.y += 0.005; // Gentle continuous rotation
//       }
      
//       controls.update(); // For auto-rotation
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       const newWidth = container.clientWidth;
//       const newHeight = container.clientHeight;
      
//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();
      
//       renderer.setSize(newWidth, newHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (container && container.contains(renderer.domElement)) {
//         container.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   // 🔧 Create a function to handle the "Get Started" click
//   const handleGetStarted = () => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     } else {
//       router.push("/sign-in");
//     }
//   };

//   return (
//     <div 
//       ref={containerRef} 
//       className={`min-h-screen bg-black text-white ${inter.className}`}
//     >
//       <Head>
//         <title>PrepAI - AI-Powered Mock Interviews</title>
//         <meta name="description" content="Master your interview skills with AI-powered mock interviews" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Intro Image Section */}
//       <motion.div 
//         className="fixed inset-0 w-full h-screen flex items-center justify-center z-0"
//         style={{ 
//           scale: imageScale,
//           opacity: imageOpacity,
//           pointerEvents: hasScrolled ? "none" : "auto" 
//         }}
//       >
//         <img 
//           src="/intro.jpg"
//           alt="Interview Preparation" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-center"
//           >
//             {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">PrepAI</h1>
//             <p className="text-xl md:text-2xl text-gray-200">Scroll to discover</p> */}
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* 3D Model Container - Now positioned in a larger container with better visibility */}
//       <motion.div
//         className="fixed inset-0 w-full h-screen flex items-center justify-center z-5 pointer-events-none"
//         style={{
//           opacity: modelOpacity,
//           scale: modelScale
//         }}
//       >
//         <div 
//           ref={modelContainerRef} 
//           className="w-full h-full max-h-screen" // Ensure it takes full height
//         />
//       </motion.div>

//       {/* Main Content Container */}
//       <motion.div 
//         className="relative z-10"
//         style={{ 
//           opacity: contentOpacity,
//           y: contentY
//         }}
//       >
//         {/* Spacer to push content down */}
//         <div className="h-screen"></div>

//         {/* Features Section */}
//         <div className="container mx-auto px-4 py-24">
//           <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "AI-Powered Interviews",
//                 description: "Dynamic conversations that adapt to your responses and skill level",
//               },
//               {
//                 title: "Real-time Feedback",
//                 description: "Instant analysis of your answers, body language, and communication skills",
//               },
//               {
//                 title: "Industry Specific",
//                 description: "Tailored questions for your target role and industry",
//               },
//               {
//                 title: "Performance Analytics",
//                 description: "Detailed insights and improvement recommendations",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="group relative p-6 rounded-xl backdrop-blur-sm border border-purple-700/20 bg-purple-900/10 hover:bg-purple-900/20 transition-all"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
//                 <Star className="w-6 h-6 text-purple-400 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Hero Section */}
//         <div className="relative container mx-auto px-4 pt-12 pb-24">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column */}
//             <motion.div 
//               className="relative z-10"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="w-64 h-64 bg-yellow-300 rounded-full absolute -left-8 -top-8 blur-3xl opacity-20"></div>
//               <h1 className="text-5xl lg:text-7xl font-bold mb-6">
//                 Master Your
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
//                   {" "}
//                   Interview{" "}
//                 </span>
//                 Journey
//               </h1>
//               <p className="text-lg text-gray-300 mb-8 max-w-xl">
//                 Experience AI-powered mock interviews that adapt to your skills and industry. Get real-time feedback and
//                 improve your chances of landing your dream job.
//               </p>
//               {/* <Button size="lg" className="bg-white text-black hover:bg-gray-200">
//                 Get Started
//               </Button> */}
//             </motion.div>

//             {/* Right Column - Abstract Shape */}
//             <motion.div 
//               className="relative"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute inset-0 bg-purple-900/30 rounded-full blur-3xl"></div>
//               <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[3rem] p-8 backdrop-blur-sm border border-purple-700/30">
//                 <div className="flex justify-between mb-12">
//                   <div>
//                     <h3 className="text-4xl font-bold mb-2">25K+</h3>
//                     <p className="text-purple-200">Successful Interviews</p>
//                   </div>
//                   <div>
//                     <h3 className="text-4xl font-bold mb-2">98%</h3>
//                     <p className="text-purple-200">Success Rate</p>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="h-2 bg-purple-700/30 rounded-full">
//                     <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full w-[85%]"></div>
//                   </div>
//                   <div className="h-2 bg-purple-700/30 rounded-full">
//                     <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full w-[75%]"></div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="container mx-auto px-4 pb-24">
//           <motion.div 
//             className="relative rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 md:p-12 overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="relative z-10 max-w-xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ace your next interview?</h2>
//                 <p className="text-purple-200 mb-8">
//                   Join thousands of successful candidates who have mastered their interview skills with PrepAI.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                  {/* 🔧 Updated to use the handler function instead of direct Link */}
//                  <Button 
//                    size="lg" 
//                    className="bg-white text-black hover:bg-gray-200"
//                    onClick={handleGetStarted}
//                  >
//                    Get Started {isSignedIn ? '⚙️' : ''}
//                  </Button>
//                 </div>
//               </div>
//               <div className="relative z-10 w-full md:w-1/2 h-64 md:h-80">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="w-full h-full rounded-xl overflow-hidden shadow-xl"
//                 >
//                   <img 
//                     src="/3.jpg" 
//                     alt="Interview Success" 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//             <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-400/10 to-transparent"></div>
//           </motion.div>
//         </div>

//         {/* Footer */}
//         <footer className="bg-purple-900/30 text-white py-6">
//           <div className="container mx-auto text-center">
//             <p>&copy; {new Date().getFullYear()} PrepAI Mock Interview. All rights reserved.</p>
//           </div>
//         </footer>
//       </motion.div>
//     </div>
//   );
// }