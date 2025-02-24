import { useState } from "react";
import { XIcon } from "../../icons/XIcon";
import MaximizeIcon from "../../icons/maximize";

export default function MessageBar() {
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div
            className={`bg-[#FBA403] fixed top-0 right-0 flex items-center pl-4 ${isMinimized ? "pr-2" : "pr-4"} transition-all duration-300 overflow-hidden ${isMinimized ? "h-8 w-12 justify-end" : "h-6 w-full justify-between"
                }`}
        >
            {!isMinimized && (
                <a href="/readme">
                    <p className="text-white text-lg transition-opacity duration-300">
                        🚀 Confira a documentação completa do projeto e veja todos os detalhes! 🚀
                    </p>
                </a>
            )}
            <div className="flex justify-center items-center w-10">
                {isMinimized ?

                    <MaximizeIcon onClick={() => setIsMinimized(!isMinimized)} className="cursor-pointer" /> :


                    <XIcon onClick={() => setIsMinimized(!isMinimized)} className="cursor-pointer" />
                }
            </div>
        </div>
    );
}
