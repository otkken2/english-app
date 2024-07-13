interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950 text-white">
      {children}
    </div>
  )
}

export default Layout

