
{
  "query": "Extract the tailwind.config.ts file content to understand the styling configuration",
  "web_content_analysis": "The web content is a GitHub repository file view for `tailwind.config.ts`. It contains the configuration for Tailwind CSS.",
  "extracted_data": {
    "file_name": "tailwind.config.ts",
    "file_content": "typescript\nimport type { Config } from \"tailwindcss\"\n\nconst config = {\n  darkMode: [\"class\"],\n  content: [\n    \"./pages/**/*.{ts,tsx}\",\n    \"./components/**/*.{ts,tsx}\",\n    \"./app/**/*.{ts,tsx}\",\n    \"./src/**/*.{ts,tsx}\",\n    \"*.{js,ts,jsx,tsx,mdx}\",\n  ],\n  prefix: \"\",\n  theme: {\n    container: {\n      center: true,\n      padding: \"2rem\",\n      screens: {\n        \"2xl\": \"1400px\",\n      },\n    },\n    extend: {\n      colors: {\n        border: \"hsl(var(--border))\",\n        input: \"hsl(var(--input))\",\n        ring: \"hsl(var(--ring))\",\n        background: \"hsl(var(--background))\",\n        foreground: \"hsl(var(--foreground))\",\n        primary: {\n          DEFAULT: \"hsl(var(--primary))\",\n          foreground: \"hsl(var(--primary-foreground))\",\n        },\n        secondary: {\n          DEFAULT: \"hsl(var(--secondary))\",\n          foreground: \"hsl(var(--secondary-foreground))\",\n        },\n        destructive: {\n          DEFAULT: \"hsl(var(--destructive))\",\n          foreground: \"hsl(var(--destructive-foreground))\",\n        },\n        muted: {\n          DEFAULT: \"hsl(var(--muted))\",\n          foreground: \"hsl(var(--muted-foreground))\",\n        },\n        accent: {\n          DEFAULT: \"hsl(var(--accent))\",\n          foreground: \"hsl(var(--accent-foreground))\",\n        },\n        popover: {\n          DEFAULT: \"hsl(var(--popover))\",\n          foreground: \"hsl(var(--popover-foreground))\",\n        },\n        card: {\n          DEFAULT: \"hsl(var(--card))\",\n          foreground: \"hsl(var(--card-foreground))\",\n        },\n      },\n      borderRadius: {\n        lg: \"var(--radius)\",\n        md: \"calc(var(--radius) - 2px)\",\n        sm: \"calc(var(--radius) - 4px)\",\n      },\n      keyframes: {\n        \"accordion-down\": {\n          from: { height: \"0\" },\n          to: { height: \"var(--radix-accordion-content-height)\" },\n        },\n        \"accordion-up\": {\n          from: { height: \"var(--radix-accordion-content-height)\" },\n          to: { height: \"0\" },\n        },\n      },\n      animation: {\n        \"accordion-down\": \"accordion-down 0.2s ease-out\",\n        \"accordion-up\": \"accordion-up 0.2s ease-out\",\n      },\n    },\n  },\n  plugins: [require(\"tailwindcss-animate\")],\n} satisfies Config\n\nexport default config\n",
    "configuration_details": {
      "darkMode": "[\"class\"] - enables dark mode based on the presence of the 'class' in the HTML.",
      "content": "Defines the files where Tailwind CSS should scan for classes.  Includes: pages, components, app and src directories, all with .ts, .tsx extensions. Also includes root level files with .js, .ts, .jsx, .tsx and .mdx extensions.",
      "prefix": "\"\" - no prefix is added to generated classes.",
      "theme": {
        "container": {
          "center": true,
          "padding": "\"2rem\"",
          "screens": {
            "2xl": "\"1400px\""
          }
        },
        "extend": {
          "colors": {
            "border": "hsl(var(--border))",
            "input": "hsl(var(--input))",
            "ring": "hsl(var(--ring))",
            "background": "hsl(var(--background))",
            "foreground": "hsl(var(--foreground))",
            "primary": {
              "DEFAULT": "hsl(var(--primary))",
              "foreground": "hsl(var(--primary-foreground))"
            },
            "secondary": {
              "DEFAULT": "hsl(var(--secondary))",
              "foreground": "hsl(var(--secondary-foreground))"
            },
            "destructive": {
              "DEFAULT": "hsl(var(--destructive))",
              "foreground": "hsl(var(--destructive-foreground))"
            },
            "muted": {
              "DEFAULT": "hsl(var(--muted))",
              "foreground": "hsl(var(--muted-foreground))"
            },
            "accent": {
              "DEFAULT": "hsl(var(--accent))",
              "foreground": "hsl(var(--accent-foreground))"
            },
            "popover": {
              "DEFAULT": "hsl(var(--popover))",
              "foreground": "hsl(var(--popover-foreground))"
            },
            "card": {
              "DEFAULT": "hsl(var(--card))",
              "foreground": "hsl(var(--card-foreground))"
            }
          },
          "borderRadius": {
            "lg": "var(--radius)",
            "md": "calc(var(--radius) - 2px)",
            "sm": "calc(var(--radius) - 4px)"
          },
          "keyframes": {
            "accordion-down": {
              "from": {
                "height": "0"
              },
              "to": {
                "height": "var(--radix-accordion-content-height)"
              }
            },
            "accordion-up": {
              "from": {
                "height": "var(--radix-accordion-content-height)"
              },
              "to": {
                "height": "0"
              }
            }
          },
          "animation": {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out"
          }
        }
      },
      "plugins": "[require(\"tailwindcss-animate\")] -  includes the tailwindcss-animate plugin"
    }
  },
  "failure_reason": null
}
