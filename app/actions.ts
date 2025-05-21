"use server"

export async function shortenLink(longUrl: string) {
  try {
    // Validate and format the URL
    let formattedUrl = longUrl.trim()

    // Add https:// protocol if missing
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = `https://${formattedUrl}`
    }

    // Basic URL validation
    try {
      new URL(formattedUrl)
    } catch (error) {
      return { error: "Invalid URL format. Please enter a valid URL." }
    }

    console.log("Attempting to shorten URL:", formattedUrl)

    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: formattedUrl,
        domain: "bit.ly",
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Bitly API error:", data)
      return { error: data.description || "Failed to shorten link" }
    }

    return { link: data.link }
  } catch (error) {
    console.error("Error shortening link:", error)
    return { error: "Failed to connect to shortening service" }
  }
}
