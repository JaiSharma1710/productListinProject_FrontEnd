function Home({ userData }) {
  return (
    <div className="w-full h-full md:p-4">
      <div className="block animate__animated animate__fadeIn absolute top-0 left-0 bg-gradient-to-r from-violet-200 to-indigo-600 rounded-3xl rotate-45 w-96 h-96" />
      <div className="block animate__animated animate__fadeIn absolute bottom-20 right-0 bg-gradient-to-r from-violet-200 to-indigo-600 rounded-3xl rotate-45 w-36 h-36" />
      <div className="relative w-full h-full bg-white rounded-md shadow-lg">
        <h1 className="text-xl font-bold">
          Hello {userData.firstName} {userData.lastName}
        </h1>
      </div>
    </div>
  );
}

export default Home;
