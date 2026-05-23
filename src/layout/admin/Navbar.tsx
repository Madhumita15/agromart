import { useAppSeletor } from "../../services/helper/redux"


const Navbar = () => {
  const {user} = useAppSeletor((state)=> state.auth)
  return (
    <>
    <div >
      <div className="flex ">
        <h1 className="text-white text-xl">AGROMART</h1>
         <h1 className="text-white text-xl ml-44">Welcome {user?.name}</h1>
      </div>
     

    </div>
    </>
  )
}

export default Navbar