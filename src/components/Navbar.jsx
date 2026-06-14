import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../context/DataContext';

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.slice(2);
    const {dataset} = useContext(Context)
    const [currentch, setCurrentch] = useState("7")
    const handleChange = (e) => {
        const targetpage = Number(e.target.value);
        if(targetpage >= 356){
            setCurrentch("8")
        }else{
            setCurrentch("7")
        }
        if (e.target.value === "home" || e.target.value === "--") {
            navigate("/")
        } else {
            navigate(`/q${e.target.value}`)
        }
    }
    return (
        <nav className="w-full h-15 flex items-center justify-between fixed !z-[1000] bg-black top-0 left-0 !p-[5px_25px]">
            <h1 onClick={()=>navigate("/")} className="text-2xl flex items-center justify-center gap-3 cursor-pointer">
                PB Solution
                <span>(CH - {currentch})</span>
            </h1>
            <select name="question" value={location} className="border-0 outline-3 outline-transparent rounded-lg focus:outline-purple-500 bg-purple-900 !p-[6px_25px]" id="" onChange={handleChange}>
                <option value="--">-- Select --</option>
                <optgroup label="CH-7">
                {
                    dataset.filter(chapter=>chapter.chapter==="7").map((menu, idx) => {
                        return (
                            <option onSelect={()=>setCurrentch(menu.chapter)} key={idx} value={menu.value}>{menu.name}</option>
                        )
                    })
                }
                </optgroup>
                <optgroup label="CH-8">
                {
                    dataset.filter(chapter=>chapter.chapter==="8").map((menu, idx) => {
                        return (
                            <option onSelect={()=>setCurrentch(menu.chapter)} key={idx} value={menu.value}>{menu.name}</option>
                        )
                    })
                }
                </optgroup>
            </select>
        </nav>
    )
}

export default Navbar