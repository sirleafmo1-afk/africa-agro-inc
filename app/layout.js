export const metadata = {
  title: 'Africa Agro Inc - Agricultural Solutions',
  description: 'Premium agricultural products and services for African farmers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
