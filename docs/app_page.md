
import type React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Copy, ArrowRight, Github, ExternalLink } from "lucide-react"
import { shortenLink } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      })
      return
    }

    try {
      setIsLoading(true)
      const result = await shortenLink(url)

      if (result.link) {
        setShortUrl(result.link)
        toast({
          title: "Success!",
          description: "Your link has been shortened",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to shorten link",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl)
    toast({
      title: "Copied!",
      description: "Link copied to clipboard",
    })
  }

  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <Toaster />
      <motion.div
        className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 relative"
        style={{ opacity, scale }}
      >
        <motion.div
          className="w-full md:w-1/2 flex flex-col space-y-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">short</span>
            <span className="text-gray-400">.dev</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Simplify your links with style. Create short, memorable links in seconds.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <Button onClick={scrollToForm} className="group bg-white text-black hover:bg-gray-200 rounded-full px-6">
              Get Started
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-full flex items-center justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute inset-0 border border-white/20 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path d="M65 100H135" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <path d="M100 65V135" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div ref={formRef} className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Shorten Your Link
          </motion.h2>
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="url" className="text-sm font-medium text-gray-300">
                  Enter your long URL
                </label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com/very/long/url/that/needs/shortening"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="bg-black border-white/20 text-white placeholder:text-gray-500 focus-visible:ring-white"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300"
              >
                {isLoading ? (
                  <motion.div
                    className="h-5 w-5 border-2 border-black border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                ) : (
                  "Shorten Link"
                )}
              </Button>
            </form>
            <AnimatePresence>
              {shortUrl && (
                <motion.div
                  className="mt-6 p-4 border border-white/10 rounded-lg bg-white/5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:underline flex items-center"
                    >
                      {shortUrl}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={copyToClipboard}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy to clipboard</span>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
              <span className="font-bold">short.dev</span>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} short.dev. All rights reserved.</div>
            <motion.a
              href="https://github.com/devsidhhant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="h-4 w-4" />
              <span>Created by devsidhhant</span>
            </motion.a>
          </div>
        </div>
      </footer>
    </main>
  )
}


**Extraction of `app/page.tsx` content:**

The `app/page.tsx` file contains the code for the main page of the `short.dev` application.  It's a React component that renders a user interface for shortening URLs.

**Key Functionality and Features:**

*   **URL Input:**  A form with an input field (`<Input>`) for users to enter the long URL they want to shorten.
*   **Shortening Logic:**
    *   `handleSubmit` function:  Handles the form submission.
    *   Calls `shortenLink(url)` (imported from `@/app/actions`), which is presumably an API call to a backend service that shortens the URL.
    *   Displays success or error messages using `toast` notifications.
    *   Manages the loading state (`isLoading`) to indicate when the shortening process is in progress.
*   **Display of Shortened URL:**  If the shortening is successful, the shortened URL (`shortUrl`) is displayed.
*   **Copy to Clipboard:** A button allows users to copy the shortened URL to their clipboard using the `copyToClipboard` function.
*   **UI Components:**  Uses UI components from the `@/components/ui` directory (e.g., `Button`, `Input`, `useToast`, `Toaster`).
*   **Animations:** Utilizes the `framer-motion` library for animations and transitions (e.g., `motion.div`, `motion.h1`, `motion.p`, etc.) to create a more engaging user experience. These include scroll-based animations using `useScroll` and `useTransform`.
*   **Layout:**
    *   Uses a `main` element with the `flex flex-col min-h-screen bg-black text-white overflow-hidden` classes for overall page structure and styling.
    *   Includes a `Toaster` component for displaying toast notifications.
    *   The content is divided into sections for the main heading/introduction, the URL shortening form, and a footer.
*   **Footer:** Includes a footer with copyright information, and a link to the creator's GitHub profile.
*   **Responsiveness:**  Uses `md:flex-row`, `md:w-1/2`, etc., to adjust the layout for different screen sizes, making it responsive.

**Libraries and Dependencies:**

*   `react`:  The core React library.
*   `useState`:  React hook for managing component state.
*   `useRef`:  React hook for creating references to DOM elements.
*   `framer-motion`:  A library for creating animations.
*   `lucide-react`:  A library for icons.
*   `@/app/actions`:  Likely contains the `shortenLink` function (API call).
*   `@/components/ui`:  Contains custom UI components.
*   `@/components/ui/button`
*   `@/components/ui/input`
*   `@/components/ui/use-toast`
*   `@/components/ui/toaster`

**State Variables:**

*   `url`:  The long URL entered by the user (string).
*   `shortUrl`:  The shortened URL (string).
*   `isLoading`:  A boolean indicating whether the shortening process is in progress.
