import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <CgProfile className="text-7xl mx-auto tex-blue-600" />
        <h1 className="text-3xl font-bold mt-6 text-center">
          Welcome, Nischal
        </h1>

        <p className="text-center text-gray-500 mt-2">nischal@gmail.com</p>
      </div>

      <div>
        <form action="" method="POST">
            <input type="text" name="firstName" id="" placeholder="First Name" />
            <input type="text" name="lastName" id=""  placeholder="Last Name"  />
            <input type="email" name="email" id=""  placeholder="Email id"/>
            <input type="tel" name="phone" id=""  placeholder="Phone Number"/>
            
        </form>
      </div>
    </section>
  );
};

export default Profile;
