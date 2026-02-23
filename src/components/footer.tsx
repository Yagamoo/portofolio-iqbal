export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-5 border-t border-gray-100">
            <p className="text-sm text-gray-500 tracking-wide">
                © {new Date().getFullYear()} — 
                <span className="font-medium text-gray-800 ml-1">Muh. Iqbal Nur Pamungkas</span>. 
                <span className="hidden md:inline"> All rights reserved.</span>
            </p>
            {/* <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-[0.2em]">
                Built with Next.js • Tailwind CSS • Framer Motion
            </p> */}
        </footer>
    );
}