import NavBar from "@/interface/components/layout/Navbar"
import "./globals.css"

export const metadata = {
  title: 'SYSTEMA Feat DB',
  description: 'Created by Devon Loy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <div className="video-background">
          <div className="video-foreground">
            <div className="pic" />
            <div className="globalFilter" />
          </div>
        </div>
        <div className="globalContainer">
          <NavBar />
          <div className="bodyContainer">
            {children}
          </div>
        </div>
      </body>
    </html >
  )
}
