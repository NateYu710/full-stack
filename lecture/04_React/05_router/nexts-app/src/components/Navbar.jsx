'use client';
/**
 * 이 컴포넌트를 브라우저에서 동작하는 Client Component로 사용하겠다는 표시
 * Next.js에서는 기본적으로 컴포넌트가 Server Component로 동작
    그런데 다음처럼 사용자와 상호작용하는 기능을 쓰려면 Client Component가 필요
    useState
    useEffect
    onClick
    onChange
 * 
 */


import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {
    const pathname =usePathname(); 
    // usePathname(): 현재 사용자가 보고 있는 페이지의 URL 경로를 가져오는 Next.js Hook
    /**
     * /       → pathname = "/"
        /about  → pathname = "/about"
        /menu   → pathname = "/menu"
     */

     const isActive = (path) => pathname === path; 

     const activeStyle = {
        backgroundColor : 'yellow',
        color :'red'
     }

    return (
        <>
            <p>현재 주소: {pathname}</p>
            <ul>
                <li><Link href="/" style={isActive("/") ? activeStyle : undefined}>메인</Link></li>
                <li><Link href="/about" style={isActive("/about") ? activeStyle : undefined} >소개</Link></li>
                <li><Link href="/menu" style={isActive("/menu") ? activeStyle : undefined}>메뉴</Link></li>
            </ul>
        </>
    )
}