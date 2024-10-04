
function App() {
  return (
    <>
      <main>
        <nav className="sticky z-50 bg-white w-full p-4 border-b border-black/10 flex gap-4 justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/logo.jpg" alt="HypeCut" className="w-8 h-8 rounded-md" />
            <h1 className="text-xl font-medium"> Admin</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 active:scale-95">Login</button>
          </div>
        </nav>

        <section className="flex gap-4">
          <aside className="w-60 p-4 border-r border-black/10">
            <ul className="space-y-2">
              <li>
                <a href="#" className="block text-black font-medium hover:text-black">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block text-black font-medium hover:text-black">Products</a>
              </li>
              <li>
                <a href="#" className="block text-black font-medium hover:text-black">Orders</a>
              </li>
              <li>
                <a href="#" className="block text-black font-medium hover:text-black">Customers</a>
              </li>
              <li>
                <a href="#" className="block text-black font-medium hover:text-black">Settings</a>
              </li>
            </ul>
          </aside>

          <section className="flex-1 p-4">
            <h2 className="text-2xl font-medium">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="bg-white p-4 rounded-md border border-black/10">
                <h3 className="text-xl font-medium">Products</h3>
                <p className="text-2xl font-semibold mt-2">100</p>
              </div>
              <div className="bg-white p-4 rounded-md border border-black/10">
                <h3 className="text-xl font-medium">Orders</h3>
                <p className="text-2xl font-semibold mt-2">100</p>
              </div>
              <div className="bg-white p-4 rounded-md border border-black/10">
                <h3 className="text-xl font-medium">Customers</h3>
                <p className="text-2xl font-semibold mt-2">100</p>
              </div>
              <div className="bg-white p-4 rounded-md border border-black/10">
                <h3 className="text-xl font-medium">Revenue</h3>
                <p className="text-2xl font-semibold mt-2">$100</p>
              </div>
            </div>
          </section>
        </section>

        <section className="fixed z-50 top-0 left-0 w-full h-full bg-black/50 backdrop-blur flex justify-center items-center p-4">
          <div className="bg-white p-7 md:p-12 rounded-xl w-full max-w-xl">
            <h1 className="text-3xl md:text-4xl font-semibold">Trying to access?</h1>
            <p className="text-lg mt-4">Please login to access the admin panel.</p>

            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-black/10 rounded-md" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg font-medium">Password</label>
                  <input type="password" id="password" className="w-full p-2 border border-black/10 rounded-md" />
                </div>
                <div>
                  <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 active:scale-95">Login</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
